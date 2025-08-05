let gameSeq=[];
let userSeq=[];
let started=false;
let level=0;

let highscore=localStorage.getItem("getHighScore")|| 0;
//inside the "quotes " is the key or string which will save ur value in webbrowser and when u need the value it will search uske naam se

//to track highscore we make this function,,.current score is level-1
function gameOver(){
    if(level-1>highscore){
        highscore=level-1;

        //after updating the highscore variable will set it in localstorage
        //we will save it with key string name "getHighScore " and highscore is the value which we will print
        localStorage.setItem("getHighScore", highscore);
    }
    //we will sleect the h2 tag jisme hame highscore print krvana hai screen pe
    let high=document.querySelector(".high");
    high.innerText=`High score is  ${highscore} `;
    //h2 heading with id high usme highscore store hojayega
}
let h2=document.querySelector("h2");
let btns=["yellow","red","purple","green"];
//array of colors to choose random btn

document.addEventListener("keypress",function(){
    if(started==false){
        started=true;
        console.log("Keypressed!Game Started!");
    }
    levelUp();
});
function levelUp(){
    userSeq=[];
    //resetting the array after every level
    //coz user has to enter the order of colors from beginning after every level
    level++;
    h2.innerText=`Level ${level}`;
    let randIdx=Math.floor(Math.random()*4);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    /*console.log(randIdx);
    console.log(randColor);
    console.log(randBtn);*/

    gameSeq.push(randColor);
    console.log("Color order in gameSeq array is",gameSeq);

 gameFlash(randBtn);
}
function gameFlash(btn){
  btn.classList.add("flash");
  setTimeout(function(){
    btn.classList.remove("flash");
  },250);
}

function userFlash(btn){
 btn.classList.add("userFlash");
 setTimeout(function(){
btn.classList.remove("userFlash");
 },250);
}

function checkAns(idx){
    //idx here is an argument of the function checkAnse iska value will be passed while function call
    //  of checkAns and woh hoga userSeq.length-1 coz hame 
    // userSeq array ka last index hee check karana haina toh usko hee is function mei as an argument 
    // paass karayenge

//this idx will only the check the current btn color entered by user for example agar red,blue,green hai 
//gamesequence toh user ne dala red toh sirf red hee match hoga  mtlb dono array mei index 0 chek hoga
    if(gameSeq[idx]==userSeq[idx]){
      console.log("Color Matched");
     
      //this prevents the game from leveleing up ,just after one element example red is matched 
      // from userseq
      if(userSeq.length==gameSeq.length){
      setTimeout(levelUp,1000);
      }
     //as sson as the color pattern is matched in both arrays level fatak se badh jayega 
     // aur fatak se new  button flash hoga toh thoda delay set karanaa hai hame leveluUp function mei
     //using setTimeout
    }
    else{
       h2.innerHTML=`Game Over! Your score is <b>${level-1}</b>. <br>Press any key to start again`;
       document.querySelector("body").style.backgroundColor="red";
       setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
       },1000);

       gameOver();
       //to track highscore
       reset();
       //reset the entire game again coz after game over when we again press a key to start new game
       //tab ho nhi rha hai start isliye ek function banayenge reset() aur sabkuch wapis reset karenge
     
    }
}


function reset(){
    started=false;
    level=0;
    gameSeq=[];
    userSeq=[];
}

function btnPress(){
    let btn=this;
    //this refers to the btn pressed by user in callback of eventlistener of btn
    userFlash(btn);
    //will pass the btn which user clicked to flash

   let userColor=btn.getAttribute("id");
   //coz btn ko pata hai ki uske andar kya color hai..toh woh information se
   //  ham btns ko id attribute denge uska individual color denge .. aur uska color nikalvayenge
   userSeq.push(userColor);
   console.log("Color order in userSeq array is",userSeq);

   //after user also clicked and flashed the btn uske baad we will call a function to check the 
   //last index of gameSeq and userSeq to see if their color matches
   checkAns(userSeq.length-1);
    //this userSeq.length-1 will be passsed in checkans as argument and 
    // do arrays ke liye ham yahi value check karnege mtlb last index check krnge na dono arrays ka
}
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

