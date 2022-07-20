const pl=document.querySelector("#p");
const com=document.querySelector("#c");
const res=document.querySelector("#res");
//const btn=document.querySelectorAll(".btn");
let player;
let comp;

// btn.forEach(b=> b.addEventListener("click",()=>{
//     player=b.textContent;
//     compturn();
//     pl.textContent=`Player: ${player}`;
//     com.textContent=`Computer: ${comp}`;
//     res.textContent=result();
// }));
function r(){
    player=document.getElementById("rk").textContent;
    compturn();
    pl.textContent=`Player: ${player}`;
    com.textContent=`Computer: ${comp}`;
    res.textContent=result();
}
function p(){
    player="PAPER";
    //player=document.getElementById("pa").textContent;
    compturn();
    pl.textContent=`Player: ${player}`;
    com.textContent=`Computer: ${comp}`;
    res.textContent=result();
}
function s(){
    player=document.getElementById("sc").textContent;
    compturn();
    pl.textContent=`Player: ${player}`;
    com.textContent=`Computer: ${comp}`;
    res.textContent=result();
}


function compturn(){
    let num=Math.floor(Math.random()*3)+1;
    if(num==1){
        comp="ROCK";
    }
    else if(num==2){
        comp="PAPER";
    }
    else if(num==3){
        comp="SCISSORS";
    }
}
function result(){
    if(player==comp){
        return "Draw";
    }
    else if(comp=="ROCK"){
        return (player=="PAPER")?"Player":"Computer";
    }
    else if(comp=="PAPER"){
        return (player=="SCISSORS")?"Player":"Computer";
    }
    else if(comp=="SCISSORS"){
        return (player=="ROCK")?"Player":"Computer";
    }
}
