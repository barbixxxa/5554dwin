import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      primeira: '',
      segunda: '',
      resultado: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.media = this.media.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: Math.floor(value)
    });
  }

  media() {
    this.setState({ resultado: ((this.state.primeira) + (this.state.segunda)) / 2 });
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to 555Calculator</h1>
        </header>

        <div>

          <label>
            Primeira:<input name="primeira" type="number" value={this.state.primeira} onChange={this.handleInputChange} />
          </label>
          <label>
            Segunda:<input name="segunda" type="number" value={this.state.segunda} onChange={this.handleInputChange} />
          </label>
          <button type="button" onClick={this.media}>Click Me!</button>
          <p>{this.state.resultado}</p>

        </div>
      </div>
    );
  }
}

export default App;
