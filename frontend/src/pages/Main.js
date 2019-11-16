import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { isLoggedIn } from "../utils/utils";
//import logo from '../logo.svg';
import "../App.css";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedin: isLoggedIn(), refresh: false };
  }
  UNSAFE_componentWillUpdate() {
    console.log(this.props.location.state.id);
    this.setState = { refresh: this.props.location.state.id };
    if (this.state.id) {
      console.log("REFRESH");
    }
  }
  componentDidMount() {
    this.setState = { loggedin: isLoggedIn() };
  }

  render() {
    return (
      <header>
        <div className="App-header">
          {!this.state.loggedin && (
            <>
              <Link to="/login">Login</Link>
              <Link to="/createaccount">Create Account</Link>
            </>
          )}
          <h1>YEETOUT</h1>
          <Link to="/createactivity">+</Link>

        </div>
      </header>
    );
  }
}

//<img src={logo} className="App-logo" alt="logo" />

export default withRouter(Main);
