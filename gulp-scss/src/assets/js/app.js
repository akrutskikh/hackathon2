let deck = new Deck();
deck.shuffle();
let playerscore = 0;
let dealerscore = 0;
let playermoney = 0;

function initialCards() {
  //Calculate and display score//
  playerscore += deck.cards[0].score + deck.cards[2].score;
  dealerscore += deck.cards[1].score;
  let playerscorehtml = document.getElementById('scoreplayer');
  playerscorehtml.innerHTML = `Score : ${playerscore}`;
  let dealerscorehtml = document.getElementById('scoredealer');
  dealerscorehtml.innerHTML = `Score : ${dealerscore}`;

  //display initial cards
  let cardsplayer = document.getElementById('cardsplayer');
  cardsplayer.innerHTML += `<div class="card face-${deck.cards[0].rank}-of-${deck.cards[0].suit}"></div>`;
  cardsplayer.innerHTML += `<div class="card face-${deck.cards[2].rank}-of-${deck.cards[0].suit}"></div>`;
  let cardsdealer = document.getElementById('cardsdealer');
  cardsdealer.innerHTML += `<div class="card face-${deck.cards[1].rank}-of-${deck.cards[1].suit}"></div>`;

}

function hit(){
 let newcard = deck.deal();
 cardsplayer.innerHTML += `<div class="card face-${newcard.rank}-of-${newcard.suit}"></div>`;
 playerscore += newcard.score;
 let playerscorehtml = document.getElementById('scoreplayer');
  playerscorehtml.innerHTML = `Score : ${playerscore}`;
 console.log(newcard.score);
}

function stay(){
document.getElementById('hit').style.display = 'none';
 let redundant = document.getElementById('redundant');
 redundant.style.display = 'none';
  let newcard = deck.deal();
  cardsdealer.innerHTML += `<div class="card face-${newcard.rank}-of-${newcard.suit}"></div>`;
  dealerscore += newcard.score;
  let dealerscorehtml = document.getElementById('scoredealer');
   dealerscorehtml.innerHTML = `Score : ${dealerscore}`;
  console.log(newcard.score);
  while (dealerscore < 17){
    stay();
  }
  
 }

 function winorlosedisplay(){
  document.getElementById('hit').style.display = 'none';
  document.getElementById('stay').style.display = 'none';
  document.getElementById('gameover').style.display = 'block';
 }



document.addEventListener('DOMContentLoaded', () => {
  // Create and shuffle a new deck of cards

  initialCards();
 
  document.getElementById('hit').addEventListener('click', () => {
    hit();
    if (playerscore > 21){
      winorlosedisplay();
      document.getElementById('winorlose').innerHTML += '<h1>Your A Looser !</h1> ';     
    }
  });
  document.getElementById('stay').addEventListener('click', () => {
    stay();
    if (dealerscore < playerscore) {
      winorlosedisplay();
      document.getElementById('winorlose').innerHTML += '<h1>You Win.</h1> ';
      document.getElementById('pyro').innerHTML += `<div class="before"></div>
      <div class="after"></div>`;
    } else if (dealerscore === playerscore) {
      winorlosedisplay();
      document.getElementById('winorlose').innerHTML += '<h1>Draw.</h1> ';
    } else if (dealerscore > 21){
      winorlosedisplay();
      document.getElementById('winorlose').innerHTML += '<h1>You Win.</h1> ';
      document.getElementById('pyro').innerHTML += `<div class="before"></div>
      <div class="after"></div>`;
    } else {
     winorlosedisplay();
      document.getElementById('winorlose').innerHTML += '<h1>Your A Looser !</h1> ';
    }
  });

  let reset_btn = document.getElementById('reset_btn');
  reset_btn.addEventListener('click', () => {
  location.reload();
  });
});