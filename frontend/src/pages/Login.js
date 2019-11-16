import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

function Login({ history }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showErrorMsg, setShowErrorMsg] = useState(false);
  const handleSubmit = async (e) => {
      //@TODO: add this when we have the API
    // const token = await todoService.getAuthToken(username, password);
    // if (!token) {
    //   setShowErrorMsg(true);
    // } else {
    //   setShowErrorMsg(false);
    //   localStorage.setItem('authToken', token);
    //   history.push('/');
    // }
    alert('The is note yet implemeneted: ' + this.input.value);
    e.preventDefault();
  };

  return (
    <>
      {showErrorMsg && <h3>Invalid Credentials</h3>}
      <label htmlFor='username'>Username:</label>
      <input
        name='username'
        type='text'
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <br />
      <label htmlFor='password'>Password:</label>
      <input
        name='password'
        type='password'
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>Login</button>
    </>
  );
}

export default withRouter(Login);
