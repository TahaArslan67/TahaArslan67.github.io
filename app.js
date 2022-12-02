"use strict";


let secretNumber = Math.trunc(Math.random()*20) + 1;
document.querySelector(".label-2").textContent = 0;
document.querySelector(".label").textContent = 0;
let score = 0;
let highscore = 0;


const displayMessage = function(message){
    document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function(){
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess, typeof guess); 
    console.log(secretNumber,typeof secretNumber)
    if(!guess){
        displayMessage("Bir sayı giriniz.");
    }
    else if(guess === secretNumber){
        displayMessage("Doğru Tahmin!")
        document.querySelector(".number").textContent = secretNumber;
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";
        score++
        document.querySelector(".label").textContent =score;
        secretNumber = Math.trunc(Math.random()*20) + 1;
        if(score > highscore){
            highscore= score;
            document.querySelector(".label-2").textContent = highscore;
        }
    }
    else if(guess !== secretNumber){
        if(score<1){
            displayMessage(guess>secretNumber ? "Çok yüksek":"Çok Düşük");
            document.querySelector("body").style.backgroundColor = "#222";
            
        }
        else{
            displayMessage("Oyunu kaybettin");
            document.querySelector(".label").textContent=0;
            score="0"
            document.querySelector("body").style.backgroundColor = "#222";
        }
    }

})

