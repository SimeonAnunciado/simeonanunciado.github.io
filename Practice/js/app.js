// Game Values
let min = 1,
	max = 10,
	winningNum = getRandom(min,max),
	guessLeft = 3;

// UI Elements
const game = document.querySelector('#game'),
	  minNum  = document.querySelector('.minNum'),
	  maxNum  = document.querySelector('.maxNum'),
	  guessBtn  = document.querySelector('#gameBtn'),
	  guessInput  = document.querySelector('#input'),
	  Message  = document.querySelector('#message');

// Assign Min and max

minNum.textContent = min;
maxNum.textContent = max;

// add event
	game.addEventListener('mousedown', function(e){
		if (e.target.classList.contains('play-again')) {
			window.location.reload();
		}
	})


	guessBtn.addEventListener('click',function(){
		let guess = parseInt(guessInput.value);
		// validate
		if (isNaN(guess) || guess<min || guess>max) {
			setMessage(`Please Enter a Number Between ${min} and ${max}`,'red')
			return false;
		}

		if (guess === winningNum) {
			gameOver(true,`The Winning number is : ${winningNum} YOU WIN!`);
		}else{
			// wrong answer
			// guessLeft = guessLeft -1;
			// short hand 
			   guessLeft -=1;
			   if (guessLeft === 0) {
			   		gameOver(false,`Game Over!, You Lost The winning number was ${winningNum}`);
			   }else{
					guessInput.style.borderColor = 'red';
					guessInput.value = '';
					setMessage(`${guess} is not Correct, ${guessLeft} guess left`,'red');
			   }
		}
	})
	function getRandom(min,max){
		return Math.floor(Math.random(min,max)*(max-min+1)+min);

	}
	function gameOver(won,msg){
		let color;
		won === true ? color = 'green' : color = 'red';
		// game over lost
		guessInput.disabled = true;
		// bordercolor if win
		guessInput.style.borderColor = color;

		message.style.color = color;
		// message
		setMessage(msg);

		// play again?
		guessBtn.value ='Play Again?';
		// append class since already have a class
		guessBtn.className +=' play-again';
	}

	function setMessage(msg,color){
		message.textContent = msg;
		message.style.color= color;
	}
