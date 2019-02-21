/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
	constructor() {
		this.missed = 0
		this.activePhrase = null
		this.phrases = this.createPhrase();
	};
	/**

	 *  Creates phrases for use in game 

	 * @return {array} An array of phrases that could be used in the game 

	 */
	createPhrase() {
		const phrases = [];
		phrases.push(new Phrase('Blessed are the pure in heart for they will see God'));
		phrases.push(new Phrase('But as for me and my household we will serve the Lord'));
		phrases.push(new Phrase('Now faith is confidence in what we hope for and assurance about what we do not see'));
		phrases.push(new Phrase('I can do all this through him who gives me strength'));
		return phrases;
	};
	/**

	* Selects random phrase from phrases property

	* @return {Object} Phrase object chosen to be used

	*/
	getRandomPhrase() {
		const randNum = Math.floor(Math.random() * this.phrases.length);
		const randPhrase = this.phrases[randNum];
		return randPhrase;
	};
	startGame() {
		this.resetGame();
		document.getElementById('overlay').style.display = 'none';
		this.activePhrase = this.getRandomPhrase();
		this.activePhrase.addPhraseToDisplay();
	}
	handleInteraction(button) {
		if (button.tagName === 'BUTTON') {
			// capture the chosen letter
			let letter = button.textContent;
			button.setAttribute('disabled', true);
			// match letter against the phrase
			let checkedLetter = this.activePhrase.checkLetter(letter);
			if (!checkedLetter) {
				this.removeLife();
				button.className = 'wrong'
			} else {
				
				button.className = 'chosen'
			}
			//check for a win
			
		}
		if (this.checkForWin() == true) { //check if the user has won

			this.gameOver(true); //call the gamewon is equal to true
 
		} 
 
	
	}
	/**

	 * Check for a game win

	 * @return {boolean} 

	 */
	checkForWin() {
		//check if all the letters are revealed
		let hidden = document.getElementsByClassName('hide').length;
		console.log(hidden);
		if (hidden === 0) {
			this.gameOver();
			//return true
		} 
	}
	/**

	 * Removes a life from the life counter

	 */
	removeLife() {
		// increase the missed variable by one
		this.missed += 1;
		// changes heart image
		let hearts = document.querySelectorAll('.tries img');
         // added effect to blink hearts when they are about to lose one
		$(hearts).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
		hearts[this.missed - 1].src = 'images/lostHeart.png';
		if (this.missed === 5) {
		
			this.gameOver();
		}
	}
	/**

	 * Ends the game

	 * @returns {boolean} gameWon - whether or not a user has won or lost

	 */
	gameOver() {
		let phrase = document.querySelectorAll('.hide');
		let overlay = document.querySelector('#overlay');
		let msg = document.querySelector("#game-over-message");
		//displays the original overlay
		overlay.style.display = 'block';
		//changes the overlays start class to either class win or class lose
		if (phrase.length === 0) {
			msg.textContent = "YOU WIN!"
			overlay.className = "win"
		} else {
			msg.textContent = "SORRY! Better Luck Next Time!"
			overlay.className = "lose"
		}
	}
	// Reset the game
	resetGame() {
		let li = document.querySelectorAll('#phrase ul li');
		let ul = document.querySelector('#phrase ul');
		for (ul of li) {
			ul.remove(li);
		}
		let key = document.querySelectorAll('#qwerty .keyrow button');
		for (let i = 0; i < key.length; i++) {
			key[i].removeAttribute('disabled');
			key[i].className = 'key';
		}
		let hearts = document.querySelectorAll('.tries img');
		hearts.forEach(life => life.src = 'images/liveHeart.png')
	}
}