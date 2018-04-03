import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';

export default class NavbarComp extends Component {
  render() {
    return (
      <div className="App">
        <Navbar inverse fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">UTN - Paquetes de graduación</Link>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="#">
              Paquetes de graduación
            </NavItem>
            <NavItem eventKey={2} href="#">
              Formularios
            </NavItem>
            <NavItem eventKey={2} href="#">
              Politicas de Abonos
            </NavItem>
            <NavItem eventKey={2} href="#">
              Contactenos
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

