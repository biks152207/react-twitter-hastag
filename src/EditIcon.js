import React from 'react';

export default class EditIcon extends React.Component{
  render(){
    return(
      <i className="fa fa-pencil-square-o" onClick={this.props.openEdit} aria-hidden="true"></i>
    )
  }
}
