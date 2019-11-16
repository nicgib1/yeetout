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
import ActivityCreation from './pages/ActivityCreation'

function App() {
  return (
    <>
    <main>
      <Router>
        <Switch>
          <Route path='/ActivityCreation' component={ActivityCreation}/>
          {/* <Route path='/' exact component={Main}/>
          <Route path='/login' component={Login}/>
          <Route path='/createaccount' component={CreateAccout}/> */}
        </Switch>
      </Router>
    </main>
    </>
  );
}

export default App;