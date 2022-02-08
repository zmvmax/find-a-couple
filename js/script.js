'use strict';

let gameInfoWrap = document.querySelector('.gameInfoWrap');
let chooseModeWrap = document.querySelector('.chooseModeWrap');
let chooseTypeWrap = document.querySelector('.chooseTypeWrap');
let chooseSizeWrap = document.querySelector('.chooseSizeWrap');
let chooseDifficultyWrap = document.querySelector('.chooseDifficultyWrap');

let countdownTimerMode = false;
let calculationDurationMode = false;
let easyDifficulty = false;
let mediumDifficulty = false;
let hardDifficulty = false;
let smallField = false;
let normalField = false;
let bigField = false;

let removeGameInfo = document.querySelector('.removeGameInfo');
removeGameInfo.addEventListener('click',function(){
	gameInfoWrap.classList.toggle('off');
	chooseModeWrap.classList.toggle('off');
});

let mode1 = document.querySelector('.mode1');
let mode2 = document.querySelector('.mode2');
mode1.addEventListener('click',function(){
	mode2.checked = false;
});
mode2.addEventListener('click',function(){
	mode1.checked = false;
});
let removeChooseMode = document.querySelector('.removeChooseMode');
removeChooseMode.addEventListener('click',function(){
	if(checkOfTwoRadios(mode1,mode2)){
		if(mode1.checked)
			countdownTimerMode = true;
		else
			calculationDurationMode = true;

		chooseModeWrap.classList.toggle('off');
		chooseTypeWrap.classList.toggle('off');
	}
});

let type1 = document.querySelector('.type1');
let type2 = document.querySelector('.type2');
type1.addEventListener('click',function(){
	type2.checked = false;
});
type2.addEventListener('click',function(){
	type1.checked = false;
});
let getChosenType = document.querySelector('.getChosenType');
getChosenType.addEventListener('click',function(){
	if(checkOfTwoRadios(type1,type2)){
		chooseTypeWrap.classList.toggle('off');
		if(type1.checked)
			chooseSizeWrap.classList.toggle('off');
		else
			chooseDifficultyWrap.classList.toggle('off');
	}
});

let difficulty1 = document.querySelector('.difficulty1');
let difficulty2 = document.querySelector('.difficulty2');
let difficulty3 = document.querySelector('.difficulty3');
difficulty1.addEventListener('click',function(){
	difficulty2.checked = false;
	difficulty3.checked = false;
});
difficulty2.addEventListener('click',function(){
	difficulty1.checked = false;
	difficulty3.checked = false;
});
difficulty3.addEventListener('click',function(){
	difficulty1.checked = false;
	difficulty2.checked = false;
});
let getChosenDifficulty = document.querySelector('.getChosenDifficulty');
getChosenDifficulty.addEventListener('click',function(){
	if(checkOfThreeRadios(difficulty1,difficulty2,difficulty3)){
		chooseDifficultyWrap.classList.toggle('off');
		if(difficulty1.checked)
			easyDifficulty = true;
		else if(difficulty2.checked)
			mediumDifficulty = true;
		else
			hardDifficulty = true;

		generateWithDifficulty();
	}
});

let size1 = document.querySelector('.size1');
let size2 = document.querySelector('.size2');
let size3 = document.querySelector('.size3');
size1.addEventListener('click',function(){
	size2.checked = false;
	size3.checked = false;
});
size2.addEventListener('click',function(){
	size1.checked = false;
	size3.checked = false;
});
size3.addEventListener('click',function(){
	size1.checked = false;
	size2.checked = false;
});
let getChosenSize = document.querySelector('.getChosenSize');
getChosenSize.addEventListener('click',function(){
	if(checkOfThreeRadios(size1,size2,size3)){
		chooseSizeWrap.classList.toggle('off');
		if(size1.checked)
			smallField = true;
		else if(size2.checked)
			normalField = true;
		else
			bigField = true;

		generateWithSize();
	}
});


function checkOfTwoRadios(argument1,argument2){
	if(!argument1.checked && !argument2.checked) {
		alert('Вы ничего не выбрали!');
		return false;
	}
	else
		return true;
}
function checkOfThreeRadios(argument1,argument2,argument3){
	if(!argument1.checked && !argument2.checked && !argument3.checked) {
		alert('Вы ничего не выбрали!');
		return false;
	}
	else
		return true;
}