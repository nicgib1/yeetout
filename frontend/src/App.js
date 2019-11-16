import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import './App.css';
import ActivityCreation from './pages/ActivityCreation';
import Login from './pages/Login';

function App() {
  return (
    <>
      <h1>Todo List</h1>
      <main>
        <Router>
          <Switch>
            <Route path='/' exact component={Login} />
          </Switch>
        </Router>
      </main>
    </>
  );
}

export default App;
