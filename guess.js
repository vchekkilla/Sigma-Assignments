//Guess game-Ask user to give maximum range of number 
//generate random num in that range
//ask user to guess num and compare it with random num generated to win

let max=prompt("Enter the maximum range");
let ran=Math.floor(Math.random()*max)+1;
let guess=prompt("Enter your guess");
while(true){
    if(guess=="quit"){
        console.log("You Quit");
        break;
    }
    if(guess==ran){
        console.log("Congratts!Your guessed random number is",ran);
        break;
    }
    else if(guess<ran){
     guess= prompt("Guess is too small! Try again");
    }
    else{
        guess=prompt("Guess is too large! Try again");
    }

}
