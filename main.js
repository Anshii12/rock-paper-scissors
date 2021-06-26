//getting the DOM elements
let userScore = 0;
let compScore = 0;
const userScoreEl = document.getElementById('user-score');
const compScoreEl = document.getElementById('comp-score');
const scoreBoardEl = document.querySelector('.score-board');
let result = document.querySelector('.result > p');
const rockEl = document.getElementById('r');
const paperEl = document.getElementById('p');
const scissorsEl = document.getElementById('s');

//getting computer choice by random numbers
function getComputerChoice() {
   const choices = ['r' , 'p' , 's']
   const randomNumber  = (Math.floor(Math.random()*3))
   return choices[randomNumber];

}


    function toWord(letter) {
        if (letter === "r") 
        return "Rock";
        if (letter === "p") 
        return "Paper";
        if (letter === "s") 
        return "Scissors";
    }

//when user wins
function win(user , computer) {
    //adding the subscripts
    const smallUserWord = "user".fontsize(3);
    const smallCompWord = "comp".fontsize(3);
    //increasing user's score
    userScore++;
    //displaying the score
    userScoreEl.innerHTML = userScore;
    compScoreEl.innerHTML = compScore;
    //displaying the result
    result.innerHTML = `${toWord(user)}${smallUserWord} beats ${toWord(computer)}${smallCompWord}. You Win`;
    document.getElementById(user).classList.add('win-glow');
    setTimeout(function() {document.getElementById(user).classList.remove('win-glow')},500)
}


//when user loses
function lose(user , computer) {
    //adding the subscripts
    const smallUserWord = "user".fontsize(3)
    const smallCompWord = "comp".fontsize(3)
    //increasing computer's score
    compScore++;
    //displaying the score
    userScoreEl.innerHTML = userScore;
    compScoreEl.innerHTML = compScore;
    //displaying the result
    result.innerHTML = `${toWord(user)}${smallUserWord} loses to ${toWord(computer)}${smallCompWord}. You Lost`;
    document.getElementById(user).classList.add('lose-glow');
    setTimeout(function() {document.getElementById(user).classList.remove('lose-glow')},500)
}

//when--- draw
function draw(user , computer) {
     //adding the subscripts
    const smallUserWord = "user".fontsize(3)
    const smallCompWord = "comp".fontsize(3)
    //no need to update the scores
    //displaying result
    result.innerHTML = `${toWord(user)}${smallUserWord} equals ${toWord(computer)}${smallCompWord}. Its a draw`;
    document.getElementById(user).classList.add('draw-glow');
    setTimeout(function() {document.getElementById(user).classList.remove('draw-glow')},500)
}

//deciding the winner
function game(userChoice) {
    //storing result of computer choice function in a variable
     const computerChoice = getComputerChoice();
    //deciding the winner by switch cases
     switch(userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice , computerChoice);
            break;
        case "rp":
        case "ps":    
        case "sr":
            lose(userChoice , computerChoice);
            break;
        case "rr":
        case "pp":    
        case "ss":
            draw(userChoice , computerChoice);
            break;

     }

}

//getting user's selected choice by using click method 
function main() {
    rockEl.addEventListener('click', function() {
        game('r')
    })

    paperEl.addEventListener('click', function() {
        game('p')
    })
    scissorsEl.addEventListener('click', function() {
        game('s')
    })
 }

 main();
