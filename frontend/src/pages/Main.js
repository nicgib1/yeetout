import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";
//import logo from '../logo.svg';
import '../App.css';

class Main extends Component {
    
    // handleClick = (user) => {
    //     saveUser(user).then(() =>
    //     this.props.history.push('/login')
    //     )
    // }
  
    render() {
      return (
        <header>
            <div className="App-header">
                <Link to="/login">Login</Link>
                <Link to="/createaccount">Create Account</Link>
                <h1>YEETOUT</h1>
                <p>+</p>
            </div>
        </header>
      );
    }
  }


//<img src={logo} className="App-logo" alt="logo" />

export default withRouter(Main);