import React, { Component } from 'react';
import $ from 'jquery';
import logo from './logo.svg';
import './App.css';

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vids: [],
      input: ''
    }
  }

  setData(data) {
    this.setState({data});
  }

  setFake(){
    console.log("error");
  }

  handleChange(e) {
    this.setState({ input: e.target.value });
  }

  handleSuccess(items) {
    var videos = items;
    this.setState({ vids: items }, () => {
      console.log("state Updated", this.state.vids);
    });
  }

  handleClick(e) {
    let query = this.state.input;
    let obj = {};
    e.preventDefault();
    $.ajax({
       type: "GET",
       url: 'https://www.googleapis.com/youtube/v3/search',
       dataType: 'json',
       timeout: 5000,
       data: $.extend({
         key: 'AIzaSyAl_TdvVhetI338ND49IcwbNLf1CtIhtbg',
         q: $('#hyv-search').val(),
         part: 'snippet'
       }, {maxResults:20,pageToken:$("#pageToken").val()}),
       context: this,
       success: function ({ items }) {
         this.handleSuccess(items);
       }.bind(this)
    });
  }

  render() {
    console.log("render parent", this.state);
    return (
      <div>
      <form>
        <label>
          <input type="text" name="name" className="App-search" onChange={ this.handleChange.bind(this) } placeholder={this.props.placeholder} />
        </label>
          <button type="submit" className="btn btn-dark" onClick={this.handleClick.bind(this)} >
            Search
          </button>
      </form>
      <ListVids  videos={this.state.vids}/>
      </div>
    );
  }
}

class ListVids extends Component {
  constructor(props) {
    console.log("constructor")
    super(props);
    this.state = {
      title: "Youtube Search",
      vids: []
    }
  }

  render() {
    console.log("it renders " , this.props.videos.length)
    if(this.props.videos.length === 0){
      return <p></p>
    } else {
    return (
      <div>
       <ul>
       {
         this.props.videos.map((vid) => <li key={vid.id.videoId.toString()}>
          <span><p>{vid.id.videoId.toString()}</p>
          <p>{vid.snippet.channelTitle.toString()}</p>
          </span>
          </li> )
       }
       </ul>
      </div>
     );
    }
  }
}

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
          <h1>{this.state.title}</h1>
            <SearchBox placeholder="Type your search..." className="App-intro"/>
        </div>
      </div>
    );
  }
}

export default App;
