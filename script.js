let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget(){
   return  Math.floor(Math.random() *9);  
}

//console.log(generateTarget());
function compareGuesses(humanGuess, computerGuess, targetGuess){
var humandiff = Math.abs(targetGuess-humanGuess);
var computerdiff = Math.abs(targetGuess-computerGuess);
if(humandiff <= computerdiff){
  return true
}
else{
  return false
}
}
//console.log(compareGuesses(9,8,10));
function updateScore(winner){
if(winner ==='human'){
  humanScore++;

}else  if(winner ==='computer'){
  computerScore++;
}
}
//console.log(updateScore('human'))
//console.log(humanScore);
function advanceRound()
{
  return currentRoundNumber++;
}

console.log(advanceRound());
console.log(updateScore('human'))