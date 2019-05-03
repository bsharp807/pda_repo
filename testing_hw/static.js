var card = require('./card');
// card is a class, so should be Card
// const card = New Card(suit, value) required to instantiate an object of the class Card
// maybe require card.js just to be safe

class CardGame{

  checkforAce(card){

    // not camelcased

    if(card = 1){

      // card.value required here
      // === required to check identity

      return true;
    }else{
      return false;
    }
  }

  highestCard(card1 card2){

    // requires a , between cards

    if(card1.value > card2.value){
      return card.name

      // card needs to be card1 in order to give the right name
      // there is no .name property, so likely we need the full card or some interpolated string stating suit and number
    }
    else{
      card2

      // needs to return here in order to provide details
    }
   }
   // extra }
  }

  static.cardsTotal(cards){

    // static. here does nothing, needs to be removed

    return total;

    // total variable not even created yet and by returning here just ends the function

    for(let card of cards){
      total += card.value;
      return "You have a total of " + total;

      // return needs to be outside of loop

    }


  }
}

// no export function
