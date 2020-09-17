import React from 'react';
import { Link  } from 'react-router-dom'
import ValidationError from './validation-error'
import AuthApiService from '../services/auth-api-service'
import TokenService from '../services/token-service'

export default class Login extends React.Component {
  state = {
    error: null,
    loginUsername: {
      value: '',
      touched: false
    },
    loginPassword: {
      value: '',
      touched: false
    },
    errors: {
      loginUsername: 'You must enter a valid username',
      loginPassword: 'You must enter a valid password',
    },
    sessionUser: ''
}

  handleLoginSuccess = () => {
    window.location = '/user/home'
  }
  
  updateUsername(username) {
    this.setState({ loginUsername: {value: username, touched: true } })
  }

  updatePassword(password) {
    this.setState({ loginPassword: { value: password, touched: true } })
  }

  updateSessionUser(userId) {
    this.setState({
      sessionUser: userId
    })
  }

  validateUsername(inputUsername) {
    if (inputUsername == undefined) {
       inputUsername = this.state.loginUsername.value.trim();
    }
    //const usernameFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // const usernameFormat = /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;
    const usernameFormat =  /^(?=.{3,20}$)[a-zA-Z0-9]+(?:_[a-zA-Z0-9]+)+$/;
    if (!inputUsername.match(usernameFormat)) {
      return 'Valid username is required'
    } return ' '
  }

  validatePassword(inputPassword) {
    if (inputPassword == undefined) {
      inputPassword = this.state.loginPassword.value.trim();
   }
    const passwordFormat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{8,}$/;
    if (!inputPassword.match(passwordFormat)) {
      return 'Valid password is required'
    } return ' '
  }

  handleSubmit = (e) => {
    e.preventDefault();
    //create an object to store the search filters
     const data = {}
    // const { loginUsername, loginPassword } = e.target
  
    //get all the from data from the form component
    const formData = new FormData(e.target)

    //for each of the keys in form data populate it with form value
    for (let value of formData) {
        data[value[0]] = value[1]
    }
    console.log(data)
    let {loginUsername, loginPassword} = data
  
    if (this.validateUsername(loginUsername) === '') {
      this.setState({
        error: 'You must enter a valid username'
      })
    }
    if (this.validatePassword(loginPassword) === '') {
      this.setState({
        error: 'You must enter a valid password'
      })
    }
    //assigning the object from the form data to params in the state
    this.setState({
        loginUsername: {
          value: loginUsername
        },
        loginPassword: {
          value: loginPassword
        }
    })

    //check if the state is populated with the search params data
    console.log(this.state)

    AuthApiService.postLogin({
      username: loginUsername,
      password: loginPassword
    })
    .then(response => {
      if (response === undefined) {
        console.log('empty response')
        this.setState({
          error: 'Username and/or password are not valid'
        })
        console.log(this.state)
      }
      else {
        console.log('response ID', response)
        TokenService.saveAuthToken(response.authToken) 
        TokenService.saveUserId(response.userId)
        TokenService.saveUserName(response.first_name)
        window.location = `/home`
        this.updateSessionUser(response.userId)
        console.log(this.state.sessionUser)
      }
    })
    .catch(err => {
      console.log(err)
      this.setState({
        error: 'Username and/or password are not valid'
      })
    });
  }

  //logic that says - if user username matches password combo in "users"
  //show them their homepage

  render() {
    let validationError = ''
    if (this.state.error != '') {
      validationError = this.state.error
    }
    
    const usernameError = this.validateUsername();
    const passwordError = this.validatePassword();
    return (
      <div className="App">
        <main>
            <h1>Log In</h1>
                <form 
                  className="login-form"
                  onSubmit={this.handleSubmit}
                >
                  {validationError}
                    {/* <label className ="user-label" htmlFor="username">Username</label> */}
                    <input 
                      name="loginUsername"
                      type="text" 
                      id="username"
                      placeholder="Username"
                      onChange={e => this.updateUsername(e.target.value)}
                      required
                    />
                    {this.state.loginUsername.touched && <ValidationError message={usernameError} />}
                    
                    <label className ="user-label" htmlFor="password">Password</label>
                    <input 
                      name="loginPassword"
                      type="password" 
                      id="password"
                      placeholder="Password"
                      onChange={e => this.updatePassword(e.target.value)}
                      required
                    /> 
                    {this.state.loginPassword.touched && <ValidationError message={passwordError} />}
                    <button className="button submit-button" type="submit">Log In</button>

                    {/* <div className="button" id="button-3">
                      <div id="circle"></div>
                      <button type="submit">Log In</button>
                    </div> */}
                </form>
                <div className="container">
                    <h2>Don't have an account yet?</h2>
                    <div className="button" id="button-3">
                      <div id="circle"></div>
                      <Link className="a" to='/signup'>Sign Up</Link>
                    </div>
                </div>
                <div className="container">
                  <p>To login:
                    <br />
                  username: testuser
                  <br />
                  password: Testpassword1</p>
                </div>
        </main>
      </div>
    );
  }
}
