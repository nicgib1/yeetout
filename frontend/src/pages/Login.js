import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import yeetoutService from '../services/yeetout.service';
import '../App.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    yeetoutService.login(email, password)
      .then(response => localStorage.setItem('authToken', response.token))

    setEmail('');
    setPassword('');
  };

  return (
    <div className="App-header">
      <label>
        Email:
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </label>
      <input type="button" value="Submit" onClick={handleSubmit} />
    </div>
  );
}



export default withRouter(Login);
//export default Login;