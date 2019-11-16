import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  
} from 'react-router-dom';
import Main from './pages/Main';
import './App.css';
import Login from './pages/Login';
import CreateAccout from './pages/CreateAccount';
import CreateActivity from './pages/CreateActivity'
import Header from "./components/Header";

function App() {
  return (
    <>
    <main>
      <Router>
      <Header />

        <Switch>
          <Route path='/createactivity' component={CreateActivity}/>
          <Route path='/' exact component={Main}/>
          <Route path='/login' component={Login}/>
          <Route path='/createaccount' component={CreateAccout}/>
        </Switch>
      </Router>
    </main>
    </>
  );
}

export default App;