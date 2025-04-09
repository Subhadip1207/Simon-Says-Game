let h3 = document.querySelector("h3");
let blinkseq=[];
let userseq =[];
let btns = ["red","green","blue","yellow"];
let start = false;
let level =0;
let highestScore = 0;
function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },300);
    
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },300);
    
}
function levelup(){
    userseq = [];
    level++;
    h3.innerText = `Level ${level}`;
    let index = Math.floor(Math.random()*4);
    let randomcolor = btns[index];
    let randombtn = document.querySelector(`.${randomcolor}`);
    blinkseq.push(randomcolor);
    console.log(blinkseq);
    btnflash(randombtn);
}
document.addEventListener("keypress",function(){
    if(start==false){
        console.log("key pressed");
        start=true;
        levelup();
    }
    
})

function btnpress(){
    console.log(this.innerText);
    userflash(this);
    userseq.push(this.innerText);
    ismatch(userseq.length-1);
}
function ismatch(index){
   if(userseq[index] === blinkseq[index]){
    if(userseq.length == blinkseq.length){
       setTimeout( levelup,1000);
    }
   }else{
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor = "aqua";
    },150)
    h3.innerHTML = `Game Over ! Your score is<b> ${level}</b>.<br>Press any key to restart.`;
    if(level>highestScore){
        highestScore = level;
        let h2= document.querySelector("h2");
        h2.innerText = `Highest Score is ${highestScore}`;
        let outerdiv = document.querySelector(".outer");
        outerdiv.prepend(h2);
    }
    reset();
   }
}
let buttons= document.querySelectorAll(".btn");
for(button of buttons){
    button.addEventListener("click",btnpress);
}
function reset(){
    start=false;
    blinkseq = [];
    userseq = [];
    level = 0;
}
