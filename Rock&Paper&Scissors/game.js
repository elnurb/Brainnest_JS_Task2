const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;
 
    const playGame = () => {
        const rockBtn = document.querySelector('.rock');
        const paperBtn = document.querySelector('.paper');
        const scissorBtn = document.querySelector('.scissor');
        const playerOptions = [rockBtn,paperBtn,scissorBtn];
        const computerOptions = ['rock','paper','scissors']
         
        playerOptions.forEach(option => {
            option.addEventListener('click',function(){
 
                const movesLeft = document.querySelector('.movesleft');
                moves++;
                movesLeft.innerText = `Moves Left: ${10-moves}`;
                 

                const choiceNumber = Math.floor(Math.random()*3);
                const computerChoice = computerOptions[choiceNumber];
 
 
                winner(this.innerText,computerChoice)
                 
 
                if(moves == 10){
                    gameOver(playerOptions,movesLeft);
                }
            })
        })
         
    }
 
    const winner = (player,computer) => {
        const result = document.querySelector('.result');
        const playerScoreBoard = document.querySelector('.p-count');
        const computerScoreBoard = document.querySelector('.c-count');
        player = player.toLowerCase();
        computer = computer.toLowerCase();
        if(player === computer){
            result.innerHTML = 'Both selected.   It is a tie!';
        }
        else if(player === 'rock'){
            if(computer === 'scissors'){
                result.innerHTML = 'Rock beats the scissors. You win.';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
    
            }else{
                result.innerHTML = 'Paper covers the rock. You lose.';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }
        }
        else if(player === 'paper'){
        if(computer === 'rock'){
            result.innerHTML = 'Paper covers the rock. You win.';
            playerScore++;
            playerScoreBoard.textContent = playerScore;

        }else{
            result.innerHTML = 'Scissors cuts the paper. You lose.';
            computerScore++;
            computerScoreBoard.textContent = computerScore;

        }
        }
        else if(player === 'scissors'){
            if(computer === 'paper'){
                result.innerHTML = 'Scissors cuts the paper.  You win.';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }else{
                result.innerHTML = 'Rock beats the scissors. You lose.';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }
        }
    }
 
    const gameOver = (playerOptions,movesLeft) => {
 
        const chooseMove = document.querySelector('.move');
        const result = document.querySelector('.result');
        const reloadBtn = document.querySelector('.reload');
 
        playerOptions.forEach(option => {
            option.style.display = 'none';
        })
 
      
        chooseMove.innerText = 'Game Over!!'
        movesLeft.style.display = 'none';
 
        if(playerScore > computerScore){
            result.style.fontSize = '2rem';
            result.innerText = 'You Won The Game'
            result.style.color = '#308D46';
        }
        else if(playerScore < computerScore){
            result.style.fontSize = '2rem';
            result.innerText = 'You Lost The Game';
            result.style.color = 'red';
        }
        else{
            result.style.fontSize = '2rem';
            result.innerText = 'Tie';
            result.style.color = 'grey'
        }
        reloadBtn.innerText = 'Restart';
        reloadBtn.style.display = 'flex'
        reloadBtn.addEventListener('click',() => {
            window.location.reload();
        })
    }
    playGame();     
}
game();