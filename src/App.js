import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import SignUpForm from './components/session_form/Signup_form';
import LoginForm from './components/session_form/Login_form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Navbar} />
        <Route exact path="/signup" component={SignUpForm} />
        <Route exact path="/login" component={LoginForm} />
      </div>
    );
  }
}

export default App;
