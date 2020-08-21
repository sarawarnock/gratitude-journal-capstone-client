import React from 'react';
import { Link } from 'react-router-dom'

export default class LandingPage extends React.Component {
  render() {
    return (
      <div className="App">
        <main className="main">
          <h1>Gratiplicity: Your Daily Gratitude Jounal</h1>
            <p>Keep track of the things you're grateful for, simply.</p>
            <p>Jot down 3 things that made you smile each day and keep track of your overall mood.</p>
          <button className="big-btn"> <Link to='/signup'> Sign Up </Link>
          </button>
          <button className="big-btn"> <Link to='/login'> Login</Link> </button>
          <p>To login: </p>
            <p>email: testuser@gmail.com</p>
            <p>password: Testpassword1</p>
        </main>
      </div>
    );
  }
}