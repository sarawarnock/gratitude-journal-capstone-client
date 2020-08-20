import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import { BrowserRouter } from 'react-router-dom'
import App from '../app'
import CreateNewWorkout from '../create-new-workout'
import PastWorkouts from '../past-workouts'
import ViewPastWorkout from '../view-past-workout'

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
