import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import './App.css';
import Login from './Login/Login'
import Dashboard from './Dashboard/Dashboard'


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
        <Redirect to="/login" />
        </Route>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/dashboard" component={Dashboard}/>

      </Switch>
    </Router>
   
  );
}

export default App;
