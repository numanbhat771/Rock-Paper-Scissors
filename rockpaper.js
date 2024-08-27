const score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
 };
    updateScoreElement();   

     function playGame(playerMove) {
     const computerMove = pickComputerMove();
                
    let result ='';
         if (playerMove === 'Scissors') {
            if(computerMove === 'Rock'){
                result = 'you lose';
            }else if(computerMove === 'Paper') {
             result = 'you win';
             } else if(computerMove === 'Scissors'){
                result = 'tie';
 }

        }else if (playerMove === 'paper') {
            if(computerMove === 'Rock'){
                    result = 'you win';
                }else if(computerMove === 'Paper') {
                    result = 'tie';
                } else if(computerMove === 'Scissors'){
                    result = 'you lose';
        }

            } else if(playerMove === 'rock') {
                if(computerMove === 'Rock'){
                result = 'tie';
            }else if(computerMove === 'Paper') {
                result = 'you lose';
            } else if(computerMove === 'Scissors'){
                result = 'you win';
            }
            }

            if(result === 'you win') {
                score.wins += 1;

            }else if(result === 'you lose') {
                score.losses += 1;
            }else if(result === 'tie') {
                score.ties +=1;
            }
            
            localStorage.setItem('score', JSON.stringify(score));    //save the score in local storage
            updateScoreElement();

            document.querySelector('.js-result').innerHTML = result;
            document.querySelector('.js-moves').innerHTML = `You 
                <img src="images/${playerMove}-emoji.png" class="move-icon">
                <img src="images/${computerMove}-emoji.png" class="move-icon">
                Computer`;


       
}

    function updateScoreElement() {
        document.querySelector('.js-score')
        .innerHTML = `wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`;
    }

        
function pickComputerMove() {
            const randomNumber = Math.random();
                    let computerMove ='';   

                    if(randomNumber >= 0 && randomNumber < 1 / 3){
                    computerMove ='Rock';
                    }
                    else if(randomNumber >= 1 / 3 && randomNumber < 2 / 3){
                        computerMove ='Paper';
                    }
                    else if(randomNumber >= 2 / 3 && randomNumber < 1){
                        computerMove ='Scissors';
                    }
                    return computerMove;
        }