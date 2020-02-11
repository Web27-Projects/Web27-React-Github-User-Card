import React from 'react';
import './App.css';
import Cards from './Cards';

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      user: [],
      followers: []
    }
  }

  componentDidMount() {
    fetch('https://api.github.com/users/Mileywright')
    .then(res => {
      res.json()
    })
    .then(res => {
      this.setState({ user: res })
    })
    .catch(err => {
      console.log('error:', err)
    })

    fetch('https://api.github.com/users/Mileywright/followers')
    .then(res => {
      res.json()
    })
    .then(res => {
      this.setState({ followers: res})
    })
    .catch(err => {
      console.log('error:', err)
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Cards />
        </header>
      </div>
    );
  }
}

export default App;
