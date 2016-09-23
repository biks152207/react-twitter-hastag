import React from 'react';
import Edit from './Edit';
import EditIcon from './EditIcon';

export default class List extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      open: false
    }
    this.openEdit = this.openEdit.bind(this);
  }
  openEdit(){
    this.setState({open: !this.state.open});
  }
  render(){
    var edit;
    var Icon;
    if (this.state.open){
      edit = <Edit text={this.props.name} save={this.props.save} id={this.props.id} openEdit={this.openEdit}/>
      Icon = '';
    }else{
      edit ='';
      Icon = <EditIcon openEdit={this.openEdit}/>;
    }
    return(
      <div>
        <li className="list-group-item">{this.props.name} {edit} {Icon} </li>
      </div>
    )
  }
}
