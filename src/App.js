import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Nabvar from "./Navbar";
import Login from "./Login";
import fakeAuth from './auth';
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

const Home = () => <h3>Home</h3>;

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nabvar />
          <div className="main-container">
            <Switch>
              <PrivateRoute path="/" exact component={Home} />
              <Route path="/login" component={Login} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
