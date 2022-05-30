function myFunction(){
	position = position + velocity;	
	ball.style.left = position + 'px';
}

setInterval(myFunction,3000);