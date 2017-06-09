import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import { Redirect } from 'react-router-dom';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.state = {
      redirect: false
    };
  }

  submit(event) {
    event.preventDefault();
    fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: this.refs.email.value,
        password: this.refs.password.value
      })
    })
      .then(response => response.json())
      .then(response => {
        localStorage.token = response.token;
        this.setState({ redirect: true });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to="/" />;
    }

    return (
      <div id="main">
        <div className="inner">
          <form
            className="register-login-form"
            onSubmit={this.submit}>
            <h3>Login to get started</h3>
            <div className="field">
              <label>Email</label>
            <input
              type="text"
              className="field"
              ref="email"
            />
            </div>
            <div className="field">
            <label>Password</label>
            <input type="password" className="field" ref="password" />
            <input
              className="pull-right register-submit-button"
              type="submit"
              value="Submit"
            />
            </div>
            <div>
              <a href="/register">Register for an account</a>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
