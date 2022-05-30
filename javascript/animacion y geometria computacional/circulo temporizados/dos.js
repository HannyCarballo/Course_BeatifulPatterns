function myFunction(){
	if (position>100 || position<50){
		velocity=-1+velocity;
	}
	position = position + velocity;	
	ball.style.left = position + 'px';
}

setInterval(myFunction,200);