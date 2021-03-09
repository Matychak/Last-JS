import React, {Component} from "react";

import "./items-status-filter.css"
import "./index"

export default class ItemsStatusFilter extends Component{

	btnControl = [
	{name:"all", label:"All"},
	{name:"active", label:"Active"},
	{name:"done", label:"Done"},


	]
	render(){

		const {filter, onFnChange} = this.props;
		const btnControl = this.btnControl.map(({name,label})=>{
			const Act = filter === name;
			const classBtn = Act ? "btn-info" : "btn-outline-secondary"
		return (
<button type = "button" className = {`btn ${classBtn}`} key = {name}
onClick = {() => onFnChange(name)}>{label}</button>
			)


		})
			
		return(
		
	<div className = "btn-group">
	{btnControl}
	</div>
	)
}
	}

