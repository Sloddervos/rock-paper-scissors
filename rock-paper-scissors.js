
function computerPlay(){
    let strings = ['rock', 'paper', 'scissors'];
    let string = (strings[Math.floor(Math.random() * strings.length)]);

    return string;
}


function singleRound(playerSelection, computerSelection){
computerSelection = computerPlay();
resultsDiv.textContent = '';
if (playerSelection === 0){
    playerSelection = prompt("make your choice");
}


if (playerSelection === null){
    resultsDiv.textContent = 'game cancelled';
    return;
}

playerSelection = playerSelection.toLowerCase();

while (playerSelection !== 'rock' && playerSelection !== 'scissors' && playerSelection !== 'paper') {
    resultsDiv.textContent = '';
    playerSelection = prompt('not an acceptable string, try again');
    playerSelection = playerSelection.toLowerCase();
}



if (playerSelection === computerSelection)
    {
    resultsDiv.textContent = ('Tie, ' + computerSelection + ' ties ' + playerSelection);
    return 3; 
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'scissors' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'rock')
    {
        resultsDiv.textContent =  ('You win! ' + playerSelection + ' beats ' + computerSelection);
        return 1;
    }
    else
    {
        resultsDiv.textContent = ('You lose! ' + computerSelection + ' beats ' + playerSelection);
        return 2;
    }


}
// logic to play 5 rounds and keep track of score
let x = 0;
let y = 0;

function game(value){
   

    
        var result = singleRound(value);
       if (result === 1){
           x++;
           resultsDiv.textContent += (' ' +x + ' - ' + y)
       }
       else if (result === 2){
           y++;    
           resultsDiv.textContent += (' ' + x + ' - ' + y)
       }
       else if (result === 3){
           x = x + .5;
           y = y + .5;
           resultsDiv.textContent += (' ' + x + ' - ' + y)
 }
 
 if (x + y === 5) {
    resultsDiv.textContent += (' Final result is ' + x + ' - ' + y)
    x = 0;
    y = 0;
    }
      
      

}






// this is to create a div
const body = document.body
const div = document.createElement('div')
// Underneath here I'm adding buttons
const buttonOne = document.createElement('button')
const buttonTwo = document.createElement('button')
const buttonThree = document.createElement('button') 

// Creating another div to display results
const resultsDiv = document.createElement('div')


// here I add two class attributes, one to style the buttons and the resultsdiv 
//  and another to style the container div 
buttonOne.setAttribute('class', 'buttonStyles')
buttonTwo.setAttribute('class', 'buttonStyles')
buttonThree.setAttribute('class', 'buttonStyles')
resultsDiv.setAttribute('class', 'buttonStyles')
resultsDiv.setAttribute('id', 'resultsDivStyles')
div.setAttribute('class', 'container')


// here I want to add textcontent to my buttons
buttonOne.textContent = 'rock'
buttonTwo.textContent = 'paper'
buttonThree.textContent = 'scissors'

// here I'm appending the newly created elements to the body and div respectively
body.append(div)
div.append(buttonOne, buttonTwo, buttonThree, resultsDiv)


// here i want to add an event listener for when the buttons are clicked, need to make it
// so that each button has a unique eventlistener that sends the corresponding text value
// through to the function

buttonOne.addEventListener('click', () => {
  singleRound('rock');
  game('rock');
});

buttonTwo.addEventListener('click', () => {
    singleRound('paper');
    game('paper');
  });
  buttonThree.addEventListener('click', () => {
    singleRound('scissors');
    game('paper');
  });
    



