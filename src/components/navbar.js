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
                  {/* <label htmlFor="hamburger">&#9776;</label>
                  <input type="checkbox" id="hamburger"/> */}
          {TokenService.hasAuthToken() ? <div className='nav-token'>
            <ul className="menu">
              <li>
                <div className="button" id="button-3">
                  <div id="circle"></div>
                  <a><Link to='/newentry' className="new-entry-button">New Entry</Link></a>
                </div>
              </li>
              <li>
                <div className="button" id="button-3">
                  <div id="circle"></div>
                  <a><Link to='/home' className="new-entry-button">Home</Link></a>
                </div>
              </li>
              <li>
                <div className="button" id="button-3">
                  <div id="circle"></div>
                  <a><Link to="/" onClick={this.logOutClick} className="new-entry-button">Log Out</Link></a>
                </div>
              </li>

              {/* <li className="nav-link new"> <Link to='/newentry'>New Entry</Link></li>
              <li className="nav-link home"><Link to='/home'>Home</Link></li> */}
            </ul>
            {/* <button className="small-btn logout-btn"><Link to="/" onClick={this.logOutClick}>Log Out</Link></button> */}
          </div> : ''}
        </nav>
      </div>
    );
  }
}
