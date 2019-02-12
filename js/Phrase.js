/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
	constructor(phrase) {
		this.phrase = phrase.toLowerCase();
	}
	/*<div id="phrase" class="section">
	    <ul>
	        <li class="hide letter h">h</li>
	        <li class="hide letter o">o</li>
	        <li class="hide letter w">w</li>
	        <li class="space"> </li>
	        <li class="hide letter a">a</li>
	        <li class="hide letter r">r</li>
	        <li class="hide letter e">e</li>
	        <li class="space"> </li>
	        <li class="hide letter y">y</li>
	        <li class="hide letter o">o</li>
	        <li class="hide letter u">u</li>
	    </ul>
	</div>



	const pageNum = (Math.ceil(list / 10));
	const ul = document.createElement('ul');
	const div = document.createElement('div');
	div.className = 'pagination';
	const pageDiv = document.querySelector('.page');
	pageDiv.appendChild(div);
	let pages = 0;
	div.appendChild(ul);
	//loop to add the needed page numbers to the page
	for (i = 1; i <= pageNum; i += 1) {
		pages += 1;
		const li = document.createElement('li');
		ul.appendChild(li);
		const a = document.createElement("a");
		a.textContent = pages;
		li.appendChild(a);
		a.href = '#';
		//set 1st page to active on load
		let initialPage = document.querySelector('a').className = 'active';
	*/
	addPhraseToDisplay() {
		const hideDiv = document.querySelectorAll('#phrase');
        const letters = this.phrase.length;
        
		// working to append to ul 
		//working to add each letter to console
		for (var i = 0; i < letters; i += 1) {
            
			if (this.phrase[i] !== '') {
               
                $("#phrase ul").append("<li>", this.phrase[i], "</li>")
                $("#phrase li[i]").addClass(`hide letter ${this.phrase[i]}`); 

            
            }
                else{
                    $("#phrase ul").append("<li>", this.phrase[i], "</li>");
                    $("#phrase li[i]").addClass('space');
				}
            }
            
        }
        
	}
