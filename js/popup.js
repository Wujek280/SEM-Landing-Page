'use strict()'

$(function(){

	addEventListeners();




	
})

function addEventListeners(){

	var contactButtons = document.getElementsByName('contactButton');

		//Loop for attaching onclick fn to buttons
	for(var i=0; i<contactButtons.length; i++){
		
		contactButtons[i].onclick = function(e){
			e.preventDefault();
			popUp();
		}
	}
}

function popUp(){

	var bgDiv = document.createElement('div');
	bgDiv.className = 'backgroundDiv';
	bgDiv.innerHTML = " <div class='popUpMenu'> <div class='callDiv'> <i class='times fa fa-times fa-2x' onclick='closePopUp();'></i> <h2>Cześć</h2> <p>Zawsze możesz do nas zadzwonić</p><h3>+48 664 340 449</h3> <i class='phone fa fa-phone-square fa-5x'></i> </div><div class='replyDiv'> <i class='times fa fa-times fa-2x' onclick='closePopUp();'></i> <h2>Zostaw nam wiadomość</h2> <hr> <form> <button class='button-clear' >Wyczyść</button> <button class='button-send' >Wyślij</button> <label for='name'>Imię</label> <br><input id='name' name='name' type='text' > <br><label for='surname'>Nazwisko</label> <br><input id='surname' name='surname' type='text' > <br><label for='phone'>Telefon</label> <br><input id='phone' name='phone' type='tel' placeholder='790 654 321...'><br><label for='message' >Wiadomość</label> <br><textarea id='message' name='message' placeholder='Napisz nam coś...'></textarea> </form> </div></div>"
	document.getElementsByTagName('nav')[0].appendChild(bgDiv);
	
	document.getElementsByClassName('button-clear')[0].onclick = function(e){
			e.preventDefault();
			formClear();
	};

	console.log('popup working');
}

function closePopUp(){
	console.log('popup closed');
	// document.body.className = '';
	document.getElementsByClassName('backgroundDiv')[0].outerHTML = '';

}

function formClear(){
	
	var inputs = document.getElementsByTagName('input');

	for(var i=0; i<inputs.length; i++){

		inputs[i].value = '';

	}

	document.getElementsByTagName('textarea')[0].value = '';

}