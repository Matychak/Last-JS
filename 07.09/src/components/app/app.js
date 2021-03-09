import React,{Component} from "react";
import ItemList from "../item-list"
import PlanetRandom from "../planet-random"
import PlanetDetail from "../planet-detail"
import "./app.css"

export default class App extends Component{

  state = {
    selectedPlanet:2
  }

  onItemSelected = (id) =>{
    console.log(id);
    this.setState({
      selectedPlanet:id

    })
  }
  render(){


	return(
 <div className = "conteiner col-10 mx-auto mt-n5" >
       {/*header*/}
         <PlanetRandom />
         <div className = "row">
              <div className = "col-6">
                 <ItemList onItemSelected = {this.onItemSelected}/>
                       </div>
                            <div className = "col-6">
                                <PlanetDetail planetId = {this.state.selectedPlanet}/>
                                    </div>
                                          </div>
                                                
                                                     </div> 
		)
}
  }
// export default class ItemList extends Component{
//   swapiConnect = new SwapiConnect();

//   state = {
//     planetList:null
//   }

//   componentDidMount(){
//     this.swapiService.getAllPlanets()
//     .then((planetList) => {
// this.setState({planetList})
//     })
//   }



// renderItem = (arr) =>{

// console.log(arr);

//   return arr.map(({id,name})=>{

//     return (



// <li className = "list-group-item" key = {id} onClick={() => this.props.onItemSelected(id)}>

// {name}

// </li>



      
//   )
//   })

// }

// render(){
//   const {planetList} = this.state;
//     if(!planetList){
//     return <Spinner />
//   }
//   const itemList = this.renderItem(planetList);
//     console.log(itemList);
//       return (
// <ul className = "list-group col-10">
// {itemList}
// </ul>
//       ) 
// };