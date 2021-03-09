import React from "react";
import SwapiConnect from "./../swapi-connect/swapi-connect"
import "./planet-detail.css";

export default class PlanetDetail extends React.Component{
swapiConnect = new SwapiConnect();
state = {
	planet:[]
}
componentDidMount(){
	this.updatePlanet();
}

componentDidUpdate(prevProps){
	if(this.props.planetId !== prevProps.planetId){
		this.updatePlanet();
	}
}
updatePlanet = () =>{
	const {planetId} = this.props;
	if(!planetId){
		return;
	};
	this.swapiConnect.getPlanet(planetId)
	.then((planet)=>{
		this.setState({planet})
	})
}

	render(){
const {name,population,rotationPeriod,diameter,gravity,orbitalPeriod,climate,surface_water,terrain,id} = this.state.planet;
// if(!this.planetId){
	// return(
		// <div className = "span-planet jumbotron rounded">
// <span >Selected Planet</span>
		// </div>
// 		)
// }
return(
	<div className = "planet-detail jumbotron rounded">

<img  className = "planetd-img" src = {`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt = "pht" />

<div>
<h3>{name}</h3>
	<ul className = "list-item">

<li className = "list-item-group">
	<span>
		Population: { population}
	</span>


</li>

<li className = "list-item-group">
	<span>
		Rotation Period: { rotationPeriod}
	</span>



</li>

<li className = "list-item-group">
	<span>
		Diameter:  { diameter}
	</span>



</li>

<li className = "list-item-group">
	<span>
		Gravity:	{ gravity}
	</span>


</li>

<li className = "list-item-group">
	<span>
		Orbital Period: { orbitalPeriod}

	</span>

</li>

<li className = "list-item-group">
	<span>
		Climate: { climate}
	</span>



</li>


<li className = "list-item-group">
	<span>
		Surface Water:	{ surface_water}
	</span>



</li>


<li className = "list-item-group">
	<span>
		Terrain: { terrain}
	</span>


</li>



	</ul>


</div>





</div>
)
}
}

