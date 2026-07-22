const degreeText =
document.getElementById("degree");


const directionText =
document.getElementById("direction");


const pointer = document.getElementById("pointer");


window.addEventListener(
"deviceorientation",
function(event){


let heading = event.alpha;


//旋转指针

pointer.style.transform =
`rotate(${-heading}deg)`;


degree.innerHTML =
Math.round(angle);



});