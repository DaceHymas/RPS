var playerChoice = 0
var computerChoice = 0
var numWins = 0
var numLoss = 0
var numTies = 0
var textCompChoice = null
var numGames = 0
document.getElementById("rock").addEventListener("click", function(){
    playerChoice = 1
    computerChoice = getRandomNum (1, 4)
    console.log("player:" + playerChoice)
    console.log("computer:" + computerChoice)
    checkWin()
    displayCompChoice()
});

document.getElementById("paper").addEventListener("click", function(){
    playerChoice = 2
    computerChoice = getRandomNum (1, 4)
    console.log("player:" + playerChoice)
    console.log("computer:" + computerChoice)
    checkWin()
    displayCompChoice()
});

document.getElementById("scissors").addEventListener("click", function(){
    playerChoice = 3
    computerChoice = getRandomNum (1, 4)
    console.log("player:" + playerChoice)
    console.log("computer:" + computerChoice)
    checkWin()
    displayCompChoice()
});

function getRandomNum (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
      }
function checkWin() {
    var temp = playerChoice - computerChoice
    numGames ++
    document.getElementById("totalGames").innerHTML = "Games Played: " + numGames
    if (temp == 1 || temp == -2) {
        console.log("Win")
        numWins ++
        console.log(numWins)
        document.getElementById("wins").innerHTML = "Wins: " + numWins
        document.getElementById("currentGame").innerHTML = "You Won"
    } else if (temp == 0) {
        console.log("Tie")
        numTies ++
        console.log(numTies)
        document.getElementById("ties").innerHTML = "Ties: " + numTies
        document.getElementById("currentGame").innerHTML = "You Tied"
    } else {
        console.log("Lose")
        numLoss ++
        console.log(numLoss)
        document.getElementById("losses").innerHTML = "Losses: " + numLoss
        document.getElementById("currentGame").innerHTML = "You Lost"
    }
}

function displayCompChoice () {
    if (computerChoice == 1) {
        textCompChoice = "Rock"
    } else if (computerChoice == 2) {
        textCompChoice = "Paper"
    } else {
        textCompChoice = "Scissors"
    }
    console.log (textCompChoice)
    document.getElementById("computerChoiceText").innerHTML = "Computer Chose: " + textCompChoice
}