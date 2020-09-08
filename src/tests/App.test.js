import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import { BrowserRouter } from 'react-router-dom'
import App from '../app'
import NewEntry from '../components/new-entry'
import AllEntries from '../components/all-entries'
import Login from '../components/login'
import LandingPage from '../components/landing-page'
import SignUp from '../components/signup'
import Header from '../components/header'
import Navbar from '../components/navbar'
import NotFound from '../components/not-found'

const testEntriesArray = [
  {
    id: 1,
    user_id: 1,
    bullet_1: "Test 1",
    bullet_2: "Test 2",
    bullet_3: "Test 3",
    mood: "happy",
    is_public: 0
  },
  {
    id: 2,
    user_id: 1,
    bullet_1: "Test 1",
    bullet_2: "Test 2",
    bullet_3: "Test 3",
    mood: "happy",
    is_public: 0
  }
]

describe('Gratiplicity app', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <App />
      </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe('New Entry component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
    <BrowserRouter>
      <NewEntry />
    </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders the UI as expected', () => {
    const tree = renderer
      .create(
      <BrowserRouter>
        <NewEntry />
      </BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
})

describe('All Entries componenet', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <AllEntries allEntries={testEntriesArray} />
      </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders the UI as expected', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <AllEntries allEntries={testEntriesArray} />
        </BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
});

describe('Login component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders the UI as expected', () => {
    const tree = renderer
      .create(
      <BrowserRouter>
        <Login />
      </BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
});

describe('Sign Up component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
    <BrowserRouter>
      <SignUp />
    </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders the UI as expected', () => {
    const tree = renderer
      .create(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
});

describe('Not Found component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
    <BrowserRouter>
      <NotFound />
    </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders the UI as expected', () => {
    const tree = renderer
      .create(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
});

describe('Header component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders the UI as expected', () => {
    const tree = renderer
      .create(
      <BrowserRouter>
        <Header />
      </BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
});

describe('Navbar component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders the UI as expected', () => {
    const tree = renderer
      .create(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
});

describe('Landing Page component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
    <BrowserRouter>
      <LandingPage />
    </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders the UI as expected', () => {
    const tree = renderer
      .create(
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
});