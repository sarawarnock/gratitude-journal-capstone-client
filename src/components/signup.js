import React from 'react';
import { Link } from 'react-router-dom'
import ErrorBoundary from './error-boundary'
import ValidationError from './validation-error'
import AuthApiService from './services/auth-api-service'
import TokenService from './services/token-service'

export default class SignUp extends React.Component {
  state = {
      error: null,
      signUpEmail: {
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
      errors: {
        signUpEmail: 'You must enter a valid email',
        signUpPassword: 'You must enter a valid password',
        signUpFirstName: 'You must enter a valid name'
      },
      sessionUser: ''
  }

  // formatQueryParams(params) {
  //   const queryItems = Object.keys(params)
  //       .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
  //   return queryItems.join('&')
  // }

  updateEmail(email) {
    this.setState({ signUpEmail: {value: email, touched: true } })
  }

  updatePassword(password) {
    this.setState({ signUpPassword: { value: password, touched: true } })
  }

  updateFirstName(firstName) {
    this.setState({ signUpFirstName: { value: firstName, touched: true } })
  }

  updateSessionUser(userId) {
    this.setState({
      sessionUser: userId
    })
  }

  validateEmail(inputEmail) {
    if (inputEmail == undefined) {
       inputEmail = this.state.signUpEmail.value.trim();
    }
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!inputEmail.match(mailFormat)) {
      return 'Valid email is required'
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

//-------------------------------------------------------------------------------------

handleSubmit = (event) => {
  event.preventDefault();
  const { signUpEmail, signUpPassword, signUpFirstName } = event.target;
  console.log('email:', signUpEmail.value, 'password:', signUpPassword.value);
  this.setState({ error: null })
  AuthApiService.postUser({
      email: signUpEmail.value,
      password: signUpPassword.value,
      first_name: signUpFirstName.value
  })

  .then(response => {
      console.log('email:', response)
      signUpEmail.value = ''
      signUpPassword.value = ''
      TokenService.saveAuthToken(response.authToken)
      TokenService.saveUserId(response.userId)
      TokenService.saveUserName(response.first_name)
      this.updateSessionUser(response.userId)
      window.location = `/home`
  }) 

  .catch(res => {
      this.setState({ error: res.error })
  })  

 //let { signUpEmail, signUpFirstName, signUpPassword } = data
    // if (this.validateEmail(signUpEmail) === '') {
    //    this.setState({
    //        error: 'email is not valid'
    //    })
    //  }
 
    //  if (this.validatePassword(signUpPassword) === '') {
    //    this.setState({
    //        error: 'password is not valid'
    //    })
    //  }
 
    //  if (this.validatateFirstName(signUpFirstName) === '') {
    //    this.setState({
    //      error: 'first name is not valid'
    //    })
    //  }
}

//--------------------------------------------------------------------------------------
//   handleSubmit = (e) => {
//     e.preventDefault();
//     //create an object to store the search filters
//     const data = {}
//     //get all the from data from the form component
//     const formData = new FormData(e.target)

//     //for each of the keys in form data populate it with form value
//     for (let value of formData) {
//         data[value[0]] = value[1]
//     }
//     console.log(data)

//     let { signUpEmail, signUpFirstName, signUpPassword } = data
//     if (this.validateEmail(signUpEmail) === '') {
//       this.setState({
//           error: 'email is not valid'
//       })
//     }

//     if (this.validatePassword(signUpPassword) === '') {
//       this.setState({
//           error: 'password is not valid'
//       })
//     }

//     if (this.validatateFirstName(signUpFirstName) === '') {
//       this.setState({
//         error: 'first name is not valid'
//       })
//     }

//     // this.setState({
//     //   signUpEmail.value: data.signUpEmail, 
//     //   signUpFirstName.value : data.signUpFirstName,
//     //   signUpPassword.value: data.signUpPassword
     
//     // })

//   //POST request to API endpoint (/users)

//   //check if the state is populated with the search params data
//   console.log(this.state)
//   console.log(data.signUpEmail)

//   const searchURL = `${config.API_ENDPOINT}/users`
//   const user = {
//     email: data.signUpEmail,
//     password: data.signUpPassword,
//     first_name: data.signUpFirstName,
//   }
//   console.log(JSON.stringify(user))
//   // const queryString = this.formatQueryParams(data)

//    //sent all the params to the final url
//    // const url = searchURL + '?' + queryString

//    console.log(searchURL)

//     //define the API call parameters
//     const options = {
//         method: 'POST',
//         headers: {
//             //"Authorization": "",
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(user)
//     }

//     console.log(options);

//     //useing the url and paramters above make the api call
//     fetch(searchURL, options)

//         // if the api returns data ...
        
//         .then(res => {
//             if (!res.ok) {
//               console.log(res)
//                 throw new Error('Something went wrong, please try again later.')
//             }
//              // ... convert it to json
//              return res.json()
//         })
//           //use the json api output
//         .then(data => {
//           //check if there is meaningfull data
//           console.log(data);
//           // check if there are no results
//           if (data.totalItems === 0) {
//             throw new Error('No data found')
//         }
//         window.location = '/home'
//       })
//         .catch(err => {
//           this.setState({
//             error: err.message
//         })
//         console.log(err);
//       })
// }
//--------------------------------------------------------------------------------------

  render() {
    const emailError = this.validateEmail();
    const passwordError = this.validatePassword();
    const nameError = this.validatateFirstName();
    return (
      <ErrorBoundary>
      <div className="App">
        <main>
            <h1>Sign Up</h1>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                
                    <div className="sign-up-email">
                    <label className ="user-label" htmlFor="email">Email</label>
                    <input 
                      name="signUpEmail"
                      type="text" 
                      id="email" 
                      placeholder="Email"
                      required
                      onChange={e => this.updateEmail(e.target.value)}
                    />
                    {this.state.signUpEmail.touched && <ValidationError message={emailError} />}
                    </div>
                    <div className="sign-up-password">
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
                    <div className="sign-up-name">
                    <label className ="user-label" htmlFor="fname">First Name</label>
                    <input 
                      name="signUpFirstName"
                      type="text" 
                      id="fname" 
                      placeholder="First Name"
                      required
                      onChange={e => this.updateFirstName(e.target.value)}
                    /> 
                    {this.state.signUpFirstName.touched && <ValidationError message={nameError} />}
                    </div>
                    <button className="small-btn" type="submit">Sign Up!</button>
                </form>
                <div>
                    <h2>Already have an account?</h2>
                    <button
                    className="small-btn">
                      <Link
                        to='/login'>
                      Login
                      </Link>
                    </button>
                </div>
        </main>
      </div>
      </ErrorBoundary>
    );
  }
}
