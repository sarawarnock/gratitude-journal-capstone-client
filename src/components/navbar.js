import React from 'react';
import { Link } from 'react-router-dom'
import TokenService from '../services/token-service'

export default class Navbar extends React.Component {
  logOutClick = () => {
    console.log('Logging out')
    TokenService.clearAuthToken()
    TokenService.getUserId = (id) => {
      console.log(id)
    }

    window.location='/'
  }
  render() {
    return (
      <div className="navbar">
        <nav role="navigation" className="nav">
                  <label htmlFor="hamburger">&#9776;</label>
                  <input type="checkbox" id="hamburger"/>
          {/* {TokenService.hasAuthToken() ?  */}
          <div className='nav-token'>
            <ul className="menu">
              <li>
                <div className="button" id="button-3">
                  <div id="circle"></div>
                  <Link className="a" to='/newentry'>New Entry</Link>
                </div>
              </li>
              <li>
                <div className="button" id="button-3">
                  <div id="circle"></div>
                  <Link className="a" to='/home'>Home</Link>
                </div>
              </li>
              <li>
                <div className="button" id="button-3">
                  <div id="circle"></div>
                  <Link className="a" to="/" onClick={this.logOutClick}>Log Out</Link>
                </div>
              </li>
            </ul>
          </div> 
          {/* : ''} */}
        </nav>
      </div>
    );
  }
}
