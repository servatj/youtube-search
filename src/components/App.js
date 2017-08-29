import React, { Component } from 'react';
import SearchBox from './SearchBox';
import $ from 'jquery';
import logo from '../logo.svg';
import '../App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Youtube Search"
    }
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="container">
          <h1>{this.state.title}</h1>
            <SearchBox placeholder="Type your search..." className="App-intro"/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
