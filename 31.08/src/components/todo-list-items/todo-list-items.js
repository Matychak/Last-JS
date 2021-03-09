import React,{Component} from "react"
import "./index"
import "./todo-list-items.css"
import "../todo-list/todo-list"


//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { faExclamation } from '@fortawesome/free-solid-svg-icons'

export default class TodoListItems extends Component{

render(){
const{label,onToggleImportant,onToggleDone,done,active, important,onDeleted} = this.props;


let classNames = "todo-list-items active";

if (done) {
	classNames = "todo-list-items done "
}
if(active){
	classNames = "todo-list-items active"
}

if (important) {
	classNames = "todo-list-items important "
}

		return(
		<span>
 <span  className = {classNames} onClick = {onToggleDone}>{label}</span>
<button className = "btn btn_main btn_from_li" onClick = {onToggleImportant}>

<FontAwesomeIcon icon={faExclamation} />

</button>

<button className = "btn btn_del btn_from_li" onClick = {this.props.onDeleted} >

<FontAwesomeIcon icon={faTrashAlt} />

</button>
		
		</span>
		) 
}
}
