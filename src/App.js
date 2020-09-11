import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {repos: []}

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    fetch('https://api.github.com/users/wzamites/repos')
    .then(response => response.json())
    .then(data => this.setState({repos: data}))
  }

  render() {
    const repoNames = this.state.repos.map(repo => <li>{repo.name}</li>)
    return (
      <div className="App">
        <header className="App-header">
          <ul>
            {repoNames}
          </ul>
        </header>
      </div>
    );
  }
}

export default App;
