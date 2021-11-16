
function computerPlay(){
    let strings = ['rock', 'paper', 'scissors'];
    let string = (strings[Math.floor(Math.random() * strings.length)]);

    return string;
}


function singleRound(playerSelection, computerSelection){
computerSelection = computerPlay();
playerSelection = prompt("make your choice");



if (playerSelection === null){
    console.log('game cancelled');
    return;
}

playerSelection = playerSelection.toLowerCase();

while (playerSelection !== 'rock' && playerSelection !== 'scissors' && playerSelection !== 'paper') {
    console.log();
    playerSelection = prompt('not an acceptable string, try again');
    playerSelection = playerSelection.toLowerCase();
}



if (playerSelection === computerSelection)
    {
    console.log('Tie, ' + computerSelection + ' ties ' + playerSelection);
    return 3; 
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'scissors' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'rock')
    {
        console.log ('You win! ' + playerSelection + ' beats ' + computerSelection);
        return 1;
    }
    else
    {
        console.log('You lose! ' + computerSelection + ' beats ' + playerSelection);
        return 2;
    }


}


function game(){
    let x = 0;
    let y = 0;

    for (let i = 0; i < 5; i++) {

        var result = singleRound();
       if (result === 1){
           x++;
           console.log(x + ' - ' + y);
       }
       else if (result === 2){
           y++;    
           console.log(x + ' - ' + y);
       }
       else if (result === 3){
           x = x + .5;
           y = y + .5;
           console.log(x + ' - ' + y);

       }
       else {
           i = 5;
           
       }
       
      
      

       

}
return 'final result is ' + x + ' - ' + y;  
}