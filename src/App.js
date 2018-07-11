import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MediaSimples from './components/MediaSimples.js';

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
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to 555Calculator</h1>
        </header>

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


          {this.state.checked ?
            <MediaSimples primeira={this.state.primeira} segunda={this.state.segunda} resultado={this.state.resultado} onChange={(e) => this.handleInputChange(e)} onClick={() => this.media()} />
            :
            <div>
              <label>
                Primeira:<input name="primeira" type="number" value={this.state.primeira} onChange={this.handleInputChange} placeholder="0" min="0" max="10" />
              </label>

              <label>
                Primeira Porcentagem:<input name="primeiraPorcentagem" type="number" value={this.state.primeiraPorcentagem} onChange={(e) => this.handleInputChange(e)} placeholder="0" min="0" max="100" />
              </label>

              <label>
                Segunda:<input name="segunda" type="number" value={this.state.segunda} onChange={this.handleInputChange} placeholder="0" min="0" max="10" />
              </label>

              <label>
                Segunda Porcentagem:<input name="segundaPorcentagem" type="number" value={this.state.segundaPorcentagem} onChange={this.handleInputChange} placeholder="0" min="0" max="100" />
              </label>

              <button type="button" onClick={this.mediaPorcentagem}>Click Me!</button>
              <p>Média: {this.state.resultado}</p>
            </div>}


        </div>
      </div>
    );
  }
}

export default App;
