var Card = require('./card.js');

class CardGame{

  checkForAce(card){
    if(card.value === 1){
      return true;
    }else{
      return false;
    }
  }

  highestCard(card1, card2){
    if(card1.value > card2.value){
      return `${card1.suit} ${card1.value} wins`;
    }
    else{
      return `${card2.suit} ${card2.value} wins`;
    }
  }

  cardsTotal(cards){
    let total = 0;
    for(let card of cards){
      total += card.value;

    }
    return total;
  }
}

module.exports = CardGame;
