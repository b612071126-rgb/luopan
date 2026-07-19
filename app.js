let currentAngle = 0;


// 校准偏移

let offset =
Number(
localStorage.getItem(
"compassOffset"
)
)
||
0;



// 平滑缓存

let history=[];



function smooth(angle){


history.push(angle);



if(history.length>10){

history.shift();

}



let total=0;


history.forEach(a=>{

total+=a;

});


return total/history.length;


}




function getDirection(angle){


if(angle<22.5||angle>=337.5)
return "北";


if(angle<67.5)
return "东北";


if(angle<112.5)
return "东";


if(angle<157.5)
return "东南";


if(angle<202.5)
return "南";


if(angle<247.5)
return "西南";


if(angle<292.5)
return "西";


return "西北";


}





function updateCompass(angle){



angle += offset;



angle =
(angle+360)%360;



angle =
smooth(angle);



currentAngle=angle;



document
.getElementById("degree")
.innerHTML=
Math.round(angle)+"°";



document
.getElementById("direction")
.innerHTML=
getDirection(angle);



document
.getElementById("needle")
.style.transform=
`rotate(${angle}deg)`;



document
.getElementById("debug")
.innerHTML=

`
原始角度:
${Math.round(angle)}°

校准:
${offset}°

缓存:
${history.length}
`;



}





function sensorHandler(event){


let angle =
event.alpha;



if(angle!==null){


document
.getElementById("status")
.innerHTML=
"✅ 手机传感器运行中";


updateCompass(angle);


}


}





function startSensor(){



if(
typeof DeviceOrientationEvent
!=="undefined"
&&
typeof DeviceOrientationEvent.requestPermission
==="function"
){


DeviceOrientationEvent
.requestPermission()
.then(
result=>{


if(result==="granted"){


window.addEventListener(
"deviceorientation",
sensorHandler
);


}


});


}

else{


window.addEventListener(
"deviceorientation",
sensorHandler
);


}


}





// 校准


document
.getElementById("calibrate")
.onclick=function(){



offset =
-currentAngle;



localStorage.setItem(
"compassOffset",
offset
);



alert(
"校准完成"
);


};





// 清除校准


document
.getElementById("reset")
.onclick=function(){


offset=0;


localStorage.removeItem(
"compassOffset"
);



alert(
"已清除校准"
);


};





startSensor();





// 无传感器测试模式


setTimeout(()=>{


if(currentAngle===0){



document
.getElementById("status")
.innerHTML=
"⚠️ 模拟模式";


let fake=0;


setInterval(()=>{


fake+=5;


if(fake>=360)
fake=0;


updateCompass(fake);


},500);


}


},3000);