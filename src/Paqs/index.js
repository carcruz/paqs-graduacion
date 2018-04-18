import React, { Component } from "react";
import {
  Grid,
  FormGroup,
  ControlLabel,
  FormControl,
  Row,
  Col,
  Radio,
  Button
} from "react-bootstrap";
import carreras from "./carreras";
import chairsImg from "../assets/chairs.jpg";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.onSelectGrade = this.onSelectGrade.bind(this);
    this.selectCarrera = this.selectCarrera.bind(this);
    this.returnRadioState = this.returnRadioState.bind(this);
    this.state = {
      paq: "",
      carrera: "",
      grado: ""
    };
  }

  returnRadioState(grade) {
    if (this.state.grado === grade) {
      return true;
    }
    return false;
  }

  returnPreview() {
    if (this.state.carrera !== "") {
      return (
        <div className="preview">
          <h3>Prevista</h3>
          <p>
            Revise que ha seleccionado correctamente para seguidamente ejecutar
            un pago
          </p>
          <h4>Carrera</h4>
          <p>{this.state.carrera}</p>
          <h4>Grado</h4>
          <p>{this.state.grado}</p>
          <h4>Paquete</h4>
          <p>{this.state.paq}</p>
          <Button bsStyle="success">Pago online</Button>
          <br />
          <Button bsStyle="primary">Pago en efectvio</Button>
          <br />
          <Button bsStyle="primary">Pago por medio de abonos</Button>
        </div>
      );
    }
    return "";
  }

  selectCarrera(e) {
    this.setState({ carrera: e.target.value });
  }

  onSelectGrade(e) {
    const grado = e.target.value;
    const paq =
      grado === "Bachillerato"
        ? "Porta título, cinta, pergamino, foto y llavero"
        : "Porta título, cinta, pergamino, foto enmarcada y coctel";
    this.setState({ grado, paq });
  }

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
                    onChange={this.selectCarrera}
                  >
                    <option value="none">--- Seleccione una carrera ---</option>
                    {carreras.map((carrera, i) => {
                      return (
                        <option key={`${i}-${carrera}`} value={carrera}>
                          {carrera}
                        </option>
                      );
                    })}
                  </FormControl>
                </FormGroup>
                <FormGroup onChange={this.onSelectGrade}>
                  <ControlLabel>Grado académico</ControlLabel>
                  <br />
                  <Radio name="radioGroup" inline value="Bachillerato">
                    Bachillerato
                  </Radio>{" "}
                  <Radio name="radioGroup" inline value="Licenciatura">
                    Licenciatura
                  </Radio>{" "}
                </FormGroup>
                <FormGroup>
                  <ControlLabel>Paquete</ControlLabel>
                  <br />
                  <Radio
                    name="radioGroup"
                    disabled
                    checked={this.returnRadioState("Bachillerato")}
                  >
                    Porta título, cinta, pergamino, foto y llavero.
                  </Radio>{" "}
                  <Radio
                    name="radioGroup"
                    disabled
                    checked={this.returnRadioState("Licenciatura")}
                  >
                    Porta título, cinta, pergamino, foto enmarcada y coctel.
                  </Radio>{" "}
                </FormGroup>
              </form>
              {this.returnPreview()}
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
