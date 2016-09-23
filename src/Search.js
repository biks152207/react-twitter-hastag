import React from 'react';

export default class Search extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      searchTerm : ''
    }
  }

  render(){
    return(
      <div className="col-md-6 col-md-offset-3">
        <input type="text" className="form-control form-group-lg" placeholder="Search by hashtag"  onChange={this.handleChange} onKeyPress={this.props.tweetSearch}/>
      </div>
    )
  }
}
