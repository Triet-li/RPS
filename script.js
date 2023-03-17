function getComputerChoice()
{
    let choices = ["rock", "paper", "scissors"];
    let randomValue = Math.floor(Math.random() * 3);

    return choices[randomValue];
}

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

function game()
{
    alert("Welcome to Rock, Paper Scissors game, you're gonna fight against a computer. Be prepared!!");
    let playerScore = 0;
    let computerScore = 0;
    let rounds = Number(prompt("How many rounds do you want to play? "));
    let playerSection, computerSection;
    let result;

    for(let i = 1; i <= rounds; ++i)
    {
        computerSection = getComputerChoice();
        playerSection = prompt("Rock, Paper or Scissors: ");
        result = playRound(playerSection, computerSection);
        if(result === 1)
        {
            console.log(`You win!! ${playerSection} beats ${computerSection}`);
            ++playerScore;
        }
        else if(result === -1)
        {
            console.log(`You lose!! ${playerSection} is beaten by ${computerSection}`);
            ++computerScore;
        }
        else if(result === 0)
            console.log("A tie!!!");
    }

    if(playerScore > computerScore)
        alert("You Win!! Congratulation!!");
    else if(playerScore < computerScore)
        alert("You lose!! Good luck next time @-@");
    else
        alert("A tie?? So boring!!");
}

game();