const pointer =
document.getElementById("pointer");


let angle = 0;



function rotatePointer(){


angle += 10;


if(angle >= 360){

angle = 0;

}



pointer.style.transform =
`rotate(${angle}deg)`;


}



setInterval(
rotatePointer,
1000
);