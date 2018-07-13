import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import MediaOptions from './components/MediaOptions';
import C5554dwin from './components/C5554dwin';
import C555p4dwin from './components/C555p4dwin';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      primeira: 0,
      primeiraPorcentagem: 75,
      segunda: 0,
      isTerceira: false,
      terceira: 0,
      resultado: 0,
      mensagem: '',
      text: 'Add',
      mediaOption: '5554dwin',
      showResult: false
    };
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.switchOptions = this.switchOptions.bind(this);
    this.add3eeField = this.add3eeField.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.media = this.media.bind(this);
    this.mediaPorcentagem = this.mediaPorcentagem.bind(this);
  }

  handleOptionChange(event) {
    this.setState({ primeira: 0, segunda: 0, terceira: 0, primeiraPorcentagem: 75, resultado: 0, showResult: false, mediaOption: event.target.value });
  }

  switchOptions(value) {
    switch (value) {
      case '555%4dwin':
        return <C555p4dwin primeira={this.state.primeira} segunda={this.state.segunda} primeiraPorcentagem={this.state.primeiraPorcentagem} resultado={this.state.resultado} message={this.state.mensagem} onChange={(e) => this.handleInputChange(e)} onClick={this.mediaPorcentagem} showResult={this.state.showResult} />

      default:
        return <C5554dwin primeira={this.state.primeira} segunda={this.state.segunda} add3eeField={this.add3eeField} isTerceira={this.state.isTerceira} terceira={this.state.terceira} message={this.state.mensagem} text={this.state.text} resultado={this.state.resultado} onChange={(e) => this.handleInputChange(e)} onClick={this.media} showResult={this.state.showResult} />
    }
  }

  add3eeField() {
    let isT = this.state.isTerceira;

    if (isT) {
      this.setState({ text: "Add" });
    } else {
      this.setState({ text: "Remove" });
    }
    this.setState({ isTerceira: !isT });
  }

  handleInputChange(event) {
    const target = event.target;
    let value = target.value;
    const name = target.name;

    if (value !== '') {
      if (name === 'primeira' || name === 'segunda' || name === 'segunda') {
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
    } else {
      value = 0;
    }

    this.setState({
      [name]: parseFloat(value)
    });
  }

  media() {
    let result;
    if (this.state.isTerceira) {
      result = ((this.state.primeira) + (this.state.segunda) + (this.state.terceira)) / 3;
    } else {
      result = ((this.state.primeira) + (this.state.segunda)) / 2;
    }

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
    let result;
    let msg = "";

    result = ((this.state.primeira * this.state.primeiraPorcentagem) + (this.state.segunda * (100 - this.state.primeiraPorcentagem))) / 100;

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
