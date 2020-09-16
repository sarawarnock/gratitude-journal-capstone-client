import React from 'react';
import { Link } from 'react-router-dom'
import ErrorBoundary from './error-boundary'
import ValidationError from './validation-error'
import AuthApiService from '../services/auth-api-service'
import TokenService from '../services/token-service'

export default class SignUp extends React.Component {
  state = {
      error: null,
      signUpUsername: {
        value: '',
        touched: false
      },
      signUpPassword: {
        value: '',
        touched: false
      },
      signUpFirstName: {
        value: '',
        touched: false
      },
      signUpLastName: {
        value: '',
        touched: false
      },
      errors: {
        signUpUsername: 'You must enter a valid username',
        signUpPassword: 'You must enter a valid password',
        signUpFirstName: 'You must enter a valid name',
        signUpLastName: 'You must enter a valid name'
      },
      sessionUser: ''
  }

  updateUsername(username) {
    this.setState({ signUpUsername: {value: username, touched: true } })
  }

  updatePassword(password) {
    this.setState({ signUpPassword: { value: password, touched: true } })
  }

  updateFirstName(firstName) {
    this.setState({ signUpFirstName: { value: firstName, touched: true } })
  }

  updateLastName(lastName) {
    this.setState({ signUpLastName: { value: lastName, touched: true } })
  }

  updateSessionUser(userId) {
    this.setState({
      sessionUser: userId
    })
  }

  validateUsername(inputUsername) {
    if (inputUsername == undefined) {
       inputUsername = this.state.signUpUsername.value.trim();
    }
    const usernameFormat = /^(?=.{3,20}$)[a-zA-Z0-9]+(?:_[a-zA-Z0-9]+)+$/;
    if (!inputUsername.match(usernameFormat)) {
      return 'Valid username is required'
    } return ' '
  }

  validatePassword(inputPassword) {
    if (inputPassword == undefined) {
      inputPassword = this.state.signUpPassword.value.trim();
   }
    const passwordFormat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{8,}$/;
    if (!inputPassword.match(passwordFormat)) {
      return 'Valid password is required'
    } return ' '
  }

  validatateFirstName(inputFirstName) {
    if (inputFirstName == undefined) {
      inputFirstName = this.state.signUpFirstName.value.trim();
   }
    const nameFormat = /^[a-zA-Z\-]+$/;
    if (!inputFirstName.match(nameFormat)) {
      return 'Name needs to be more than 2 characters'
    } return ' '
  }

  validatateLastName(inputLastName) {
    if (inputLastName == undefined) {
      inputLastName = this.state.signUpLastName.value.trim();
   }
    const nameFormat = /^[a-zA-Z\-]+$/;
    if (!inputLastName.match(nameFormat)) {
      return 'Name needs to be more than 2 characters'
    } return ' '
  }

handleSubmit = (event) => {
  event.preventDefault();
  const { signUpUsername, signUpPassword, signUpFirstName, signUpLastName } = event.target;
  console.log('username:', signUpUsername.value, 'password:', signUpPassword.value);
  this.setState({ error: null })
  AuthApiService.postUser({
      username: signUpUsername.value,
      password: signUpPassword.value,
      first_name: signUpFirstName.value,
      last_name: signUpLastName.value
  })

  .then(response => {
      console.log('username:', response)
      signUpUsername.value = ''
      signUpPassword.value = ''
      TokenService.saveAuthToken(response.authToken)
      TokenService.saveUserId(response.userId)
      TokenService.saveUserName(response.first_name)
      this.updateSessionUser(response.userId)
      window.location = `/login`
  }) 

  .catch(res => {
      this.setState({ error: res.error })
  })  
}

  render() {
    const usernameError = this.validateUsername();
    const passwordError = this.validatePassword();
    const firstNameError = this.validatateFirstName();
    const lastNameError = this.validatateLastName();
    return (
      <ErrorBoundary>
      <div className="App">
        <main>
            <h1>Sign Up</h1>
                <form className="signup-form" onSubmit={this.handleSubmit}>
                
                    <div className="signup-username">
                    <label className ="user-label" htmlFor="username">Username</label>
                    <input 
                      name="signUpUsername"
                      type="text" 
                      id="username" 
                      placeholder="Username"
                      required
                      onChange={e => this.updateUsername(e.target.value)}
                    />
                    {this.state.signUpUsername.touched && <ValidationError message={usernameError} />}
                    </div>
                    <div className="signup-password">
                    <label className ="user-label" htmlFor="password">Password (one capital letter and one number needed)</label>
                    <input 
                      name="signUpPassword"
                      type="password" 
                      id="password" 
                      placeholder="Password"
                      required
                      onChange={e => this.updatePassword(e.target.value)}
                    /> 
                    {this.state.signUpPassword.touched && <ValidationError message={passwordError} />}
                    </div>
                    <div className="signup-fname">
                    <label className ="user-label" htmlFor="fname">First Name</label>
                    <input 
                      name="signUpFirstName"
                      type="text" 
                      id="fname" 
                      placeholder="First Name"
                      required
                      onChange={e => this.updateFirstName(e.target.value)}
                    /> 
                    {this.state.signUpFirstName.touched && <ValidationError message={firstNameError} />}
                    </div>
                    <div>
                    <label className ="user-label" htmlFor="lname">Last Name</label>
                    <input 
                      name="signUpLastName"
                      type="text" 
                      id="lname" 
                      placeholder="Last Name"
                      required
                      onChange={e => this.updateLastName(e.target.value)}
                    /> 
                    {this.state.signUpLastName.touched && <ValidationError message={lastNameError} />}
                    </div>
                    <button className="button submit-button" type="submit">Sign Up!</button>

                    {/* <div className="button" id="button-3">
                      <div id="circle"></div>
                      <button type="submit">Sign Up</button>
                    </div> */}
                </form>
                <div className="container">
                    <h2>Already have an account?</h2>
                    <div className="button" id="button-3">
                      <div id="circle"></div>
                      <Link className="a" to='/login'>Login</Link>
                    </div>
                </div>
        </main>
      </div>
      </ErrorBoundary>
    );
  }
}
