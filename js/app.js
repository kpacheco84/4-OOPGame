/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
//start game button
let game;
document.getElementById('btn__reset').addEventListener('click', function() {
	game = new Game();
	game.startGame();
});
//handle when user clicks keyboard
const keyboard = document.querySelector('#qwerty');
const keys = document.querySelectorAll('#qwerty .keyrow button');
keyboard.addEventListener('click', (e) => {
	game.handleInteraction(e.target);
});
document.addEventListener('keydown', (e) => {
	if (e.which === 13 && overlay.style.display !== 'none') {
		$('#overlay').fadeToggle('slow', () => start());
	}
	for (let i = 0; i < keys.length; i++) {
		if (e.key === keys[i].textContent) {
			if (keys[i].classList.contains('wrong')) {
				e.preventDefault();
			} else {
				game.handleInteraction(keys[i]);
			}
		}
	}
});