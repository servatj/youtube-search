import React, { Component } from 'react';
import $ from 'jquery';
import logo from './logo.svg';
import './App.css';

// function handleClick(e) {
//   e.preventDefault();
//   console.log('The link was clicked.');
// }

class SearchBox extends Component {
  constructor(props) {
    super(props);
  }

  setData(data) {
    this.setState({data});
  }

  setFake(){
    console.log("error")
  }

  handleClick(e) {
    let query = 'English pronountition';
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
           console.log("data", items);
           this.setState({ vids: items }, () => console.log("state Updated", this.state))
           //setState({data});
       }.bind(this)
    });
  }

  render() {
    return (
      <div>
      <form>
        <label>
          Name:
          <input type="text" name="name" placeholder={this.props.placeholder} />
        </label>
        <input type="submit" value="Submit" onClick={this.handleClick.bind(this)} />
      </form>
      <ListVids/>
      </div>
    );
  }
}

class ListVids extends Component {
  constructor(props) {
    console.log("constructor")
    super(props);
    this.state = {
      vids: []
    }
  }

  render() {
    console.log("it renders " , this.state)
    if(this.state.vids.length === 0){
      return <p></p>
    } else {
    return (
      <div>
       <ul>
        {
          this.state.vids.map(function (vid) {
          <li key={vid.id.toString()}>{vid.id}</li>
          })
        }
       </ul>
      </div>
     );
    }
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Youtube Search</h1>
            <SearchBox placeholder="Type your search..." className="App-intro"/>
        </div>
      </div>
    );
  }
}

export default App;
