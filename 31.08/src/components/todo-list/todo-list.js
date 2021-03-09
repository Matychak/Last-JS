import React from 'react';
import TodoListItems from "../todo-list-items"
import "./index"
import "./todo-list.css"
const TodoList = ({todos, onDeleted,onToggleImportant,onToggleDone}) =>{
	
	const element = todos.map((item) =>{
			
return(
<li key = {item.id} className = "list-group-item style">
<TodoListItems {...item} onDeleted = {() => onDeleted(item.id)} onToggleDone = {() => onToggleDone(item.id)} onToggleImportant = {() => onToggleImportant(item.id)}/>
</li>
		)
		
	});


	// const items = ["Items 1","Item 2","Item 3"];
return( 
	<ul className="list-group todo-list ul_style">
	{element}
	
	</ul>
	)
}

export default TodoList;