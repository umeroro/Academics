let score = JSON.parse(localStorage.getItem('score'))
    || {
      wincount : 0,
      losecount : 0,
      tiecount : 0
    };

    upadteScore();

    /*
    if (!score) {
      score = {
        wincount : 0,
        losecount : 0,
        tiecount : 0
      };
    }
    */

    // player move function
    function playerMove(move) {
      //compNum catch the return and this function run
      const compNum = pickcompmove(); 
      let result = '';
      //check the player move then give the final result
      if (move === 'scissors') {
        if (compNum === 'rock') {
          result = 'Lose';
        } else if (compNum === 'paper') {
          result = 'Win';
        } else if (compNum === 'scissors') {
          result = 'Tie';
        }
      } else if (move === 'paper') {
        if (compNum === 'rock') {
          result = 'Win';
        } else if (compNum === 'paper') {
          result = 'Tie';
        } else if (compNum === 'scissors') {
          result = 'Lose';
        }
      } else if (move === 'rock') {
        if (compNum === 'rock') {
          result = 'Tie';
        } else if (compNum === 'paper') {
          result = 'Lose';
        } else if (compNum === 'scissors') {
          result = 'Win';
        }
      }

      if (result === 'Win'){
        score.wincount+=1;
      } else if (result === 'Lose') {
        score.losecount+=1;
      } else if (result === 'Tie') {
        score.tiecount+=1;
      }

      localStorage.setItem('score', JSON.stringify (score));

      //display the result
      document.querySelector('.js-displayResult')
      .innerHTML = `You ${result}`;
      //display the Move
      document.querySelector('.js-Move')
      .innerHTML = `You 
        <img src="images/${move}-emoji.png" class="click-icon">
        Computer
        <img src="images/${compNum}-emoji.png" class="click-icon">`;
      
      upadteScore();
    }

    //update function
    function upadteScore(){
      document.querySelector('.js-score')
        .innerHTML = `Win : ${score.wincount} , Lose : ${score.losecount} , Tie : ${score.tiecount}`;
    }

    //computer pick the move
    function pickcompmove () {
      let compNum = '';
      const randNum = Math.random();
      if (randNum >= 0 && randNum < 1/3) {
        compNum = 'rock';
      } else if (randNum >= 1/3 && randNum < 2/3) {
        compNum = 'paper';
      } else if (randNum >= 2/3 && randNum < 1) {
        compNum = 'scissors';
      }
      //after pick the move return it.
      return compNum;
    }