import React from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import './App.css'
import config from './config'
import TokenService from './services/token-service'
import Navbar from './components/navbar'
import Header from './components/header'
import Login from './components/login'
import SignUp from './components/signup'
import LandingPage from './components/landing-page'
import NewEntry from './components/new-entry'
import AllEntries from './components/all-entries'
import NotFoundPage from './components/not-found'


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: '',
      password: '',
      first_name: '',
      last_name: '',
      allEntries: [],
    }
  }

  //renders the Navbar
  renderNav() {
    return (
      <div>
        <Navbar />
      </div>
    )
  }

  //renders the main pages
  renderMainPages = () => {
    return (
      <div className="main-pages">
        <Switch>
          <Route 
            exact
            path='/'
            component={LandingPage}
          />
          <Route 
            exact
            path='/signup'
            component={SignUp}
          />
          <Route 
            exact
            path='/login'
            component={Login}
          />
          <Route 
            exact
            path='/home'
            component={AllEntries}
          />
          <Route 
            exact
            path='/new-entry'
            component={NewEntry}
          />
          <Route 
            component={NotFoundPage}
          />
        </Switch>
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        <nav className="app-nav"> {this.renderNav()} </nav>
        <header>
          <Link to='/'>
            <Header />
          </Link>
        </header>

        <main>
          {this.renderMainPages()}
        </main>
      </div>
    );
  }
}
