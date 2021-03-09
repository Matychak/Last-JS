import React,{Component} from "react";
import SwapiConnect from "./../swapi-connect/swapi-connect"
import Spinner from "../spinner"


import "./todo-list.css"

export default class ItemList extends Component{


	state = {
		planetList:null
	}
swapiConnect = new SwapiConnect();
	componentDidMount(){
		this.swapiConnect.getAllPlanet()
		.then((planetList) => {
this.setState({planetList})
		})
	}
renderItem = (arr) =>{

console.log(arr);

  return arr.map(({id,name})=>{

    return (



<li className = "list-group-item" key = {id} onClick={() => this.props.onItemSelected(id)}>

{name}

</li>

)
})
}


	render(){
		const {planetList} = this.state;
    if(!planetList){
    return <Spinner />
  }
  const itemList = this.renderItem(planetList);

      return (
<ul className = "list-group col-10">
{itemList}
</ul>
      )
	}
}
