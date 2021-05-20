//create a random integer between [1,6]
var randomNumber1 = Math.floor((6 * Math.random())) + 1;
var randomNumber2 = Math.floor((6 * Math.random())) + 1;


document.querySelector(".img1").setAttribute("src", "images\\dice" + randomNumber1.toString() + ".png");
document.querySelector(".img2").setAttribute("src", "images\\dice" + randomNumber2.toString() + ".png");


// const play1 = "<i class="fad fa-french-fries">Player 1 Wins!</i>"
if (randomNumber1 > randomNumber2) {
  document.querySelector('h1').innerHTML = "Player 1 wins🎈";
}
else if (randomNumber1 < randomNumber2) {
  document.querySelector('h1').innerHTML = "Player 2 Wins!🎈";
}
else {
  document.querySelector('h1').innerHTML = "You guys tied!🎀";
}
