import React from 'react';
import ValidationError from './validation-error'

export default class ForgotPassword extends React.Component {
  state = {
    error: null,
    newPassword: {
      value: '',
      touched: false
    },

    repeatNewPassword: {
      value: '',
      touched: false
    },

    errors: {
      newPassword: 'You must enter a valid password',
      repeatNewPassword: 'Passwords must match'
    }
  }

  updateNewPassword(password) {
    this.setState({ newPassword: {value: password, touched: true } })
  }

  updateRepeatNewPassword(password) {
    this.setState({ repeatNewPassword: { value: password, touched: true } })
  }

  validateNewPassword(inputPassword) {
    if (inputPassword == undefined) {
      inputPassword = this.state.newPassword.value.trim();
   }
    const passwordFormat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{8,}$/;
    if (!inputPassword.match(passwordFormat)) {
      return 'Valid password is required'
    } return ' '
  }

  validateRepeatNewPassword(inputPassword) {
    const newPassword = this.state.newPassword.value.trim();
    if (inputPassword == undefined) {
      inputPassword = this.state.repeatNewPassword.value.trim();
   }
    if (!inputPassword.match(newPassword)) {
      return 'Passwords must match'
    } return ' '
  }

  handleSubmit = (e) => {
    e.preventDefault();
    //create an object to store the search filters
    const data = {}
    //get all the from data from the form component
    const formData = new FormData(e.target)

    //for each of the keys in form data populate it with form value
    for (let value of formData) {
        data[value[0]] = value[1]
    }
    console.log(data)

    let { newPassword, repeatNewPassword } = data
    if (this.validateNewPassword(newPassword) === '') {
      this.setState({
          error: 'password is not valid'
      })
    }

    if (this.validateRepeatNewPassword(repeatNewPassword) === '') {
      this.setState({
          error: 'password is not valid'
      })
    }

    // this.setState({
    //   newPassword.value: data.newPassword,
    //   repeatNewPassword.value: data.repeatNewPassword
     
    // })

  //   //POST request to API endpoint (/users)

  // //check if the state is populated with the search params data
  // console.log(this.state)

  //const searchURL = `${config.API_ENDPOINT}/forgot-password`

  // const queryString = this.formatQueryParams(data)

  //  //sent all the params to the final url
  //  //const url = searchURL + '?' + queryString

  //  console.log(url)

  //   //define the API call parameters
  //   const options = {
  //       method: 'POST',
  //       header: {
  //           "Authorization": "",
  //           "Content-Type": "application/json"
  //       }
  //   }

  //   //useing the url and paramters above make the api call
  //   fetch(url, options)

  //       // if the api returns data ...
  //       .then(res => {
  //           if (!res.ok) {
  //               throw new Error('Something went wrong, please try again later.')
  //           }
  //            // ... convert it to json
  //            return res.json()
  //       })
  //           // use the json api output
  //       .then(data => {

  //         //check if there is meaningfull data
  //         console.log(data);
  //         // check if there are no results
  //         if (data.totalItems === 0) {
  //           throw new Error('No data found')
  //       }

  //     })
  //       .catch(err => {
  //         this.setState({
  //           error: err.message
  //       })
  //     })
}

  render() {
    const newPasswordError = this.validateNewPassword();
    const repeatNewPasswordError = this.validateRepeatNewPassword();
    return (
      <div className="App">
        <main className="main">
              <h1>Forgot Password</h1>
              <form onSubmit={this.handleSubmit}>
                <label htmlFor="new-password">New Password</label>
                <input 
                  name="newPassword"
                  id="new-password" 
                  type="text" 
                  onChange={e => this.updateNewPassword(e.target.value)}
                  required
                />
                {this.state.newPassword.touched && <ValidationError message={newPasswordError} />}
             
                <label htmlFor="repeat-password">Repeat New Password</label>
                <input 
                  name="repeatNewPassword"
                  id="repeat-password" 
                  type="text"
                  onChange={e => this.updateRepeatNewPassword(e.target.value)}
                  required
                />
                {this.state.repeatNewPassword.touched && <ValidationError message={repeatNewPasswordError} />}
        
                <button type="submit">Submit</button>
              </form>
          </main>
      </div>
    );
  }
}
