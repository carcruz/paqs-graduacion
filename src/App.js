import React, { Component } from 'react';
import logo from './logo.svg';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar inverse>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#home">UTN - Paquetes de graduación</a>
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

export default App;
