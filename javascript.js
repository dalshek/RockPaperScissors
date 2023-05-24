let user, computer;
let userScore = 0;
let computerScore = 0;


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
    return user.toLowerCase();
}


let playRound = (user, computer) => {
    if (user == computer) return "Draw";
    else if(user=="rock" && computer == "paper"){
        computerScore++;
        return "You Lose! Rock beats Paper";
    }
    else if(user=="paper" && computer == "rock"){ 
        userScore++;
        return "You Win! Rock beats Paper";
    }
    else if(user=="rock" && computer == "scissors"){
        userScore++;
        return "You Win! Scissors beats Rock";
    }
    else if(user=="scissors" && computer == "rock"){ 
        computerScore++;
        return "You Lose! Scissors beats Rock";
    }
    else if(user=="paper" && computer == "scissors"){ 
        computerScore++;
        return "You Lose! Scissors beats Paper";
    }
    else if(user=="scissors" && computer == "paper"){
        userScore++;
        return "You Win! Scissors beats Paper";
    }
    else return "Not a correct option introduced";
}

let game = () => {
    for(let i=0; i<5; i++) {
        console.log(playRound(getUserchoice(), getComputerChoice()));
    }
}

let whoWin = (user, computer) => {
    if (user<computer) return console.log("LOOOOOOSER");
    else if (user>computer) return console.log("YOU FUCKING WIN");
    else return console.log("DRAAAAW :(")
}

game();
whoWin(userScore, computerScore);


//console.log(playRound(getUserchoice(), getComputerChoice()));

//console.log("CONSOLE: " + computer + "\t USER: " + user)