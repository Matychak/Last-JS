
//start

// function Car(mar,model,year,speed){
// 	return{
// 		mar,model,year,speed
// 	}
// }
// let audi = new Car("Audi", "rs6", "2017", "200")

// function car_info(car){
// 	for(let key in car){
// 		console.log(key, car[key]);
// 	}
// }

// function prob(car, dist){
// 	let add_dist = 0;
// 	let txt = "It takes time "
// 	let dist__ = dist/car.speed;
// 	if (dist__ > 4) {
// add_dist = parseInt(dist__ / 4 )
// 	}
// 	return txt + dist__ + add_dist;
// };
// car_info(audi);
// console.log(prob(audi, 700))

//end


//2  

// start

// function Mfn(s_drob,s2_drob){
// 	return{
// 		s_drob,s2_drob
// 	}
// }
// let sd = Number(prompt("n1"));
// let s2d = Number(prompt("n2"));

// let pr = prompt("/,*,+,-");

// let fn = new Mfn(sd, s2d);

// function math_info(mfn){
// 	for(let key in Mfn){
// 		console.log(key, Mfn[key]);
// 	}
// }

// function job(){
	
// 	let c;
// 	if (pr == "/") {	
// 	    c = Number(fn.s_drob /  fn.s2_drob).toFixed(1);
// 	}

// 		if (pr == "+") {
// 		c = Number(fn.s_drob +  fn.s2_drob).toFixed(1);
// 	}

// 		if (pr == "-") {
// 		c = Number(fn.s_drob -  fn.s2_drob).toFixed(1);
// 	}

// 		if (pr == "*") {
// 		c = Number(fn.s_drob *  fn.s2_drob).toFixed(1);
// 	}

// 	if (pr !== "/" || pr !== "*" || pr !== "-" || pr !== "+"){
// 		console.log("please enter correct data");
// 	}



// 	return c;
// }

// math_info(fn);
// let cl = console.log(job());
// if(cl == NaN || cl == undefined){
// 	console.log("error");
// }


//5 пункт не виконав хотя находив в інтернеті і теж нічого не зрозумів, розпишите якщо зможите, зарання Дякую)
//Не знаю чи так можна робити але по факту вся функція збережена , якщо потрібно зможу переробити і скінути в тг.
//end

// 
let promptH = parseInt(prompt("Enter hour"))
let promptM = parseInt(prompt("Enter minutes"))
let promptS = parseInt(prompt("Enter second"))

let clock = {
	h:promptH,
	m:promptM,
	s:promptS
}

let day = 0;

function getSec(clock, sec){
let s = clock.s + sec;
if(s>=60){
	clock.m = clock.m + parseInt(s/60)
	clock.s = s%60
}

}

getSec(clock,0);




function getMin(clock, man){
let m = clock.m + man;
if(m>=60){
	clock.h = clock.h + parseInt(m/60);
	clock.m =  m%60;
}
}
getMin(clock,0);


// //


function getHour(clock, hour){
let h = clock.h + hour;
if(h>=24){
	day = day + parseInt(h/24)
	clock.h =  h%24
}

}
getHour(clock,0);
console.log(clock)


