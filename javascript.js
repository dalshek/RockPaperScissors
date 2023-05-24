let user; 
let computer;

let getComputerChoice = () => {
    let random = Math.random();
    
    if (random<0.33) computer = "rock"; 
    else if (random>0.66) computer = "paper"; 
    else computer = "scissors";
    return computer;
}
let askUserChoice = () => console.log("Rock, Paper or Scissors?");


let getUserchoice = () => {
    
    user=prompt("Rock, Paper or Scissors????");
    return user;
}


let game = (user, computer) => {

    if (user == computer) return "Draw";
    else if(user=="rock" && computer == "paper") return "You Lose! Rock beats Paper";
    else if(user=="paper" && computer == "rock") return "You Win! Rock beats Paper";
    else if(user=="rock" && computer == "scissors") return "You Win! Scissors beats Rock";
    else if(user=="scissors" && computer == "rock") return "You Lose! Scissors beats Rock";
    else if(user=="paper" && computer == "scissors") return "You Lose! Scissors beats Paper";
    else if(user=="scissors" && computer == "paper") return "You Lose! Scissors beats Paper";
    else return "Not a correct option introduced";
}



console.log(game(getUserchoice(), getComputerChoice()));

console.log("CONSOLE: " + computer + "\t USER: " + user)