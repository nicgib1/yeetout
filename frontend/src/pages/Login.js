import React, {Component} from 'react';
import { withRouter} from 'react-router-dom';
import '../App.css';

class Login extends Component {
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(e) {
      alert('The value is: ' + this.input.value);
      e.preventDefault();
    }
  
    render() {
      return (
        <div className="App-header">
            <form onSubmit={this.handleSubmit}>
              <label>
                Email:
                <input type="email" ref={(input) => this.input = input} />
              </label>
              <label>
                Password:
                <input type="password" ref={(input) => this.input = input} />
              </label>
              <input type="submit" value="Submit" />
            </form>
        </div>
      );
    }
  }



//export default withRouter(Login);
export default Login;