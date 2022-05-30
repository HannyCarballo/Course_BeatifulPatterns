var counter = 0;
function myFunction() {
  counter++;
  console.log(counter);
}
setInterval(myFunction,3000);

//modificando para que aumente 5 en cada console write
var counter = 0;
function myFunction() {
  counter=counter+5;
  console.log(counter);
}
setInterval(myFunction,3000);

//crecimiento exponencial
var counter = 0;
function myFunction() {
  counter=(counter+1)^2;
  console.log(counter);
}
setInterval(myFunction,3000);