import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";
//import logo from '../logo.svg';
import '../App.css';

class Main extends Component {
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
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
                <h1>YEETOUT</h1>
                <p>+</p>
            </div>
        </header>
      );
    }
  }


//<img src={logo} className="App-logo" alt="logo" />

export default withRouter(Main);