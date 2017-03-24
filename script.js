(function(){
	var numberCaught = 0;
	var caughtField = document.querySelector('.caught');
	var timeField = document.querySelector('.time');
	var plateau = document.querySelector("#plateau")
	var btnReset = document.querySelector(".reset")
	var flippedCards = [];
	var card, front, bg;
	var j, x, i;
	var cards;
	var seconds =0;

	setInterval(function(){seconds++;}, 1000);
/*	var menu = document.querySelector("#menu");*/
/*	var cardsLength = cards.length;*/
	btnReset.addEventListener("click", reset);
	$("#menu").hide();

	var bgCards = [
		"images/charmander.svg",
		"images/pikachu.svg",
		"images/squirtle.svg",
		"images/snorlax.svg",
		"images/charmander.svg",
		"images/pikachu.svg",
		"images/squirtle.svg",
		"images/snorlax.svg",
		"images/eevee.svg",
		"images/eevee.svg",
		"images/meowth.svg",
		"images/meowth.svg"
	]
	var bgCardsLength = bgCards.length;
	shuffle(bgCards);

	//Création de chaque carte avec un front particulier et ajout d'un écouteur au clic
	for(var i = 0 ; i < bgCardsLength ; i++){
		card = document.createElement("div");
		card.setAttribute("class","card");
		card.innerHTML = "<figure class='back'></figure><figure class='front'></figure>";
		plateau.appendChild(card);
		front = card.childNodes[1];
	 	bg = "url(" + bgCards[i] + ") no-repeat";
	 	front.style.background = bg;
		card.addEventListener('click', function(){
	 		addFlipped(this);
	 	});
	}
	function reset(){
		cards = document.querySelectorAll(".card");
		for(var u = 0 ; u < cards.length; u++){
			cards[u].classList.remove('flipped');
		}
		$("#menu").fadeOut("fast");
		numberCaught = 0;
		caughtField.innerHTML = numberCaught;
	}

	function shuffle(tab) {
	    for (i = tab.length; i > 0; i--) {
	        j = Math.floor(Math.random() * i);
	        x = tab[i - 1];
	        tab[i - 1] = tab[j];
	        tab[j] = x;
	    }
	}

	function addFlipped(target){
		if(!target.classList.contains('flipped')){
			target.classList.add('flipped');
			flippedCards.push(target);
			if(flippedCards.length > 1){
				removeFlipped();
			}
		}
	}

	function removeFlipped(){
			if (flippedCards.length > 2){
			flippedCards[0].classList.remove('flipped');
			flippedCards.shift();
		}
		checkResult();
	}
	
	function checkResult(){
		if(flippedCards[0].innerHTML == flippedCards[1].innerHTML){
				numberCaught++;
				caughtField.innerHTML = numberCaught;
				flippedCards = [];
				if(numberCaught == bgCardsLength/2){
					$("#menu").fadeIn("fast");
					timeField.innerHTML = seconds;
				}
		}
	}
}());
				