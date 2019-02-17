/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
	constructor(phrase) {
		this.phrase = phrase.toLowerCase();
	}
	addPhraseToDisplay() {
		const hideDiv = document.querySelectorAll('#phrase');
		const letters = this.phrase.length;
		const li = document.createElement('li');
		// append li to ul 
		// add each letter to console
		for (let i = 0; i < this.phrase.length; i++) {
			this.phrase[i].split('');
			const li = document.createElement('li');
			li.textContent = this.phrase[i];
			if (this.phrase[i] === ' ') {
				li.className = `space`;
			} else {
				li.className = `hide letter ${this.phrase[i]}`;
			}
			const phraseDiv = document.getElementById('phrase');
			phraseDiv.querySelector('ul').appendChild(li);
		}
	}
	/**

	     * checks a users chosen letter against the phrase

	     * @param {string} letter - letter to be checked

	     */
	checkLetter(letter) {
		let ltrExists = false
		let phrase = this.phrase.split('');
		phrase.filter(letters => {
			if (letters === letter) {
				this.showMatchedLetter(letter);
				ltrExists = true;
			}
		});
		return ltrExists;
	}
	/**

	 * shows chosen letter if it is in the phrase

	 * @param {string}  letter - letter to be displayed

	 */
	showMatchedLetter(letter) {
		//select all select all of the letter DOM elements that have a 
		//CSS class name that matches the selected letter and
		//replace each selected element's `hide` CSS class with the `show` CSS class.
		const list = document.querySelectorAll('.hide');
		list.forEach(el => {
			if (el.textContent === letter) {
              // show letter adding a blinking effect
				$(el).addClass("show").fadeIn(100).fadeOut(100).fadeIn(100);
				
				
			}
		});
	}
};