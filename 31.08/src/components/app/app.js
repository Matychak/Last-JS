import React,{Component} from 'react';


// Add parts components

import AppHeader from "../app-header";
import AppSearch from "../app-search";
import TodoList from "../todo-list";
import ItemsStatusFilter from "../items-status-filter";
import AddItems from "../add-items";
import "./index"
import "./app.css";





export default class AppAll extends Component{
maxId = 1;
state = {
	todoList:[
	this.createNewItems("Drink Coffee"),
		this.createNewItems("Build React App"),
			this.createNewItems("Drink Tea")

],
data:"",
filter:"all"
}

createNewItems(label){
return {
	label,
	important:false,
	id:this.maxId++

}
};
deleteItem = (id) =>{
this.setState(({todoList}) =>{
const indexElement = todoList.findIndex((el) => el.id === id)
const left = todoList.slice(0, indexElement)
const right = todoList.slice(indexElement + 1)
const newArray = [...left, ...right];

return {
	todoList: newArray

}
})

}

addItems = (text) =>{

	//generator unique id
	const newItem = this.createNewItems(text)
this.setState(({ todoList }) =>{
	const newArray = [
...todoList,
newItem
	];
	return{
		todoList: newArray
	}
})	
}

onToggleDone = (id) =>{
this.setState(({ todoList }) =>{
const idx = todoList.findIndex((el) => el.id === id);


	const oldItem = todoList[idx]
const newItem = {...oldItem, done:!oldItem.done}


const newArray = [...todoList.slice(0, idx), newItem, ...todoList.slice(idx + 1)]
return{
	todoList:newArray
}
})

}
onToggleImportant = (id) =>{
this.setState(({ todoList }) =>{
const idx = todoList.findIndex((el) => el.id === id);
	const oldItem = todoList[idx]
const newItem = {...oldItem, important:!oldItem.important}
const newArray = [...todoList.slice(0, idx), newItem, ...todoList.slice(idx + 1)]

return{
	todoList:newArray
}
})
}

//search 

changeSearch = (data) =>{
this.setState({data});
}

onFnSearch(item,data){
	if (data.length === 0 ) {
		return item;
	}
	return item.filter((item) =>{
		return item.label.toLowerCase().indexOf(data.toLowerCase()) > -1
	})
	
}


// filter

onFnChange = (filter) =>{
	this.setState({filter})

}

filter(item,filter){
	switch(filter) {
		case "all":
			return item;
			
		case "active":
			return item.filter((item) => !item.done);

		case "done":
			return item.filter((item) => item.done);
		default:
		return item;	
	}
}




	// render


	render(){

		const {todoList,data,filter} = this.state;
		const seeSearch = this.filter(this.onFnSearch(todoList,data),filter)
		const doneCheck = todoList.filter((item) => item.done).length
		const todoCheck = todoList.length - doneCheck;
		return (
	<div className = "todo-app">
	<AppHeader toDo = {todoCheck} done = {doneCheck}/>

	<div className = "top-panel d-flex">

<AppSearch changeSearch = {this.changeSearch}/>
  	<ItemsStatusFilter filter = {filter}  onFnChange = {this.onFnChange}/>


	</div>

 <TodoList todos = {seeSearch} onDeleted = {this.deleteItem} onToggleImportant = {this.onToggleImportant} onToggleDone ={this.onToggleDone}/> 

 <AddItems onAddItems = {this.addItems}/>
	</div>
		)
}
}
	
