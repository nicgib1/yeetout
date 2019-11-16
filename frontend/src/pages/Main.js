import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { isLoggedIn } from "../utils/utils";
//import logo from '../logo.svg';
import "../App.css";

class Main extends Component {
  componentDidMount() {
    if (isLoggedIn()) {
      console.log("here");
    } else {
    }
  }
  render() {
    return (
      <header>
        <div className="App-header">
          {isLoggedIn() && (
            <>
              <Link to="/login">Login</Link>
              <Link to="/createaccount">Create Account</Link>
            </>
          )}
          <h1>YEETOUT</h1>
          <p>+</p>
        </div>
      </header>
    );
  }
}

//<img src={logo} className="App-logo" alt="logo" />

export default withRouter(Main);
