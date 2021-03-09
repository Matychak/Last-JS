
export default class dataSwapi {
	apiBase = "https://swapi.dev/api";
async getResource(url){
	const res = await fetch(`${this.apiBase}${url}`);

return await res.json();
};
async getAllPeople(){
	const a = await this.getResource(`/people/`/*https://swapi.dev/api/people/1/*/);
return a;


}



async getPeople(id){
	 const a = await this.getResource(`/people/${id}`/*https://swapi.dev/api/people/1/*/);
return a;
}
 getAllPlanet = async () =>{

	const res = await this.getResource(`/planets/`);
	return res.results.map(this.transformPlanet).slice(1);
}


async getPlanet(id){
	const planet = await this.getResource(`/planets/${id}`);
	console.log(planet);
return this.transformPlanet(planet); //
}






async getAllStarships(){
	 const a = await this.getResource(`/starships/`);
return a;
}
async getStarships(id){
 const a =  await this.getResource(`/starships/${id}`);
	return a;
}




extractReg(item){
	const regId = /\/([0-9]*)\/$/;

	 return item.url.match(regId)[1]; //

}
transformPlanet = (planet) =>{
	return {
	    id:this.extractReg(planet),//
    name:planet.name,
    population:planet.population,
    rotationPeriod:planet.rotation_period,
    diameter:planet.diameter,
    gravity:planet.gravity,
    orbitalPeriod:planet.orbital_period,
    climate:planet.climate,
    surface_water:planet.surface_water,
    terrain:planet.terrain
	}
}
};


// transform

// new object

// const people = new dataSwapi();
// people.getPeople(2).then((body) =>{
// 	console.log(body);
// })
