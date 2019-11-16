import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
//import logo from './logo.svg';
import Main from './pages/Main';
import './App.css';

function App() {
  return (
    <main>
      <Router>
        <Switch>
          <Route path='' exact component={Main}/>
        </Switch>
      </Router>
    </main>
  );
}

export default App;
