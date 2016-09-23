import React from 'react';

export default class Loading extends React.Component{
  render(){
    return(
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
        <i className="fa fa-spinner fa-spin fa-3x fa-fw"></i>
        Loading....
        </div>
      </div>
    )
  }
}
