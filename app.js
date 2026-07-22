// 1. 找到HTML里的东西

const pointer = document.getElementById("pointer");

const degreeText = document.getElementById("degree");

const directionText = document.getElementById("direction");


// 2. 定义变量

let angle = 0;


// 3. 方向转换函数（放这里）

function getDirection(angle){

    if(angle >=337.5 || angle <22.5){
        return "北";
    }

    if(angle <67.5){
        return "东北";
    }

    if(angle <112.5){
        return "东";
    }

    if(angle <157.5){
        return "东南";
    }

    if(angle <202.5){
        return "南";
    }

    if(angle <247.5){
        return "西南";
    }

    if(angle <292.5){
        return "西";
    }

    return "西北";
}


// 4. 控制罗盘

function rotatePointer(){

    angle += 10;

    if(angle >=360){
        angle = 0;
    }


    pointer.style.transform =
    `rotate(${angle}deg)`;


    degreeText.innerHTML =
    "方位角：" + angle + "°";


    directionText.innerHTML =
    "当前：" + getDirection(angle);

}




window.addEventListener(
"deviceorientation",
function(event){


let heading = event.alpha;


//旋转指针

pointer.style.transform =
`rotate(${-heading}deg)`;

degreeText.innerHTML =
"方位角：" + angle + "°";

degree.innerHTML =
Math.round(angle);



});