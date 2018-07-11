import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
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
      checked: true
    };
    this.clear = this.clear.bind(this);
    this.check = this.check.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.media = this.media.bind(this);
    this.mediaPorcentagem = this.mediaPorcentagem.bind(this);
  }

  handleInputChange(event) {
    console.log("TESTE");
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: Math.floor(value)
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
    console.log("TESTE");
    this.setState({ resultado: ((this.state.primeira) + (this.state.segunda)) / 2 });
  }

  mediaPorcentagem() {
    this.setState({ resultado: ((this.state.primeira * this.state.primeiraPorcentagem) + (this.state.segunda * this.state.segundaPorcentagem)) / 100 });
  }

  render() {

    return (
      <div className="App">
        <Header />
        <div>
          <div>
            <input type="radio" name="media" id="mediaSimples" value="mediaSimples" checked={this.state.checked} onChange={this.check} />
            <label>
              Média Simples
            </label>

            <input type="radio" name="media" id="mediaPorcentagem" value="mediaPorcentagem" checked={!this.state.checked} onChange={this.check} />
            <label>
              Média com Porcentagem
            </label>
          </div>


          {
            this.state.checked
              ?
              <MediaSimples primeira={this.state.primeira} segunda={this.state.segunda} resultado={this.state.resultado} onChange={(e) => this.handleInputChange(e)} onClick={() => this.media()} />
              :
              <MediaPorcentagem primeira={this.state.primeira} segunda={this.state.segunda} primeiraPorcentagem={this.state.primeiraPorcentagem} segundaPorcentagem={this.state.segundaPorcentagem} resultado={this.state.resultado} onChange={(e) => this.handleInputChange(e)} onClick={() => this.mediaPorcentagem()} />
          }

        </div>
      </div>
    );
  }
}

export default App;
