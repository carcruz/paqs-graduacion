import React, { Component } from "react";
import {
  Grid,
  FormGroup,
  ControlLabel,
  HelpBlock,
  FormControl,
  Row,
  Col,
  Button,
  Radio
} from "react-bootstrap";
import chairsImg from "../assets/chairs.jpg";

export default class Home extends Component {
  render() {
    return (
      <div className="paqs">
        <Grid>
          <Row>
            <Col md={6}>
              <h1>Paquetes de graduación</h1>
              <p>
                Gracias por usar este servicio. Para solicitar su paquete de
                graduación por favor complete el siguiente formulario.
              </p>
              <form>
                <FormGroup controlId="formControlsSelect">
                  <ControlLabel>Carreras</ControlLabel>
                  <FormControl
                    componentClass="select"
                    placeholder="Escoja una carrera"
                  >
                    <option value="select">Contabilidad y finanzas</option>
                    <option value="select">
                      Administración y gestión de recursos humanos
                    </option>
                    <option value="other">Administración aduanera</option>
                  </FormControl>
                </FormGroup>
                <FormGroup>
                  <ControlLabel>Grado académico</ControlLabel>
                  <br />
                  <Radio name="radioGroup" inline>
                    Bachillerato
                  </Radio>{" "}
                  <Radio name="radioGroup" inline>
                    Licenciatura
                  </Radio>{" "}
                </FormGroup>
                <FormGroup>
                  <ControlLabel>Paquete</ControlLabel>
                  <br />
                  <Radio name="radioGroup">
                    Porta título, cinta, pergamino, foto y llavero.
                  </Radio>{" "}
                  <Radio name="radioGroup">
                    Porta título, cinta, pergamino, foto enmarcada y coctel.
                  </Radio>{" "}
                </FormGroup>
              </form>
            </Col>
            <Col
              md={6}
              className="chairs"
              style={{ backgroundImage: `url("${chairsImg}")` }}
            />
          </Row>
        </Grid>
      </div>
    );
  }
}
