import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import HeroCTA from "../shareComponents/HeroCTA";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Grid style={{ marginTop: "70px", lineHeight: "2" }}>
          <Row>
            <Col md={8} mdOffset={2}>
              <h2>Información y contacto</h2>
              <br />
              <h4>Dirección</h4>
              <p>
                Sede Central; Universidad Técnica Nacional. Frente el módulo 2,
                contiguo a la soda de la Institución.
              </p>
              <br />
              <h4>Teléfonos</h4>
              <p>2442-5552 / 2430-6417</p>
              <br />
              <h4>Correo Electrónico</h4>
              <a href="#">paquetesgraduacionutnsedecentral@asoutn.com</a>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
