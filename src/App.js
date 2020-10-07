import React from 'react';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
      page: 1,
      search: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.callApi = this.callApi.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.callApi(this.state.page)
  }

  handleClick() {
    this.callApi(this.state.page)
  }

  handleChange(e) {
    this.setState({search: e.target.value});
  }

  callApi(page) {
    fetch('https://swapi.dev/api/people/?page=' + page)
    .then(response => response.json())
    .then(data => {
      this.setState( state => ({people: [...state.people, ...data.results]}) )
    })
    .then(data => {this.setState( state => ({page: state.page + 1}))})
    .then(data => {console.log(this.state.page)})
  }

  render() {
    const filtered = this.state.people.filter( e => e.name.toLowerCase().includes(this.state.search.toLowerCase()) )
    const repoNames = filtered.map(person => <li>{person.name}</li>)
    return (
      <div className="App">
        <header className="App-header">
          <h1>List</h1>
          <label>
            <input type="text" aria-label="Search" value={this.state.value} onChange={this.handleChange} />
          </label>
          <ul>
            {repoNames}
          </ul>
          <button onClick={this.handleClick}>Load More</button>
        </header>
      </div>
    );
  }
}
