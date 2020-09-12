import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import './App.css';
import Login from './Login/Login'


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
        <Redirect to="/login" />
        </Route>
        <Route exact path="/login" component={Login}/>
      </Switch>
    </Router>
   
  );
}

export default App;
