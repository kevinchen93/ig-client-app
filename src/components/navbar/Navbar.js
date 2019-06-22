import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Search from './Search';

import './_navbar.scss';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar-container">
        <div className="navbar-wrapper">
          <Link to="/">
            <div className="logo-container">
              <i class="fab fa-instagram"></i>
              <div className="separator"></div>
              <p>Instagram</p>
            </div>
          </Link>

          <Search />

          <div className="buttons-container">
            <Link to={"/login"}><button className="login-button">Log In</button></Link>
            <Link to={"/signup"} className="signup-link">Sign Up</Link>
          </div>
        </div>
      </nav>
    )
  }
}