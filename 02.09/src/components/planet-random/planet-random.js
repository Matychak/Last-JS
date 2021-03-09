import React,{Component} from "react";
import Spinner from "../spinner"
import "./planet-random.css"

export default class PlanetRandom extends Component{


render(){
	return(
<Spinner />
		);

	return(

<div className = "planet-random jumbotron rounded">
<img className = "planet-img" src = "https://starwars-visualguide.com/assets/img/planets/2.jpg" alt="pht"/>
<div>
<h4>Kashyyyk</h4>

<ul className = "list-group">
        <li className = "list-group-item">
              <span className = " tern">Population</span>
                <span>1212</span>

                                 </li>

         <li className = "list-group-item">
              <span className = " tern">Rotation Repiod</span>
                <span>12</span>
                                 </li>


         <li className = "list-group-item">
              <span className = " tern">Diameter</span>
                <span>45</span>
                                 </li>
                                         </ul>
                                         </div>
</div>
		)
}
}
