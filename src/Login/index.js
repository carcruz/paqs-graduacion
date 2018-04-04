import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import {
  Grid,
  FormGroup,
  ControlLabel,
  HelpBlock,
  FormControl,
  Row,
  Col,
  Button
} from "react-bootstrap";
import fakeAuth from "../auth";

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

export default class Login extends Component {
  state = {
    redirectToReferrer: false
  };

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    });
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <Grid className="login">
        <Row>
          <Col xs={6}>
          <p>Antes de iniciar a crear su paquete de graduación es necesario que inicie sesión con sus credenciales de la universidad.</p>
          <form>
            <FieldGroup
              id="formControlsEmail"
              type="email"
              label="Cuenta / Email"
              placeholder="Ingrese su cuenta / email"
            />
            <FieldGroup
              id="formControlsPassWord"
              type="password"
              label="Contraseña"
              placeholder="Ingrese su contraña"
            />
          </form>
          <Button onClick={this.login} bsStyle="primary">Ingresar</Button>
          </Col>
        </Row>
      </Grid>
    );
  }
}
