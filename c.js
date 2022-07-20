
const ele = document.querySelector("#mylabel");
const st = document.querySelector("#start");
const pau = document.querySelector("#stop");
const resta = document.querySelector("#restart");
let startTime=0;
let elapsedTime=0;
let currTime=0;
let pause=true;
let id;
let min=0;
let sec=0;
let millisec=0;

st.addEventListener("click",()=>{
    
    if(pause){
        pause=false;
        startTime=Date.now()-elapsedTime;
        id=setInterval(updatTime,1);
    }
});
pau.addEventListener("click",()=>{
    if(!pause){
        pause=true;
        elapsedTime=Date.now()-startTime;
        clearInterval(id);
    }
    
});
resta.addEventListener("click",()=>{
    pause=true;
    clearInterval(id); 
    startTime=0;
    elapsedTime=0;
    currTime=0;
    min=0;
    sec=0;
    millisec=0;
    ele.textContent="00:00:00";
});


function updatTime() {
    elapsedTime=Date.now()-startTime;
    millisec=Math.floor(elapsedTime%1000);
    sec=Math.floor((elapsedTime/1000) % 60);
    min=Math.floor((elapsedTime/(1000*60)) % 60);
    min=f1(min);
    sec=f1(sec);
    millisec=f1(millisec);
    ele.textContent=`${min}:${sec}:${millisec}`;
    function f1(time){
        time=time.toString();
        return time.length<2 ? "0"+time:time;
    }
   
}   
