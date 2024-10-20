'use strict';

const player0El=document.querySelector('.player--0');
const player1El=document.querySelector('.player--1');



const score0El =document.getElementById('score--0');
const score1El=document.getElementById('score--1');

const current0El=document.getElementById('current--0');
const current1El=document.getElementById('current--1');

const diceEl=document.querySelector('.dice');
const btnNew=document.querySelector('.btn--new');
const btnRoll=document.querySelector('.btn--roll');
const btnHold=document.querySelector('.btn--hold');

score0El.textContent=0;
score1El.textContent=0;
diceEl.classList.add('hidden');

let currentScore = 0;
let activePlayer=0;
const scores=[0,0];

//Rolling dice functionalty
btnRoll.addEventListener('click',function(){
    //Generating a randon number between 1-6
    const dice = Math.trunc(Math.random() * 6) + 1;
   // console.log(dice);
    //display dice
 
    diceEl.src= `img/dice-${dice}.png`;
   
    diceEl.classList.remove('hidden');

    //check for rolled 1
    if(dice !== 1){
        currentScore+=dice;
        document.getElementById(`current--${activePlayer}`).textContent=currentScore;

      //  current0El.textContent=currentScore;

    }else{

        //Switching the player if dice is 1
        document.getElementById(`current--${activePlayer}`).textContent=0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        currentScore=0;   
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
    }
});
    

