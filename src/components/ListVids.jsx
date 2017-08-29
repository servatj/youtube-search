import React, { Component } from 'react';

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

export default ListVids;
