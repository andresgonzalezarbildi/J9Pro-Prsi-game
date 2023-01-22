let prsiGame = {
  you: {
    scoreSpan: "your-prsi-result",
    div: "#your-box",
    boxSize: "flex-prsi-row-2 div",
    score: 0,
  },
  computer: {
    scoreSpan: "computer-prsi-result",
    div: "#computer-box",
    boxSize: "flex-prsi-row-2 div",
    score: 0,
  },
  cardSuit: ["žaludy", "listy", "kule", "srdce"],
  cardValue: ["eso", "7", "8", "9", "10", "spodek", "svršek", "král"],
  cardsMap: {
    eso: [5, 16, 20, 31],
    7: [4, 14, 18, 26],
    8: [3, 15, 19, 32],
    9: [2, 17, 21, 33],
    10: [8, 10, 23, 30],
    spodek: [6, 12, 24, 28],
    svršek: [7, 13, 25, 27],
    král: [9, 11, 22, 29],
  },
  // cardsMap: {
  //     '2': 9,
  //     '3': 8,
  //     '4': 7,
  //     '5': eso,
  //     '6': spodek,
  //     '7': svršek,
  //     '8': 10,
  //     '9': král,
  //     '10': 10,
  //     '11': král,
  //     '12': spodek,
  //     '13': svršek,
  //     '14': 7,
  //     '15': 8,
  //     '16': eso,
  //     '17': 9,
  //     '18': 7,
  //     '19': 8,
  //     '20': eso,
  //     '21': 9,
  //     '22': král,
  //     '23': 10,
  //     '24': spodek,
  //     '25': svršek,
  //     '26': 7,
  //     '27': svršek,
  //     '28': spodek,
  //     '29': král,
  //     '30': 10,
  //     '31': eso,
  //     '32': 8,
  //     '33': 9
  //},

  wins: 0,
  losses: 0,
  isDeal: false, //has person pressed Deal
  isOver: false, //has pc finished dealing cards
  gameInAction: false, //prevents person from pressing deal while game is on
};

//CONSTRUCTOR/////////////////////////////////////////////////////////////
const SUIT = prsiGame.cardSuit;
const VALUE = prsiGame.cardValue;

class Deck {
  constructor(cards = freshDeck()) {
    this.cards = cards;
  }
  get numberOfCards() {
    return this.cards.length;
  }
  shuffle() {
    for (let i = this.numberOfCards - 1; i > 0; i--) {
      const newIndex = Math.floor(Math.random() * (i + 1));
      const oldValue = this.cards[newIndex];
      this.cards[newIndex] = this.cards[i];
      this.cards[i] = oldValue;
    }
  }
}

class Card {
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
  }
}

function freshDeck() {
  return SUIT.flatMap((suit) => {
    return VALUE.map((value) => {
      return new Card(suit, value);
    });
  });
}

const deck = new Deck();
deck.shuffle();

playerDeck = new Deck(deck.cards.slice(0, 4));
computerDeck = new Deck(deck.cards.slice(5, 9));

//console.log(deck)
//CONSTRUCTOR FINISHED//////////////////////////////////////////////

const YOU = prsiGame["you"];
const COMPUTER = prsiGame["computer"];
let winner; //store the winner of the game

document.querySelector("#prsi-play-btn").addEventListener("click", dealCards);

function dealCards() {
  if (prsiGame["isOver"] === false) {
    let player = playerDeck;
    let comp = computerDeck;
    //console.log(playerDeck, computerDeck)
    let card = randomCard();
    //let card = randomCard(); //we need to give each player 4 cards
    showCard(card, YOU);
  }
}

function randomCard() {
  deck.shuffle();
  //return prsiGame["cards"]
}
function showCard(card, activePlayer) {
  console.log(playerDeck.cards);
  let card1 = document.querySelector("#img0");
  let card2 = document.querySelector("#img1");
  let card3 = document.querySelector("#img2");
  let card4 = document.querySelector("#img3");
  if (activePlayer["score"] === 0) {
    // let cardImage = document.createElement('img')
    // cardImage.src = `photos/prsi-photos/${2}.png`;
    // console.log(cardsMap)
    // document.querySelector(activePlayer['div']).appendChild(cardImage);
    card1.src = `photos/${playerDeck.cards[0].suit}/${playerDeck.cards[0].value}.png`;
    card2.src = `photos/${playerDeck.cards[1].suit}/${playerDeck.cards[1].value}.png`;
    card3.src = `photos/${playerDeck.cards[2].suit}/${playerDeck.cards[2].value}.png`;
    card4.src = `photos/${playerDeck.cards[3].suit}/${playerDeck.cards[3].value}.png`;
  }
}

function drawTwoCards() {
  if (cardValue[7]) {
    console.log("draw 2 cards"); //game should add 2 cards to that player.
  }
}

function isEso() {
  if (cardValue[eso]) {
    console.log("skip turn"); //this player skips a turn
  }
}

function changeSymbol() {
  if (cardValue[svršek]) {
    console.log("click button to change suit/symbol for the game"); //player clicks a button suit of their choice and starter card now changes to the new suit and next player starts with that suit unless they also have a chnageSymbol card
  }
}

function win() {
  if (player) {
    //if player has no cards == YOU WIN!
  } else {
    //you lose
  }
}

function matchingConditions() {
  if (
    cardSuit[žaludy] === "žaludy" || //if zaludy == zaludy playerUp plays again
    cardSuit[listy] || //if listy == listy playerUp plays again
    cardSuit[kule] ||
    cardSuit[srdce]
  ) {
    console.log("you matched suits or values");
  }
  //SAME FOR VALUES
  //SAME FOR VALUES
  //SAME FOR VALUES
  //SAME FOR VALUES
  //SAME FOR VALUES
  //SAME FOR VALUES
}
