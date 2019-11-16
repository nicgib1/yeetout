import React, { useState } from "react";
import { withRouter, Redirect } from "react-router-dom";
import yeetoutService from "../services/yeetout.service";
import "../Login.css";

function CreateAccout() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [date, setDate] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [bio, setBio] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = () => {
    // yeetoutService
    //   .register(email, password, firstName, lastName, date, bio)
    //   .then(response => console.log("hello"));

    yeetoutService.register(email, password, firstName, lastName, date, bio);

    setEmail("");
    setPassword("");
    setDate("");
    setFirstName("");
    setLastName("");
    setBio("");

    setRedirect(true);
  };

  const renderRedirect = () => {
    if (redirect) {
      return <Redirect to={{ pathname: "/login", state: { id: true } }} />;
    }
  };

  return (
    <div className="App-header">
      {renderRedirect()}
      <h2>Create an Accout!</h2>
      <label className="Email">
        Email:
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </label>
      <label className="first-name">
        First Name:
        <input
          type="text"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
      </label>
      <label className="last-name">
        Last Name:
        <input
          type="text"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
      </label>
      <label className="birth">
        Birth Date:
        <input
          type="date"
          value={date}
          onChange={e => setDate(e.target.value)}
        />
      </label>
      <label className="password">
        Password:
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </label>
      <label className="bio">
        Bio:
        <textarea 
          className="bio-field"
          value={bio} 
          onChange={e => setBio(e.target.value)} 
        />
      </label>
      <input 
        className="Login-btn" 
        type="button" 
        value="Submit" 
        onClick={handleSubmit} 
      />
    </div>
  );
}

export default withRouter(CreateAccout);
