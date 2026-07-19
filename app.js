let currentAngle = 0;


let offset = 0;



function updateCompass(angle){


currentAngle = angle;



let showAngle =
Math.round(angle);



document.getElementById("degree")
.innerHTML =
showAngle+"°";



let direction="";



if(angle < 22.5 || angle >=337.5){

direction="北";

}

else if(angle <67.5){

direction="东北";

}

else if(angle <112.5){

direction="东";

}

else if(angle <157.5){

direction="东南";

}

else if(angle <202.5){

direction="南";

}

else if(angle <247.5){

direction="西南";

}

else if(angle <292.5){

direction="西";

}

else{

direction="西北";

}



document.getElementById("direction")
.innerHTML=
direction;



document.getElementById("needle")
.style.transform=
`rotate(${angle}deg)`;

}




// 手机方向传感器

function handleOrientation(event){



let angle =
event.alpha;



if(angle){

angle =
angle + offset;



angle =
(angle+360)%360;



updateCompass(angle);

}


}



// 请求权限

function startCompass(){



if(
typeof DeviceOrientationEvent !== "undefined"
&&
typeof DeviceOrientationEvent.requestPermission
==="function"
){



DeviceOrientationEvent
.requestPermission()
.then(
response=>{


if(response==="granted"){

window.addEventListener(
"deviceorientation",
handleOrientation
);

}

});


}

else{


window.addEventListener(
"deviceorientation",
handleOrientation
);


}

}



document
.getElementById("calibrate")
.onclick=function(){


offset =
- currentAngle;


alert(
"罗盘已校准"
);


};



startCompass();




// 如果手机没有传感器

setTimeout(()=>{


if(currentAngle===0){


let test=0;


setInterval(()=>{


test+=10;


if(test>=360){

test=0;

}


updateCompass(test);


},500);



}


},3000);