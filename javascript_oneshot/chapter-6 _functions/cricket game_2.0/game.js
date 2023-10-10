// its is purly using if else condition game using boolean  datatype // logical operators // if // Else if // else etc


// use function () for shorter the game code



function generatecomputerChoice(){
    //This will generate random number between 0 and 3
  let randomNumber = Math.random() * 3;
  if (randomNumber > 0 && randomNumber <= 1) {
    choice = 'Bat';
    // console.log('computer choice is Bat');
  } else if (randomNumber > 1 && randomNumber <= 2) {
    choice = 'Ball';
    // console.log('computer choice is Ball');
  } else {
    choice = 'Stump'
    // console.log('computer choice is Stump');
  }
  return choice;
}

function getResult(userMove , computerMove){
  let resultMsg;
     if (userMove === "bat"){
      if (computerMove === 'Ball') {
        return `User won.`;
      } else if (computerMove === 'Bat') {
        return `It's a tie`;
      } else if (computerMove === 'Stump') {
        return `Computer has won`;
      }
     } else if (userMove === "ball"){
      if (computerMove === 'Ball') {
        return `It's a tie`;
      } else if (computerMove === 'Bat') {
        return `Computer has won`;
      } else if (computerMove === 'Stump') {
        return `User won.`;
      }
     } else {
      if (computerMove === 'Ball') {
        return `Computer has won`;
      } else if (computerMove === 'Bat') {
        return `User won.`;
      } else if (computerMove === 'Stump') {
        return `It's a tie`;
      }
     }
}
function showResult(userMove,computerChoice,resultMsg){
  alert(`You have chosen ${userMove}. Computer choice is ${computerChoice} and ${resultMsg}`);
}