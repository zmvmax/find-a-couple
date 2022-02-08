'use strict';
let images = [];
let randomArray = [];

let easyTurns = 0;
let mediumTurns = 0;
let hardTurns = 0;
let firstCard;
let secondCard;
let thirdCard;
let forthCard;

let timeout;
	
let playField = document.querySelector('.playField');
for(let i = 1;i <= 30; i++){
	images.push(String(i) + '.jpg');
}
function generateWithDifficulty(){
	if(easyDifficulty)
		makeArrayForEasyDifficulty();
	else if(mediumDifficulty)
		makeArrayForMediumDifficulty();
	else
		makeArrayForHardDifficulty();
}
function generateWitSize(){
	if(smallField)
		makeArrayForEasyDifficulty();
	else if(normalField)
		makeArrayForMediumDifficulty();
	else
		makeArrayForHardDifficulty();
}

function makeArrayForEasyDifficulty(){
	for(let i = 1;i <= 6; i++){
		randomArray.push(images[checkForUnique(getRandomNumber(0,29))]);
	}
	let clonedArray = randomArray;
	let doubledRandomArray = randomArray.concat(clonedArray);
	shuffle(doubledRandomArray);
	buildField(doubledRandomArray);
	setEvents();
}
function makeArrayForMediumDifficulty(){
	for(let i = 1;i <= getRandomNumber(10,30); i++){
		randomArray.push(images[checkForUnique(getRandomNumber(0,29))]);
	}
	let clonedArray = randomArray;
	let doubledRandomArray = randomArray.concat(clonedArray);
	let tripledRandomArray = doubledRandomArray.concat(clonedArray);
	shuffle(tripledRandomArray);
	buildField(tripledRandomArray);
	setEvents();
}
function makeArrayForHardDifficulty(){
	for(let i = 1;i <= getRandomNumber(10,20); i++){
		randomArray.push(images[checkForUnique(getRandomNumber(0,29))]);
	}
	let clonedArray = randomArray;
	let doubledRandomArray = randomArray.concat(clonedArray);
	let tripledRandomArray = doubledRandomArray.concat(clonedArray);
	let quadrupleRandomArray = tripledRandomArray.concat(clonedArray);
	console.log(quadrupleRandomArray);
	shuffle(quadrupleRandomArray);
	buildField(quadrupleRandomArray);
	setEvents();
}
function buildField(array){
	for(let i = 0;i < array.length;i++){
		playField.innerHTML += '<img src="img/' + array[i] + '" class="closed bordered size">';
	}
}
function shuffle(array) {
  	for (let i = array.length - 1; i > 0; i--) {
    	let j = Math.floor(Math.random() * (i + 1)); 
    	[array[i], array[j]] = [array[j], array[i]];
  	}
}
function getRandomNumber(min,max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
function checkForUnique(number){	
	console.log(number);
	if(randomArray.includes(images[number])){
		return checkForUnique(getRandomNumber(0,29));
	}
	else
		return number;
}

function setEvents(){
	playField = document.querySelector('.playField');
	for(let i = 0; i < playField.childElementCount;i++){
		playField.children[i].addEventListener('click',function(){
				playField.children[i].classList.toggle('opened');
				playField.children[i].classList.toggle('closed');
				if(easyDifficulty)
					compareCardsForEasy(playField.children[i]);
				else if(mediumDifficulty)
					compareCardsForMedium(playField.children[i]);
				else
					compareCardsForHard(playField.children[i]);
		});
	}
}
function compareCardsForEasy(elem){
	if(easyTurns == 0){
		firstCard = elem;
	}
	if(easyTurns == 1){
		secondCard = elem;
		playField.style.pointerEvents = 'none';
		if(firstCard.src == secondCard.src){
			firstCard.classList.toggle('hide');
			secondCard.classList.toggle('hide');
			easyTurns = 0;
			playField.style.pointerEvents = 'auto';
			return;
		}
		else{
			timeout = setTimeout(closeCardsForEasy,500);
			easyTurns = 0;
			return;
		}
	}
	easyTurns++;
}
function compareCardsForMedium(elem){
	if(mediumTurns == 0){
		firstCard = elem;
	}
	if(mediumTurns == 1){
		secondCard = elem;
	}
	if(mediumTurns == 2){
		thirdCard = elem;
		playField.style.pointerEvents = 'none';
		if(firstCard.src == secondCard.src && firstCard.src == thirdCard.src){
			firstCard.classList.toggle('hide');
			secondCard.classList.toggle('hide');
			thirdCard.classList.toggle('hide');
			mediumTurns = 0;
			playField.style.pointerEvents = 'auto';
			return;
		}
		else{
			timeout = setTimeout(closeCardsForMedium,500);
			mediumTurns = 0;
			return;
		}
	}
	mediumTurns++;
}
function compareCardsForHard(elem){
	if(hardTurns == 0){
		firstCard = elem;
	}
	if(hardTurns == 1){
		secondCard = elem;
	}
	if(hardTurns == 2){
		thirdCard = elem;
	}
	if(hardTurns == 3){
		forthCard = elem;
		playField.style.pointerEvents = 'none';
		if(firstCard.src == secondCard.src && firstCard.src == thirdCard.src && firstCard.src == forthCard.src){
			firstCard.classList.toggle('hide');
			secondCard.classList.toggle('hide');
			thirdCard.classList.toggle('hide');
			forthCard.classList.toggle('hide');
			hardTurns = 0;
			return;
		}
		else{
			timeout = setTimeout(closeCardsForHard,500);
			hardTurns = 0;
			return;
		}
	}
	hardTurns++;
}

function closeCardsForEasy(){
	firstCard.classList.toggle('opened');
	secondCard.classList.toggle('opened');
	firstCard.classList.toggle('closed');
	secondCard.classList.toggle('closed');
	playField.style.pointerEvents = 'auto';
	clearInterval(this);
}
function closeCardsForMedium(){
	firstCard.classList.toggle('opened');
	secondCard.classList.toggle('opened');
	thirdCard.classList.toggle('opened');
	firstCard.classList.toggle('closed');
	secondCard.classList.toggle('closed');
	thirdCard.classList.toggle('closed');
	playField.style.pointerEvents = 'auto';
	clearInterval(this);
}
function closeCardsForHard(){
	firstCard.classList.toggle('opened');
	secondCard.classList.toggle('opened');
	thirdCard.classList.toggle('opened');
	forthCard.classList.toggle('opened');
	firstCard.classList.toggle('closed');
	secondCard.classList.toggle('closed');
	thirdCard.classList.toggle('closed');
	forthCard.classList.toggle('closed');
	playField.style.pointerEvents = 'auto';
	clearInterval(this);
}