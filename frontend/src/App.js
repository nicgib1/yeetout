import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  
} from 'react-router-dom';
import Main from './pages/Main';
import './App.css';
import Login from './pages/Login';

function App() {
  return (
    <>
    <main>
      <Router>
        <Switch>
          <Route path='/' exact component={Main}/>
          <Route path='/login' component={Login}/>
        </Switch>
      </Router>
    </main>
    </>
  );
}

export default App;