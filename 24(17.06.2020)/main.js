
//add create
let conteiner = document.createElement("div");
let BigDiv = document.createElement("div");
let MinDiv= document.createElement("div");
let ul = document.createElement("ul");

// add(create) arrows
let right_arrow = document.createElement("span");
let left_arrow = document.createElement("span");


// add(create) arrows min
let right_arrow_min = document.createElement("span");
let left_arrow_min = document.createElement("span");

//add class
conteiner.classList.add("conteiner");
BigDiv.classList.add("BigDiv");
MinDiv.classList.add("MinDiv");

right_arrow.classList.add("right_arrow");
left_arrow.classList.add("left_arrow");

right_arrow_min.classList.add("right_arrow_min");
left_arrow_min.classList.add("left_arrow_min");

// add sign for arrow

right_arrow.innerHTML = "&#10148";
left_arrow.innerHTML = "&#10148";
right_arrow_min.innerHTML = "&#10148";
left_arrow_min.innerHTML = "&#10148";

//add html
document.body.insertAdjacentElement("afterbegin",conteiner);
conteiner.insertAdjacentElement("afterbegin", BigDiv);
BigDiv.insertAdjacentElement("afterbegin", left_arrow);
BigDiv.insertAdjacentElement("afterbegin", right_arrow);
conteiner.insertAdjacentElement("beforeend", MinDiv);
MinDiv.insertAdjacentElement("afterbegin",ul);



// add img
let get_img = new XMLHttpRequest();
let url = 'https://pixabay.com/api/?key=17057678-b4c4954d8c62e2cb084b2680c&q=yellow+flowers&image_type=photo&per_page=10'
get_img.open('GET',url);
get_img.send();
 
get_img.onload = function(){
    if(get_img.status !=200){
        console.log(get_img.status,get_img.statusText);
    } else {
        let result = JSON.parse(get_img.response).hits;
        showImg(result);
        ShowBigImg(result);
    }
}

function ShowBigImg(objImg){
 let img = document.createElement("img");
 img.src = objImg[0].webformatURL;
 BigDiv.insertAdjacentElement("afterbegin", img)
}
 
function showImg(objImg){
	//

	//

for(let i = objImg.length-1; i >=0; i--){
	let li = document.createElement("li");
	let img = document.createElement("img");
	li.style.backgrountImage = `url(${objImg[i].webformatURL})`;
	img.src = objImg[i].webformatURL;
	ul.insertAdjacentElement("afterbegin",li);
	li.insertAdjacentElement("afterbegin", img);
}
let n = 0


let list = document.querySelectorAll(".MinDiv li");

for(let i = 0; i <list.length; i++){
	list[i].addEventListener("click", function(){
		document.querySelector(".BigDiv img").src = objImg[i].webformatURL;
      
      n = i;
			})
}

// min img slider
let min_size = list[0].getBoundingClientRect().width * list.length + 160;
ul.style.width = `${min_size}px`;
ul.style.marginLeft = '-100px';

MinDiv.insertAdjacentElement("afterbegin", left_arrow_min);
MinDiv.insertAdjacentElement("afterbegin", right_arrow_min);
let control_width = 0;
let border = min_size - MinDiv.getBoundingClientRect().width;
console.log(border);


//
right_arrow_min.addEventListener("click", function(){
	control_width -= list[0].getBoundingClientRect().width;

	if(control_width<=(-border)){
		control_width = 0;
	}
	ul.style.left = `${control_width}px`
})

left_arrow_min.addEventListener("click", function(){
	control_width -= list[0].getBoundingClientRect().width;

	if(control_width>=(-border)){
		control_width = 0;
	}
	ul.style.left = `${control_width}px`
})

//











left_arrow.addEventListener("click", function(){
	
	n--;
	if (n < 0) {
		n = objImg.length-1;
	}

	control_width -= 100;

	if(control_width<=(-border-50)){
		control_width = 0;
	}


	ul.style.right = `${control_width}px`

	document.querySelector(".BigDiv img").src = objImg[n].webformatURL;


})




right_arrow.addEventListener("click", function(){
	n++;
	if (n == objImg.length) {
		n = 0;
	}

	control_width -= 100;

	if(control_width<=(-border)){
		control_width = 0;
	}

	ul.style.left = `${control_width}px`

document.querySelector(".BigDiv img").src = objImg[n].webformatURL;

})



}
