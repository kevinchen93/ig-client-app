import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './_form.scss';

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOrEmail: '',
      fullName: '',
      username: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div className="gutter-container">
        <div className="form-container">
          <div className="form-outer-wrapper">
            <div className="form-inner-wrapper">
              <h1>Instagram</h1>
              <div className="form-inner-inner">
                <form onSubmit={this.handleSubmit}>
                  <h2>Sign up to see photos and videos from your friends.</h2>
                  <div className="button-container">
                    <button><i className="fab fa-facebook-square"></i>Log in with Facebook</button>
                  </div>
                  <div className="or-bar">
                    <span className="bar"></span>
                    <span className="or">or</span>
                    <span className="bar"></span>
                  </div>
                  <div className="input-wrapper">
                    <div className={`input-container${this.state.numberOrEmail.length > 0 ? ' active' : ''}`}>
                      <label for="numberOrEmail">Mobile Number or Email</label>
                      <input 
                        type="text" 
                        id="numberOrEmail" 
                        value={this.state.numberOrEmail}
                        onChange={this.update('numberOrEmail')}
                      />
                    </div>
                  </div>
                  <div className="input-wrapper">
                    <div className={`input-container${this.state.fullName.length > 0 ? ' active' : ''}`}>
                      <label for="fullName">Full Name</label>
                      <input 
                        type="text" 
                        id="fullName" 
                        value={this.state.fullName}
                        onChange={this.update('fullName')}
                      />
                    </div>
                  </div>
                  <div className="input-wrapper">
                    <div className={`input-container${this.state.username.length > 0 ? ' active' : ''}`}>
                      <label for="username">Username</label>
                      <input 
                        type="text" 
                        id="username" 
                        value={this.state.username}
                        onChange={this.update('username')}
                      />
                    </div>
                  </div>
                  <div className="input-wrapper">
                    <div className={`input-container${this.state.password.length > 0 ? ' active' : ''}`}>
                      <label for="password">Password</label>
                      <input 
                        type="text" 
                        id="password" 
                        value={this.state.password}
                        onChange={this.update('password')}
                      />
                    </div>
                  </div>
                  <div className="button-container">
                    <button>Sign up</button>
                  </div>
                  <p className="terms">By signing up, you agree to our 
                    <Link to="/"> Terms</Link>, 
                    <Link to="/"> Data Policy, </Link>and 
                    <Link to="/"> Cookies Policy</Link>
                  </p>
                </form>
              </div>
            </div>
            <div className="alternative">
              <p>Have an account?  
                <Link to="/login"> Log in</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SignUpForm;