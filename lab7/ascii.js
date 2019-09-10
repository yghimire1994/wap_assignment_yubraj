"use strict";

let timer=null;
let size="12pt";
let speed=250;
let animateArray=[""];

window.onload=function () {
    document.getElementById("start").onclick=function () {
        console.log(timer);
        if (timer===null){
            console.log("start...");

            size=document.getElementById("fontsize").value;
            console.log("font size=" + size);
            runProcess(0);
        }

    };

    document.getElementById("stop").onclick=function () {
        document.getElementById("stop").disabled=true;
        document.getElementById("start").disabled=false;

        clearProcess();
    };

    document.getElementById("fontsize").onchange=function () {
        size=document.getElementById("fontsize").value;
    };

    document.getElementById("turbo").onchange=function () {
        if (document.getElementById("turbo").checked){
            speed=50;
        }
        else{
            speed=250;
        }

        clearProcess();
        runProcess(0);
    };

    document.getElementById("animation").onchange=function () {
        var animation=document.getElementById("animation").value;
        animateArray=ANIMATIONS[animation].split("=====\n");
        clearProcess();
        runProcess(0);
    };

    function runProcess(counter) {
        timer = setInterval(function(){

            if (animateArray==null || animateArray.length==1){
                document.getElementById("text-area").value="";
                return;
            }

            document.getElementById("stop").disabled=false;
            document.getElementById("start").disabled=true;

            document.getElementById("text-area").value=animateArray[counter];
            document.getElementById("text-area").style.fontSize=size;
            console.log("font size:" + size);

            counter++;
            if(counter === animateArray.length) {
                /*clearInterval(i); */
                counter=0;
            }
            console.log("speed:" + speed);
        }, speed);
    }

    function clearProcess() {
        clearInterval(timer);
        timer=null;
    }

};