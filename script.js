function getComputerChoice()
{
    let choices = ["rock", "paper", "scissors"];
    let randomValue = Math.floor(Math.random() * 3);

    return choices[randomValue];
}


let playerScore = 0;
let computerScore = 0;

function playRound(playerSection, computerSection)
{
    let player = playerSection.toLowerCase();
    let computer = computerSection.toLowerCase();

    if( (player === "rock" && computer === "scissors") || (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper"))
    {
       
        return 1;
    }
    else if( (player === "rock" && computer === "paper") || (player === "paper" && computer === "scissors") ||
    (player === "scissors" && computer === "rock"))
    {
       
        return -1;
    }
    if( (player === "rock" && computer === "rock") || (player === "scissors" && computer === "scissors") ||
    (player === "paper" && computer === "paper"))
    {
        return 0;
    }
   
}

function handleButtonClicked(event) {
    let playerSection = event.target.textContent;
    let computerSection = getComputerChoice();
    const result = playRound(playerSection, computerSection);
    const roundResult = document.createElement('div');
    const body = document.querySelector('body');

    

    if (result === 1) {
        roundResult.textContent = `You win this round!! ${playerSection} beats ${computerSection}`;
        ++playerScore;
        roundResult.style.cssText = "text-align: center";
        body.appendChild(roundResult);
      } else if (result === -1) {
        roundResult.textContent = `You lose this round!! ${playerSection} is beaten by ${computerSection}`;
        ++computerScore;
        roundResult.style.cssText = "text-align: center";
        body.appendChild(roundResult);

      } else {
        roundResult.textContent = "A tie for this round!";
        roundResult.style.cssText = "text-align: center";
        body.appendChild(roundResult);

      }
      document.querySelector('.yourScore').innerHTML = `Your score: ${playerScore}`;
    document.querySelector('.myScore').innerHTML = `My score: ${computerScore}`;

    if(playerScore === 5 || computerScore === 5) {
        if(playerScore > computerScore)
        {
            let result = prompt("You win!! Wanna play again champion? ");
            if(result != null)
                window.location.reload();
        }
        else
        {
            let result = prompt("Ahh you loser!! Want a rematch? ");
            if(result != null)
                window.location.reload();
        }
    }
        
}

   // buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', handleButtonClicked);
});

