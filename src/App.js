import React, { Component } from 'react';
import SearchBox from './components/SearchBox';
import $ from 'jquery';
import logo from './logo.svg';
import './App.css';

// class SearchBox extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       vids: [],
//       input: ''
//     }
//   }
//
//   setData(data) {
//     this.setState({data});
//   }
//
//   setFake(){
//     console.log("error");
//   }
//
//   handleChange(e) {
//     this.setState({ input: e.target.value });
//   }
//
//   handleSuccess(items) {
//     var videos = items;
//     this.setState({ vids: items }, () => {
//       console.log("state Updated", this.state.vids);
//     });
//   }
//
//   handleClick(e) {
//     let query = this.state.input;
//     let obj = {};
//     e.preventDefault();
//     $.ajax({
//        type: "GET",
//        url: 'https://www.googleapis.com/youtube/v3/search',
//        dataType: 'json',
//        timeout: 5000,
//        data: $.extend({
//          key: 'AIzaSyAl_TdvVhetI338ND49IcwbNLf1CtIhtbg',
//          q: this.state.input.value,
//          part: 'snippet'
//        }, {maxResults:5,pageToken:$("#pageToken").val()}),
//        context: this,
//        success: function ({ items }) {
//          this.handleSuccess(items);
//        }.bind(this)
//     });
//   }
//
//   render() {
//     console.log("render parent", this.state);
//     return (
//       <div className="Row">
//       <form>
//         <label>
//           <input type="text" name="name" className="App-search" onChange={ this.handleChange.bind(this) } placeholder={this.props.placeholder} />
//         </label>
//           <button type="submit" className="btn btn-success" onClick={ this.handleClick.bind(this) } >
//             Search
//           </button>
//       </form>
//       <ListVids  videos={this.state.vids}/>
//       </div>
//     );
//   }
// }

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
          <div class="row">
      		<div class="well">
              <h1 class="text-center">Vote for your favorite</h1>
              <div class="list-group">
        { this.props.videos.map((vid) =>
          <a href="#" className="list-group-item ">
                  <div className="media col-md-3">
                      <figure className="pull-left">
                          <img className="media-object img-rounded img-responsive"  src="http://placehold.it/350x250" alt="placehold.it/350x250" />
                      </figure>
                  </div>
                  <div className="col-md-6">
                      <h4 className="list-group-item-heading">{vid.id.videoId.toString()}</h4>
                      <p className="list-group-item-text">
                      {vid.snippet.channelTitle.toString()}
                      </p>
                  </div>
                  <div className="col-md-3 text-center">
                      <h2> 14240 <small> votes </small></h2>
                      <button type="button" className="btn btn-default btn-lg btn-block"> Vote Now! </button>
                      <div className="stars">
                          <span className="glyphicon glyphicon-star"></span>
                          <span className="glyphicon glyphicon-star"></span>
                          <span className="glyphicon glyphicon-star"></span>
                          <span className="glyphicon glyphicon-star"></span>
                          <span className="glyphicon glyphicon-star-empty"></span>
                      </div>
                      <p> Average 4.5 <small> / </small> 5 </p>
                  </div>
            </a>
          )
        }
      </div>
    </div>
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
