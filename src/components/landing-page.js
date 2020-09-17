import React from 'react';
import { Link } from 'react-router-dom'

export default class LandingPage extends React.Component {
  render() {
    return (
      <div className="App">
        <main className="main">
            <div className="landing__container">
              <p>Keep track of the things you're grateful for, simply.</p>
              <p>Jot down 3 things that make you smile each day and keep track of your overall mood.</p>
              <div className="button" id="button-3">
                <div id="circle"></div>
                <Link className="a" to='/signup'>Sign Up</Link>
              </div>
              <div className="button" id="button-3">
                <div id="circle"></div>
                <Link className="a" to='/login'>Login</Link>
              </div>
              <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

              {/* <button className="button"> <Link to='/signup'> Sign Up </Link></button>
              <button className="button"> <Link to='/login'> Login</Link> </button> */}
          </div>
        </main>
      </div>
    );
  }
}