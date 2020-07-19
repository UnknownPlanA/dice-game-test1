
// ********************Image1*********************1

var randomNumber1 = Math.floor((Math.random()*6) + 1);     // 1-6
var randomImage = "images/dice" + randomNumber1 + ".png";   // images/dice1.png-images/dice6.png
document.querySelector(".img1").setAttribute("src",randomImage);   // sets randomImages to src

                          // or

// document.querySelector(".img1").setAttribute("src","images/dice" + Math.floor((Math.random()*6) + 1) + ".png");

// ********************Image2*********************1

var randomNumber2 = Math.floor((Math.random()*6) + 1);     // 1-6
var randomImage2 = "images/dice" + randomNumber2 + ".png";   // images/dice1.png-images/dice6.png
document.querySelector(".img2").setAttribute("src",randomImage2);    // sets randomImages to src

// ******************checking which player won*************

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").textContent = "🚩Player 1 Wins";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").textContent = "Player 2 Wins🚩";
}
else{
  document.querySelector("h1").textContent = "Draw!";
}
