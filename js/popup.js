'use strict()'

$(function(){

	
	//Loop for attaching onclick fn to buttons
	for(var i=0; i<document.getElementsByName('contactButton').length; i++){
		
		document.getElementsByName('contactButton')[i].onclick = function(){
			popUp();
		}
	}

	
})

function popUp(){
	console.log('popup working');
}