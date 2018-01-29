import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LoginForm from '../forms/LoginForm';
import { login } from '../../actions/auth';

class LoginPage extends React.Component {

  //login thunk action which will return a promise, if everything is ok redirect
  // When submit is hit, login function is dispatched passing data form (credentials)
  // In auth.js, login api request is made using the credentials in api.js
  // Take the response from the server and get the data.user Object from it (with email and token)
  // Then we dispatch normal redux action with the user data

  submit = data => this.props.login(data).then(() => this.props.history.push("/"))

  render() {
    return (
      <div>
        <LoginForm submit={this.submit} />
      </div>
    )
  }
}


LoginPage.propTypes = {
  history: PropTypes.shape ({
    push: PropTypes.func.isRequired
  }).isRequired,
  login: PropTypes.func.isRequired

}
export default connect(null, { login })(LoginPage);
