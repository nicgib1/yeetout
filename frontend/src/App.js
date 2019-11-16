import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import './App.css';
import ActivityCreation from './pages/ActivityCreation';

function App() {
  return (
    <>
      <h1>Todo List</h1>
      <main>
        <Router>
          <Switch>
            <Route path='/' exact component={ActivityCreation} />
          </Switch>
        </Router>
      </main>
    </>
  );
}

export default App;
