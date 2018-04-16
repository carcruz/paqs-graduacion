import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem } from "react-bootstrap";

export default class NavbarComp extends Component {
  render() {
    return (
      <div className="App">
        <Navbar inverse fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">UTN - PaqGrad</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1} href="/paqs">
                Paquetes de graduación
              </NavItem>
              <NavItem
                target="_blank"
                eventKey={2}
                href="https://s3-us-west-2.amazonaws.com/carcruzcast-static/utn-paqs/SOLICITUD+y+COMPROBANTE+DERECHOS+DE+GRADUACIO%CC%81N.pdf"
              >
                Formularios
              </NavItem>
              <NavItem
                target="_blank"
                eventKey={2}
                href="https://s3-us-west-2.amazonaws.com/carcruzcast-static/utn-paqs/Politica+de+Abonos+-+Paquetes+de+Graduacio%CC%81n.pdf"
              >
                Politicas de Abonos
              </NavItem>
              <NavItem eventKey={2} href="/contactos">
                Contactenos
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
