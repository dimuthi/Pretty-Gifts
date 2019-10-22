import React from 'react';
import logo from './logo.svg';

import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import './App.css';
import SignUpForm from './Components/SignUpForm'
import SignInForm from './Components/SignInForm'

function App() {
  return (
    <Router>
      <div className="App">
        <div className="App__Aside" >
          <div>
          <h1 className="title__fontFamily">Pretty Gifts</h1>

          </div>
          
        <img className="App__Aside-img" src="https://media.giphy.com/media/3oz8xBkRsgPTnbK1GM/giphy.gif"></img>
        </div>
        <div className="App__Form">
          <div className="PageSwitcher">
            <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
            <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
          </div>

          <div className="FormTitle">
            <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="/"
             activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up
        </NavLink>
          </div>

        <Route exact path="/" component={SignUpForm}>
        </Route>

        <Route path="/sign-in" component={SignInForm}>
           
        </Route>
        </div>

      </div>


    </Router>

  );
}

export default App;
