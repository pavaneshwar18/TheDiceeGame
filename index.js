var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomDiceImg1 = "images/dice" + randomNumber1 + ".png";

//var randomImgSource1 = "images/" + randomDiceImg1;

document.querySelectorAll("img")[0].setAttribute("src", randomDiceImg1);


var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomDiceImg2 = "images/dice" + randomNumber2 + ".png";

//var randomImgSource2 = "images/" + randomDiceImg2;

document.querySelectorAll("img")[1].setAttribute("src", randomDiceImg2);


if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "<- Player 1 Wins";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins ->";
}
else{
    document.querySelector("h1").innerHTML = "-Draw!-";
}
