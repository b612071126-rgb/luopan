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
if(event.webkitCompassHeading !== undefined){
    heading = event.webkitCompassHeading;
}
else{
    heading = event.alpha;
}


angle = Math.round(heading);


pointer.style.transform =
`rotate(${angle}deg)`;


degreeText.innerHTML =
angle;


directionText.innerHTML = getDirection(angle);


});


const ticks=document.getElementById("ticks");

document.body.innerHTML += 
"<p>ticks存在：" + ticks + "</p>";

for(let i=0;i<360;i+=10){

    let tick=document.createElement("div");

    tick.className="tick";

    tick.style.transform =
    `rotate(${i}deg) 
    translateY(-150px)`;

    ticks.appendChild(tick);

}