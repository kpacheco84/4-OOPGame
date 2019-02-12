/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
	constructor() {
		this.missed = 0
		this.activePhrase = null
		this.phrases = this.createPhrase();
	}
	/**

	 *  Creates phrases for use in game 

	 * @return {array} An array of phrases that could be used in the game 

	 */
	createPhrase() {
		const phrases = [];
		phrases.push(new Phrase('First play a game'));
		phrases.push(new Phrase('Three strikes ur out'));
		phrases.push(new Phrase('Thirthy seconds'));
		phrases.push(new Phrase('Fourth of july'));
		return phrases;
	}
	/**

	* Selects random phrase from phrases property

	* @return {Object} Phrase object chosen to be used

	*/
	getRandomPhrase() {
		const randNum = Math.floor(Math.random() * this.phrases.length);
		const randPhrase = this.phrases[randNum];
		return randPhrase;
	}
}