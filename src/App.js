import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import MediaOptions from './components/MediaOptions.js';
import MediaSimples from './components/MediaSimples.js';
import MediaPorcentagem from './components/MediaPorcentagem.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      primeira: '',
      primeiraPorcentagem: '',
      segunda: '',
      segundaPorcentagem: '',
      resultado: '',
      precisa: '',
      checked: true
    };
    this.clear = this.clear.bind(this);
    this.check = this.check.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.media = this.media.bind(this);
    this.mediaPorcentagem = this.mediaPorcentagem.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: parseFloat(value)
    });
  }

  clear() {
    this.setState({ primeira: '', segunda: '', primeiraPorcentagem: '', segundaPorcentagem: '', resultado: '' });
  }

  check() {
    this.clear();
    this.setState({ checked: !this.state.checked });
  }

  media() {
    let result = ((this.state.primeira) + (this.state.segunda)) / 2;
    this.setState({ resultado: result });

    if (result < 3) {
      console.log("Tchau");
    } else if (result < 7) {
      console.log(10 - result);
    }

  }

  mediaPorcentagem() {
    this.setState({ resultado: ((this.state.primeira * this.state.primeiraPorcentagem) + (this.state.segunda * (100 - this.state.primeiraPorcentagem))) / 100 });
  }

  render() {

    return (
      <div className="App">
        <Header />
        <div>
          <MediaOptions checked={this.state.checked} onChange={this.check} />

          {
            this.state.checked
              ?
              <MediaSimples primeira={this.state.primeira} segunda={this.state.segunda} resultado={this.state.resultado} onChange={(e) => this.handleInputChange(e)} onClick={this.media} />
              :
              <MediaPorcentagem primeira={this.state.primeira} segunda={this.state.segunda} primeiraPorcentagem={this.state.primeiraPorcentagem} segundaPorcentagem={this.state.segundaPorcentagem} resultado={this.state.resultado} onChange={(e) => this.handleInputChange(e)} onClick={this.mediaPorcentagem} />
          }

        </div>
      </div>
    );
  }
}

export default App;
