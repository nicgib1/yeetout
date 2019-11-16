import React, { useState } from "react";
import { withRouter, Link, Redirect } from "react-router-dom";
import yeetoutService from "../services/yeetout.service";
import "../App.css";

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
    <div className="App-header">
      {renderRedirect()}
      <label>
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
      <Link to="/createaccount">Need an account?</Link>
      <input type="button" value="Submit" onClick={handleSubmit} />
    </div>
  );
}

export default withRouter(Login);
//export default Login;
