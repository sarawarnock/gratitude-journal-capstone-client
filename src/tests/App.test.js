import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import { BrowserRouter } from 'react-router-dom'
import App from '../app'
import NewEntry from '../components/new-entry'
import AllEntries from '../components/all-entries'

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
        <AllEntries />
      </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders the UI as expected', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <AllEntries/>
        </BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
});
