import React, { Component } from 'react';
import Card from './card'
import logo from '../../images/logo.svg';
import jsonData from '../../team.json';
import './App.css';

export class App extends Component {
  // Calling the external json (team.json) and assigning as data array
  state = {
    data: jsonData
  }
  render() {
  console.log(jsonData); // Just printing out the array in console
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <h2 className="App-sub-title">Reacjs</h2>
        </header>
        
          <Card whatever={this.state.data}/>  
      </div>
    );
  };
};


