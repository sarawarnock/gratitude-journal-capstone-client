import React from 'react';
import { Link } from 'react-router-dom'
import TokenService from './services/token-service'

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
              <li className="nav-link cl-create-workout"> <Link to='/create-workout'>New Entry</Link></li>
              <li className="nav-link cl-past-workouts"><Link to='/past-workouts'>All Entries</Link></li>
            </ul>
            <button className="small-btn logout-btn"><Link to="/" onClick={this.logOutClick}>Log Out</Link></button>
          </div> : ''}
        </nav>
      </div>
    );
  }
}
