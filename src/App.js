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
      error: ''
    }
  }

  //component did mount to fetch all entries to pass down to other components
  componentDidMount() {
    let getEntriesUrl = ''
    if (sessionStorage.user_id == undefined) {
      getEntriesUrl = `${config.API_ENDPOINT}/entries`
    } else {
      getEntriesUrl = `${config.API_ENDPOINT}/entries/user/${TokenService.getUserId()}`;
    }

    console.log(sessionStorage.user_id)
    fetch(getEntriesUrl)
      .then(response => response.json())
      .then(entries => {
        this.setState({
          allEntries: entries
        });
        console.log(this.state.allEntries)
      })
      .catch(error => this.setState({ error }))
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
    console.log(this.state)
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
            render={(props) => <AllEntries {...props} allEntries={this.state.allEntries} />}
          />
          <Route 
            exact
            path='/newentry'
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
