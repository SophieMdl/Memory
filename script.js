(function(){
	var score = 0;
	var champScore = document.querySelector('.score span');
	champScore.innerHTML = score;

	var myImg = new Image();

		myImg.src = 'images/apple.jpg';
	
	var cards = document.querySelectorAll(".card");
	var front = document.querySelectorAll(".front");
	var cardsLength = cards.length;
	var bgCards = [
		"images/apple.jpg",
		"images/flower.jpg",
		"images/moon.jpg",
		"images/flower.jpg",
		"images/moon.jpg",
		"images/apple.jpg"
	]
	var flippedCards = []

	function shuffle(tab) {
    	var j, x, i;
	    for (i = tab.length; i > 0; i--) {
	        j = Math.floor(Math.random() * i);
	        x = tab[i - 1];
	        tab[i - 1] = tab[j];
	        tab[j] = x;
	    }
	}
	shuffle(bgCards);

	function checkResult(){
	if(flippedCards[0].innerHTML == flippedCards[1].innerHTML){
			score++;
			champScore.innerHTML = score;
			flippedCards = []
		}
	}
	function addFlipped(target){
		if(!target.classList.contains('flipped')){
			target.classList.add('flipped');
			flippedCards.push(target);
			removeFlipped();
		}
	}
	function removeFlipped(){
			if (flippedCards.length > 2){
			flippedCards[0].classList.remove('flipped');
			console.log(flippedCards[0])
			flippedCards.shift();
			setTimeout(checkResult, 500);
		}
	}
	for (var i = 0 ; i < cardsLength ; i++){
		var bg = "url(" + bgCards[i] + ")";
		front[i].style.background = bg;
		cards[i].addEventListener('click', function(){
			addFlipped(this);
		});
	}

}());
					