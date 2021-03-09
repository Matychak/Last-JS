import React,{Component} from "react";
import Spinner from "../spinner"
import "./planet-random.css"
import SwapiConnect from "./../swapi-connect/swapi-connect"
export default class PlanetRandom extends Component{

swapiConnect = new SwapiConnect();

state = {
planet:[],
loaded:false
}

// constructor(){
//   super();
//       this.updatePlanet();
// this.interval = setInterval(this.updatePlanet, 1500);
// clearInterval(this.interval)

// }

componentDidMount(){
         this.updatePlanet();
this.interval = setInterval(this.updatePlanet, 1500);
}
onPlanetLoaded = (planet) =>{

    this.setState({planet,
      loaded:false })
}
updatePlanet = () =>{

  const id = Math.floor(Math.random()*10)+3;
this.swapiConnect.getPlanet(id)

.then(this.onPlanetLoaded)
}

render(){

 const {planet, loaded} = this.state;
// if(loaded){
//   return <Spinner />
// }
const spinner = loaded ? <Spinner /> : null;
const content = !loaded ? <PlanetSee planet = {planet} /> : null;

return(
 
<div className = "planet-random jumbotron rounded">
{spinner}

{content}
</div>

		)
}
}


// Palnet See 
const PlanetSee = ({planet}) =>{
  const {population,name,rotationPeriod, diameter,id} = planet;
return (
<React.Fragment>
<img  className = "planet-img" src = {`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt = "pht"/>
<div>
<h4>{name}</h4>

<ul className = "list-group">
        <li className = "list-group-item">
              <span className = " tern">Population</span>
                <span> {population}</span>
                  
                                 </li>

         <li className = "list-group-item">
              <span className = " tern">Rotation Period</span>
                <span> {rotationPeriod}</span>
                                 </li>


         <li className = "list-group-item">
              <span className = " tern">Diameter</span>
                <span> {diameter}</span>
                                 </li>
                                         </ul>
                                         </div>
                                         </React.Fragment>
  )
}