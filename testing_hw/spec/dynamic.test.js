const Card = require('../card.js');
const CardGame = require('../dynamic.js');

describe('dynamic test', () => {
  let ace;
  let eightHearts;
  let nineHearts;
  let tenSpades;
  let cards;
  let game;

  beforeEach(() => {
    ace = new Card('club', 1);
    eightHearts = new Card('heart', 8);
    nineHearts = new Card('heart', 9);
    tenSpades = new Card('spade', 10);

    cards = [ace, eightHearts, nineHearts, tenSpades];

    game =  new CardGame();
  })

  test('cardGame can tell if ace', () => {
    console.log(ace);
    expect(game.checkForAce(ace)).toBeTruthy();
  })

  test('cardGame can determine card 1 winner', () => {
    expect(game.highestCard(nineHearts, eightHearts)).toBe('heart 9 wins');
  })

  test('cardGame can determine card 2 winner', () => {
    expect(game.highestCard(nineHearts, tenSpades)).toBe('spade 10 wins');
  })

  test('can total cards', () => {
    expect(game.cardsTotal(cards)).toBe(28);
  })
})
