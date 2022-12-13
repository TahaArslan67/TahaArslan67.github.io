"use strict";
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const info = document.querySelector(".duyuru");
const info2 = document.querySelector(".duyuru2");

let scores, currentScore, activePlayer, playing;

const init = function(){
    scores=[0,0];
    currentScore = 0;
    activePlayer= 0;
    playing= true;

    score0El.textContent=0;
    score1El.textContent=0;
    current0El.textContent=0;
    current1El.textContent=0;

    diceEl.classList.add("hidden");
    player0El.classList.remove("player--active");
    player1El.classList.remove("player--active");
    info2.classList.add("hidden");
};

init();
const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0?1:0;
    
};
btnRoll.addEventListener("click", function (){
    if(playing){

        const dice = Math.trunc(Math.random()*6)+1;
    
diceEl.classList.remove("hidden");
diceEl.src= `dice-${dice}.png`;
if(dice!==1){
    currentScore +=dice;
    document.getElementById(`current--${activePlayer}`).textContent=currentScore;
}
else{
    switchPlayer();
    if(document.getElementById(`name--${activePlayer}`)){
    document.getElementById("name--1").classList.remove("kalin");
    document.getElementById("name--0").classList.remove("kalin"); 
    document.getElementById(`name--${activePlayer}`).classList.add("kalin");
    
}
}
}});





btnHold.addEventListener("click",function(){
    if(playing){
        scores[activePlayer]+=currentScore;
        document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer];

    if(document.getElementById(`name--${activePlayer}`)){
    document.getElementById("name--1").classList.remove("kalin");
    document.getElementById("name--0").classList.remove("kalin"); 
    document.getElementById(`name--${activePlayer}`).classList.add("kalin");
    
}
        if(scores[activePlayer]>=100){
            playing=false;
            diceEl.classList.add("hidden");
            btnRoll.classList.add("hidden");
            btnHold.classList.add("hidden");
            info.classList.add("hidden");
            info2.classList.remove("hidden");

        document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
        document.querySelector(`.player--${activePlayer}`).classList.add("player--active");
        
    }
        else{
            switchPlayer();
            if(document.getElementById(`name--${activePlayer}`)){
                document.getElementById("name--1").classList.remove("kalin");
                document.getElementById("name--0").classList.remove("kalin"); 
                document.getElementById(`name--${activePlayer}`).classList.add("kalin");
                
            }
        }
    }  
});

btnNew.addEventListener("click", function(){
document.querySelector(`.player--${activePlayer}`).classList.remove("player--winner");
btnRoll.classList.remove("hidden");
btnHold.classList.remove("hidden");
info.classList.remove("hidden");
info2.classList.add("hidden");
})
btnNew.addEventListener("click", init);