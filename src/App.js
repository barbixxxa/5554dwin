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
      checked: true,
      showResult: false
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
    this.setState({ primeira: '', segunda: '', primeiraPorcentagem: '', resultado: '', showResult: false });
  }

  check() {
    this.clear();
    this.setState({ checked: !this.state.checked });
  }

  media() {
    let result = ((this.state.primeira) + (this.state.segunda)) / 2;
    let msg = "";
    this.setState({ resultado: result });


    if (result < 3) {
      msg = "Achou que ia pra final!? Achou errado OTÁRIO!!!";
    } else if (result < 7) {
      msg = "Você precisa de:" + parseFloat(10 - result);
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
          <MediaOptions checked={this.state.checked} onChange={this.check} />

          {
            this.state.checked
              ?
              <MediaSimples primeira={this.state.primeira} segunda={this.state.segunda} resultado={this.state.resultado} onChange={(e) => this.handleInputChange(e)} onClick={this.media} showResult={this.state.showResult} message={this.state.mensagem} />
              :
              <MediaPorcentagem primeira={this.state.primeira} segunda={this.state.segunda} primeiraPorcentagem={this.state.primeiraPorcentagem} resultado={this.state.resultado} onChange={(e) => this.handleInputChange(e)} onClick={this.mediaPorcentagem} showResult={this.state.showResult} />
          }

        </div>
      </div>
    );
  }
}

export default App;
