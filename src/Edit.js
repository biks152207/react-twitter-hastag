import React, { Component } from 'react';

export default class Edit extends Component{
  constructor(props){
    super(props);
    this.state = {
      text: this.props.text
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(event){
    this.setState({text: event.target.value})
  }
  onSubmit(){
    this.props.save(this.props.id, this.state.text);
    this.props.openEdit();
  }
  render(){
    return(
      <div>
      <h3>Edit</h3>
      <hr/>
      <div className="form-group">
        <textarea className="form-control" value={this.state.text} onChange={this.onChange}></textarea>
      </div>
      <div className="form-group">
        <button className="btn btn-default" onClick={this.onSubmit}>Save</button>
      </div>
      </div>
    )
  }
}
