var time     = 3000;
var position = 0;
var velocity = 5;

function myFunction(){
	position = position + velocity;	
	console.log(position);
}

setInterval(myFunction,time);