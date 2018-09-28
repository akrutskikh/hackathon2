/*
 * A playing card
 */
class Card {
  constructor(rank, suit) {
    this.rank = rank;
    this.suit = suit;
    if (isNaN(parseInt(this.rank))){
      this.score = 10;
    } else if (this.rank === 'Ace'){
      this.score = 11;
    } else {
      this.score = parseInt(this.rank);
    }
  }
  playerDiv() {
    let cardsplayer = document.getElementById('cardsplayer');
    cardsplayer.innerHTML += `<div class="card face-${this.rank}-of-${this.suit}"></div>`;
  }
  dealerDiv() {
    let cardsdealer = document.getElementById('cardsdealer');
    cardsdealer.innerHTML += `<div class="card face-${this.rank}-of-${this.suit}"></div>`;
  }
  

} 