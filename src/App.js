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
      resultado: '',
      mensagem: '',
      mediaOption: 'mediaSimples',
      showResult: false
    };
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.switchOptions = this.switchOptions.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.media = this.media.bind(this);
    this.mediaPorcentagem = this.mediaPorcentagem.bind(this);
  }

  handleOptionChange(event) {
    this.setState({ primeira: '', segunda: '', primeiraPorcentagem: '', resultado: '', showResult: false, mediaOption: event.target.value });
  }

  switchOptions(value) {
    switch (value) {
      case 'mediaPorcentagem':
        return <MediaPorcentagem primeira={this.state.primeira} segunda={this.state.segunda} primeiraPorcentagem={this.state.primeiraPorcentagem} resultado={this.state.resultado} onChange={(e) => this.handleInputChange(e)} onClick={this.mediaPorcentagem} showResult={this.state.showResult} />

      case '5554dwin':
        return <p> teste </p>

      default:
        return <MediaSimples primeira={this.state.primeira} segunda={this.state.segunda} resultado={this.state.resultado} onChange={(e) => this.handleInputChange(e)} onClick={this.media} showResult={this.state.showResult} message={this.state.mensagem} />
    }
  }

  handleInputChange(event) {
    const target = event.target;
    let value = target.value;
    const name = target.name;

    if (name === 'primeira' || name === 'segunda') {
      if (value > 10) {
        value = 10;
      } else if (value < 0) {
        value = 0;
      }
    } else if (name === 'primeiraPorcentagem') {
      if (value > 100) {
        value = 100;
      } else if (value < 0) {
        value = 0;
      }
    }

    this.setState({
      [name]: parseFloat(value)
    });
  }

  media() {
    let result = ((this.state.primeira) + (this.state.segunda)) / 2;
    let msg = "";
    this.setState({ resultado: result });

    if (result < 3) {
      msg = "Achou que ia pra final!? Achou errado OTÁRIO!!!";
    } else if (result < 7) {
      msg = "Você precisa de: " + parseFloat(10 - result);
    } else {
      msg = "Aprovado!";
    }
    this.setState({ mensagem: msg });
    this.setState({ showResult: true });
  }

  mediaPorcentagem() {
    this.setState({ resultado: ((this.state.primeira * this.state.primeiraPorcentagem) + (this.state.segunda * (100 - this.state.primeiraPorcentagem))) / 100 });
    this.setState({ showResult: true });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div>
          <MediaOptions mediaOption={this.state.mediaOption} onChange={this.handleOptionChange} />

          {this.switchOptions(this.state.mediaOption)}

        </div>
      </div>
    );
  }
}

export default App;
