import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
// import { Jumbotron } from "react-bootstrap";
import Nabvar from "./Navbar";
import Login from "./Login";
import fakeAuth from "./auth";
import Home from "./Home";
import Contacto from "./Contacto";
import Paqs from './Paqs';
import "./App.css";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      fakeAuth.isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

class App extends Component {
  paqsSecure() {
    if (process.env.NODE_ENV === "development") {
      return <Route path="/paqs" exact component={Paqs} />
    }
    return <PrivateRoute path="/paqs" exact component={Paqs} />
  }
  render() {
    return (
      <Router>
        <div>
          <Nabvar />
          <div className="main-container">
            <Switch>
              <Route path="/" exact component={Home} />
              {
                this.paqsSecure()
              }
              <Route path="/contactos" component={Contacto} />
              <Route path="/login" component={Login} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
