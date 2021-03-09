import React,{Component} from 'react';
import "./index"
import "./app-search.css"

export default class AppSearch extends Component{
	state = {
		data:""
	}

	changeSearch = (a) =>{
		const data = a.target.value;
		this.setState({data})
		this.props.changeSearch(data)
	}
	render(){
	const text = "type to search"
	return(
		
<input type = "text" className = "search_panel" placeholder = {text} value = {this.state.data} onChange = {this.changeSearch}/>

		)
}
}
