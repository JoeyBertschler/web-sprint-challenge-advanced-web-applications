import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import BubblePage from './components/BubblePage'
import PrivateRoute from './components/PrivateRoute'
import Login from "./components/Login";
import "./styles.scss";

function App() {

  const logout = () => {
    // const inspectToken = window.localStorage('item')
    // console.log(inspectToken) ---------------------------> not working, how can?
    window.localStorage.removeItem('token')
    window.location.replace('/')
  }

  return (
    <>
    <Router>
      <div className="App">

        <header>
          Color Picker Sprint Challenge
          <a data-testid="logoutButton" href="#" onClick={logout}>logout</a>
        </header> 

      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute path='/bubbles' component={BubblePage} />
      </Switch>

      </div>
    </Router>
    </>
  );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute
//2. Build the logout button to remove the localStorage Item.