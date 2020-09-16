import React from 'react';
import { Link } from 'react-router-dom'

export default class LandingPage extends React.Component {
  render() {
    return (
      <div className="App">
        <main className="main">
          {/* <h1>Gratiplicity</h1>
            <h2>Your Daily Gratitude Jounal</h2> */}
            <div className="landing__container">
              <p>Keep track of the things you're grateful for, simply.</p>
              <p>Jot down 3 things that make you smile each day and keep track of your overall mood.</p>
              <div className="button" id="button-3">
                <div id="circle"></div>
                <a><Link to='/signup'>Sign Up</Link></a>
              </div>
              <div className="button" id="button-3">
                <div id="circle"></div>
                <a><Link to='/login'>Login</Link></a>
              </div>
              {/* <button className="button"> <Link to='/signup'> Sign Up </Link></button>
              <button className="button"> <Link to='/login'> Login</Link> </button> */}
          </div>
          <div className="login__container">
            <p>To login: </p>
              <p>username: testuser</p>
              <p>password: Testpassword1</p>
            </div>
        </main>
      </div>
    );
  }
}