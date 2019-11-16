import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { isLoggedIn } from "../utils/utils";
import yeetoutService from '../services/yeetout.service'
//import logo from '../logo.svg';
import "../App.css";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedin: isLoggedIn(), activities: [] };
  }
  componentDidMount() {
    yeetoutService.getActivities().then(response => {
      this.setState({ activities: response.activities });
      console.log(this.state.activities);
    });
    this.setState({ loggedin: isLoggedIn() });
  }

  render() {
    return (
      <>
        <header>
          <div className="App-header">
            {!this.state.loggedin && (
              <>
                <Link to="/login">Login</Link>
                <Link to="/createaccount">Create Account</Link>
              </>
            )}
            <h1>YEETOUT</h1>
            <p>+</p>
          </div>
        </header>
        <div>
          {this.state.activities.map(item => {
            return (
              <div key={item.id}>
                <div>{item.name}</div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

//<img src={logo} className="App-logo" alt="logo" />

export default withRouter(Main);
