import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import yeetoutService from "../services/yeetout.service";
import "../App.css";

function CreateAccout() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [date, setDate] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [bio, setBio] = useState("");

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
  };

  return (
    <div className="App-header">
      <h2>Create an Accout!</h2>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </label>
      <label>
        First Name:
        <input
          type="text"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
      </label>
      <label>
        Birth Date:
        <input
          type="date"
          value={date}
          onChange={e => setDate(e.target.value)}
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
      <label>
        Bio:
        <textarea value={bio} onChange={e => setBio(e.target.value)} />
      </label>
      <input type="button" value="Submit" onClick={handleSubmit} />
    </div>
  );
}

export default withRouter(CreateAccout);
