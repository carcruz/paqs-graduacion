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
  render() {
    return (
      <Router>
        <div>
          <Nabvar />
          <div className="main-container">
            <Switch>
              <Route path="/" exact component={Home} />
              {/* <PrivateRoute path="/paqs" exact component={Paqs} /> */}
              <Route path="/paqs" exact component={Paqs} />
              <Route path="/login" component={Login} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
