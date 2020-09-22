import React from 'react';
import HamburgerMenu from 'react-hamburger-menu'
import { Link } from 'react-router-dom'
import TokenService from '../services/token-service'

export default class Navbar extends React.Component {
  constructor(){
    super()
    this.state = {
        open: false,
        hideOrShowHambugerDropDown: 'nav'
    }
  }

  logOutClick = () => {
    //console.log('Logging out')
    TokenService.clearAuthToken()
    TokenService.getUserId = (id) => {
      console.log(id)
    }

    window.location='/'
  }

  handleClick = () => {
    this.setState({open: !this.state.open});
  }

  displayHamburgerMenu = () => {
    return (
        <HamburgerMenu
          isOpen={this.state.open}
          menuClicked={this.handleClick.bind(this)}
        />
    )
  }

  displayNavBar = () => {
    return (
        <nav role="navigation" className="nav">
            <ul className="menu">
              <li className="menu-button">
                <div className="button" id="button-3">
                  <div id="circle"></div>
                  <Link className="a" to='/newentry'>New Entry</Link>
                </div>
              </li>
              <li className="menu-button">
                <div className="button" id="button-3">
                  <div id="circle"></div>
                  <Link className="a" to='/home'>Home</Link>
                </div>
              </li>
              <li className="menu-button">
                <div className="button" id="button-3">
                  <div id="circle"></div>
                  <Link className="a" to="/" onClick={this.logOutClick}>Log Out</Link>
                </div>
              </li>
            </ul>
        </nav>
    )
  }

  displayMobileMenu = () => {
    return (
        <nav role="navigation" className="hamburgerDropDown">
            <ul className="mobile-menu">
              <li className="menu-button">
                <div className="nav-button">
                  {/* <div id="circle"></div> */}
                  <Link className="mob-link" to='/newentry'>New Entry</Link>
                </div>
              </li>
              <li className="menu-button">
                <div className="nav-button">
                  {/* <div id="circle"></div> */}
                  <Link className="mob-link" to='/home'>Home</Link>
                </div>
              </li>
              <li className="menu-button">
                <div className="nav-button">
                  {/* <div id="circle"></div> */}
                  <Link className="mob-link" to="/" onClick={this.logOutClick}>Log Out</Link>
                </div>
              </li>
            </ul>
        </nav>
    )
  }

  render() {
    return (
        <nav role="navigation" className="nav">
          {/* {TokenService.hasAuthToken() ? <div className='nav-token'> */}
          <div className='navbar'>
                { this.state.open ?  this.displayMobileMenu() : null}
                {window.innerWidth > 900 ? this.displayNavBar() : this.displayHamburgerMenu()}
          </div>
          {/* </div> : ''} */}
        </nav>
    );
  }
}
