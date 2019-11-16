import React, { useState } from "react";
import { withRouter, Link, Redirect } from "react-router-dom";
import yeetoutService from "../services/yeetout.service";
import "../Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = () => {
    yeetoutService
      .login(email, password)
      .then(response => localStorage.setItem("authToken", response.token));

    setEmail("");
    setPassword("");
    setRedirect(true);
  };

  const renderRedirect = () => {
    if (redirect) {
      return <Redirect to={{ pathname: "/", state: { id: true } }} />;
    }
  };

  return (
    <div className="App-Logo App-header">
      {renderRedirect()}
      <h1 className="App-logo">YEETOUT</h1>
      <label className="Email">
        Email:
        <input 
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </label>
      <input 
        className="Login-btn"
        type="button" 
        value="Submit" 
        onClick={handleSubmit} />
      <Link className="App-link" to="/createaccount">Need an account?</Link>
    </div>
  );
}

export default withRouter(Login);
//export default Login;
