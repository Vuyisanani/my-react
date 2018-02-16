import React, { Component } from 'react';
import logo from '../../images/logo.svg';
import { Race } from '../Race/Race';
import './App.css';

export class App extends Component {
  state = {
    start: false,
    startRandom: false,
    reset: false
  }
  
  startClick = () => {
    this.setState({start: true});
  }

  randomClick = () => {
    this.setState({startRandom: true});
  }

  resetClick = () => {
    this.setState({start: false, startRandom: false});
  }

  render() {
    const Buttons = () => (
      <div className="App-buttons">
        <button className="ui teal basic button" onClick={this.randomClick}>Choose Random Jockeys</button>
        <button className="ui primary basic button" onClick={this.startClick}>Start</button>
        <button className="ui button" onClick={this.resetClick}>Reset</button>
      </div>
    );
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React.js</h1>
        </header>
        <Buttons />
        <Race start={this.state.start} reset={this.state.reset} startRandom={this.state.startRandom}/>
      </div>
    );
  }
}