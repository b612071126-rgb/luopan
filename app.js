// 1. 找到HTML里的东西

const pointer = document.getElementById("pointer");

const degreeText = document.getElementById("degree");

const directionText = document.getElementById("direction");


// 2. 定义变量

let angle = 0;


// 3. 方向转换函数（放这里）

function getDirection(angle){

    const directions = [
        "北",
        "东北",
        "东",
        "东南",
        "南",
        "西南",
        "西",
        "西北"
    ];

    // 每45度一个方向
    let index = Math.round(angle / 45);

    // 防止360度超出数组
    if(index === 8){
        index = 0;
    }

    return directions[index];
}



// 1. 找到HTML里的东西

const pointer = document.getElementById("pointer");

const degreeText = document.getElementById("degree");

const directionText = document.getElementById("direction");


// 2. 定义变量

let angle = 0;


// 3. 方向转换函数（放这里）

function getDirection(angle){

    const directions = [
        "北",
        "东北",
        "东",
        "东南",
        "南",
        "西南",
        "西",
        "西北"
    ];

    // 每45度一个方向
    let index = Math.round(angle / 45);

    // 防止360度超出数组
    if(index === 8){
        index = 0;
    }

    return directions[index];
}



window.addEventListener(
"deviceorientation",
function(event){

let heading;


// iPhone
if(event.webkitCompassHeading){
    heading = event.webkitCompassHeading;
}
// Android
else{
    heading = event.alpha;
}


angle = Math.round(heading);


pointer.style.transform =
`rotate(${-angle}deg)`;


degreeText.innerHTML =
"方位角：" + angle + "°";


directionText.innerHTML =
"当前：" + getDirection(angle);


});