import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './_form.scss';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOrUsernameOrEmail: '',
      password: '',
    };
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
    console.log(this.state.numberOrUsernameOrEmail)
    return (
      <div className="gutter-container">
        <div className="form-container">
          <div className="form-outer-wrapper">
            <div className="form-inner-wrapper">
              <h1>Instagram</h1>
              <div className="form-inner-inner">
                <form onSubmit={this.handleSubmit}>
                  <div className="input-wrapper">
                    <div className={`input-container${this.state.numberOrUsernameOrEmail.length > 0 ? ' active' : ''}`}>
                      <label for="numberOrUsernameOrEmail">Phone number, username, or email</label>
                      <input 
                        type="text" 
                        id="numberOrUsernameOrEmail" 
                        value={this.state.numberOrUsernameOrEmail}
                        onChange={this.update('numberOrUsernameOrEmail')}
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
                    <button>Log in</button>
                  </div>
                  <div className="or-bar">
                    <span className="bar"></span>
                    <span className="or">or</span>
                    <span className="bar"></span>
                  </div>
                  <Link to="/">
                    <p className="facebook-login">
                      <i className="fab fa-facebook-square"></i> Log in with Facebook
                    </p>
                  </Link>
                  <Link to="/"><p className="forgot-password">Forgot password?</p></Link>
                </form>
              </div>
            </div>
            <div className="alternative">
              <p>Don't have an account?  
                <Link to="/signup"> Sign up</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginForm;