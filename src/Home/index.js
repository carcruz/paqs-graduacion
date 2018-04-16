import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import HeroCTA from "../shareComponents/HeroCTA";

export default class Home extends Component {
  render() {
    return (
      <div>
        <HeroCTA />
        <Grid style={{ marginTop: "70px", lineHeight: "2" }}>
          <Row>
            <Col md={8} mdOffset={2}>
              <h2>Resumen e iniciativa</h2>
              <br />
              <p>
              El proyecto plantea la propuesta de diversos paquetes en el pago
              de los derechos de graduación y el medio por el cual se dé a
              conocer la existencia de estos a la población estudiantil de la
              Universidad Técnica Nacional Sede Central, horario nocturno, en
              los niveles de Bachillerato y Licenciatura, estos contarán con
              productos innovadores (porta títulos, cintas de graduación,
              anillos, pergaminos, llaveros, plumas entre otros) los cuales
              puedan ser adquiridos a precios más accesibles; brindando la
              oportunidad a los estudiantes de seleccionar la colección que
              desee a un costo accesible.
              </p>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
