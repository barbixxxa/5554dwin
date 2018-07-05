import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      primeira: 0,
      segunda: 0
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
    alert(((this.state.primeira) + (this.state.segunda)) / 2);
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to 555Calculator</h1>
        </header>

        <div>
          <form onSubmit={this.media}>
            <label>
              Primeira:<input name="primeira" type="number" value={this.state.primeira} onChange={this.handleInputChange} />
            </label>
            <label>
              Segunda:<input name="segunda" type="number" value={this.state.segunda} onChange={this.handleInputChange} />
            </label>
            <input type="submit" value="Calcular Média" />
          </form>
        </div>
      </div>
    );
  }
}

export default App;
