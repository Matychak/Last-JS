import React,{Component} from 'react';

import "./add-items.css";

import "./index"
export default class AddItems extends Component{
	state = {
		label:""
	}
	onLabelChange = (e) =>{
	this.setState({
		label:e.target.value

	})
	}

	onSubmit = (e) =>{
		e.preventDefault();
this.props.onAddItems(this.state.label)
this.setState({
	label:""
})
	}
	render(){
	const textInput = "What needs to be done";
	const textBtn = "Add item"
	return(
<form onSubmit = {this.onSubmit}>
<input type = "text" className = "add-panel " placeholder = {textInput} onChange = {this.onLabelChange} value = {this.state.label}/>
<button className = "btn-outline-secondary btn-panel" onClick = {() => this.props.onAddItems} >{textBtn}</button>
</form>
		)
}
}
