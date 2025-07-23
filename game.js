let humanScore = 0
let computerScore = 0  

alert("Welcome to rock, paper, scissors!")
let nrounds; 

do 
  nrounds = prompt("How many rounds? (odd, please)")
while (nrounds%2 != 1)

for(i = 0; i < nrounds; i++) {
  if (humanScore == Math.floor(nrounds/2)+1) {
    break
  }

  playRound(getHumanChoice(), getComputerChoice())
} 

endGame() 

/** Generates a random value between Rock, Paper and scissors */
function getComputerChoice() {
  let out;
  let x = Math.random()

  if (x < 0.33)  
    out = "rock"
  else if (x >= 0.33 && x < 0.66)  
    out = "paper" 
  else  
    out = "scissors"

  return out
}

/** Asks user to choose between rock, paper and scissors and returns the result*/
function getHumanChoice() {
  let i 

  do
    i = parseInt(prompt("Choose your move by typing:\n1 - rock\n2 - paper\n3 - scissors\n"))
  while (i != 1 && i != 2 && i != 3)

  switch(i) {
    case 1:
      return "rock"
    case 2:
      return "paper"
    case 3:
      return "scissors"
  } 
}

/** Determines who won and updates the scores */
function playRound(humanChoiche, computerChoice) {
  if (humanChoiche == computerChoice) {
    alert(`Human: ${humanChoiche}\nComputer: ${computerChoice}\nDraw, no points awarded`)
    return 0
  }

  let out;
  switch(humanChoiche) {
    case "rock":
      out = (computerChoice ==  "paper") ? 2 : 1 
      break;
    case "paper":
      out = (computerChoice == "scissors") ? 2 : 1 
      break;
    case "scissors":
      out = (computerChoice == "rock") ? 2 : 1 
      break;
  }

  if (out == 1) {
    alert(`Human: ${humanChoiche}\nComputer: ${computerChoice}\nHuman won the round`)
    humanScore++;
  } else {
    alert(`Human: ${humanChoiche}\nComputer: ${computerChoice}\nComputer won the round`)
    computerScore++;
  }

  alert(`Human: ${humanScore}\nComputer: ${computerScore}`)
}

function endGame() {
  if (humanScore == computerScore) {
    alert("match over, draw")
    return
  }

  let end;
  if (humanScore > computerScore)
    end = "human"
  else if (computerScore > humanScore)
    end = "computer"

  alert(`Human: ${humanScore}\nComputer: ${computerScore}\n${end} won the game`)
}
