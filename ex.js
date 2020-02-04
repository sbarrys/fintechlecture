var fs=require('fs');

function aFunc(){

	setTimeout(function(){
		console.log('a');},700
	);
}

function bFunc(){

	setTimeout(function(){
		console.log('b');},100
	);
}

function cFunc(){

	setTimeout(function(){
		console.log('c');},700
	);
}
cFunc();
bFunc();
aFunc();