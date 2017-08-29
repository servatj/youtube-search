import React, { Component } from 'react';
import ListVids from './ListVids';
import $ from 'jquery';

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
         q: this.state.input.value,
         part: 'snippet'
       }, {maxResults:5,pageToken:$("#pageToken").val()}),
       context: this,
       success: function ({ items }) {
         this.handleSuccess(items);
       }.bind(this)
    });
  }

  render() {
    console.log("render parent", this.state);
    return (
      <div className="Row">
      <form>
        <label>
          <input type="text" name="name" className="App-search" onChange={ this.handleChange.bind(this) } placeholder={this.props.placeholder} />
        </label>
          <button type="submit" className="btn btn-success" onClick={ this.handleClick.bind(this) } >
            Search
          </button>
      </form>
      <ListVids  videos={this.state.vids}/>
      </div>
    );
  }
}

export default SearchBox;
