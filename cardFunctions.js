deck= [];

// card is a key, except when it is an onject and not from the pool
function addToTopDeck(card, fromPool=true){

  if (fromPool)deck.push(cardPool[card])
  else deck.push(card);
  console.log(card)
}
function addCardToDeck(card, fromPool=true) {
  if (fromPool) deck.push(cardPool[card])
  else deck.push(card);
  shuffleDeck(deck);
}

function addPackToDeck(pack) {
  for (var x in cardPool.uniqueIDList){
    if (cardPool[cardPool.uniqueIDList[x]].pack == pack) {
      addCardToDeck(cardPool.uniqueIDList[x]);
    }
  }
  shuffleDeck(deck);
}

function drawFromDeck(){
  if (deck.length ==0) alert("out of cards :(")
  return deck.shift();
}

function shuffleDeck(array) {
  var positions = [];
  for (var x in array) {
    positions.push({value: array[x], roll: Math.random()});
  }

  positions.sort(function(a, b) {
    if (a.value.priority == b.value.priority) {
      return a.roll - b.roll;
    } else {
      return a.value.priority - b.value.priority;
    }
  });

  deck = [];
  for (var x in positions) {
    deck.push(positions[x].value);
  }
}

  
  function importCardData() {

  let data = document.getElementById("data").innerHTML;
  
  let cards = data.split("\n")
  let labels = [];
  for ( c in cards){
    if ((c == 0))  // get Labels
    {
      header = cards[c].split("\t")
      for (i in header)
        labels.push(header[i])
      //console.log(labels)
      
    }
    else{
      card = {}
      values = cards[c].split("\t")
      for (i in values){ 
        card[labels[i]] = values[i];
        if (labels[i] == "image"){
        card[labels[i]] = "./images/" + values[i];
        }
        if (labels[i] == "rightChoice" || labels[i] == "leftChoice"){
          console.log(values[i])
          let localFunction = new Function(values[i])
          card[labels[i]] = localFunction;
        }
      } 
        console.log(card)
      
      console.log(values)
      
      cardPool.uniqueIDList.push(values[0])
      cardPool[values[0]] = card;
    }
    
  } 
  }