import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'Onesmus Mutyauvyu',
        bio: 'A passionate Full-Stack Developer.',
        imgSrc: '/images/myself.jpg',
        profession: 'Software Developer'
      },
      shows: false,
      startTime: Date.now(),
      elapsedTime: 0
    };
    
    this.handleToggle = this.handleToggle.bind(this);
  }

  // Set up an interval that updates elapsedTime after every second
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        elapsedTime: Math.floor((Date.now() - this.state.startTime) / 1000) // time in seconds
      });
    }, 1000);
  }

  // Clear the interval to prevent memory leaks.
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  // Event Handling
  handleToggle() {
    this.setState(prevState => ({
      shows: !prevState.shows
    }));
  }

  // Render the person's profile based on "shows".
  render() {
    const { person, shows, elapsedTime } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1>Profile Viewer</h1>
        </header>

        <main className="App-main">
          <button onClick={this.handleToggle} className="toggle-button">
            {shows ? 'Hide' : 'Show'} Profile
          </button>
          {shows && (
            <div className="profile">
              <img src={person.imgSrc} alt={person.fullName} className="profile-img" />
              <div className="profile-info">
                <h2>{person.fullName}</h2>
                <p>{person.bio}</p>
                <p><strong>Profession:</strong> {person.profession}</p>
              </div>
            </div>
          )}
          <div className="elapsed-time">Time since component mounted: {elapsedTime} seconds</div>
        </main>

        <footer className="App-footer">
          <p>© 2024 Profile Viewer. All rights reserved.</p>
        </footer>
      </div>
    );
  }
}

export default App;
