let mousePos = { x: undefined, y: undefined }; // object to track mouse positions
let activeCard;  // html document card object
let active;     // whether the player has clicked and must now make a choice
let cardOrigin; // the corner of the card stack, also html, for managing the rotation animation
let cardStack; // the object which holds where the deck sits
let activeCardObject; // the javascript card object that the player is interacting with
let choice = null;   //the function that will be called on a click indicating a choice with the card
let falling = false;  // is a card currently falling
let setup = false;


let anxiety = 40 // how anxious the speaker is


function insertCardInfo(card) {
  document.getElementById("textRight").innerHTML = card.rightChoiceText;
  document.getElementById("textLeft").innerHTML =  card.leftChoiceText;
  document.getElementById("resultText").innerHTML = card.resultText;
  document.getElementById("dialogBox").innerHTML = card.prompt;
  document.getElementById("cardName").innerHTML = card.name;
  document.getElementById("cardImage").src = card.image;
  //console.log(card.resultText == "")
  if (card.resultText == "")
  {
    //console.log("set opacity to 0", )
    document.getElementById("resultText").style.opacity = 0;
  }
  else{
    document.getElementById("resultText").innerHTML = card.resultText;
    document.getElementById("resultText").style.opacity = 100;
    
    
  }
  
  return card;
}



function makeActive() {
  setTimeout(function(){active = true;}, 50) // this is jank to dodge the mouse click event for resolving choices. 
  //console.log("card is active")
}

function resolveChoice(){
  if (choice !== null) {
    choice()
    
    updateMeters();
    
    checkFail();
    
    //activeCard.style.display = "none";
    falling = true;
    setTimeout(function(){
      activeCard.style.display = "none  ";
      //activeCardObject = insertCardInfo(drawFromDeck())
      falling = false;
      
      
      setTimeout(function(){
        setup = true;
        setTimeout(function(){
        activeCard.style.display = "block"
      activeCardObject = insertCardInfo(drawFromDeck())
          setup = false;}, 500);
        }, 250);
      
      }, 500)
    
    active = false;
    //if (choice == null)
  }
};


function showRightText(){
  document.getElementById("textRight").style.opacity = "100"; 
  document.getElementById("textLeft").style.opacity = "0"; 
}
function showLeftText(){
  document.getElementById("textRight").style.opacity = "0"; 
  document.getElementById("textLeft").style.opacity = "100"; 
}
function showNoText(){
  document.getElementById("textRight").style.opacity = "0"; 
  document.getElementById("textLeft").style.opacity = "0"; 
}

$( document ).ready( function(){
  setStatIcons();
  updateMeters();
  showNoText()

  activeCardObject = insertCardInfo(firstCard);
  
  importCardData()

  activeCard = document.getElementById("activeCard");
  cardStack = document.getElementById("cardStack");
  cardOrigin = cardStack.offsetLeft 
  

  window.addEventListener('mousemove', (event) => {
    mousePos = { x: event.clientX, y: event.clientY }
    //console.log(mousePos)
  });
  window.addEventListener('click', (event) => {
    if(active){
      //console.log("pew pew");
      resolveChoice()
      };  
  })
  
  animateCard = setInterval(updateUI, 100)

})


function updateUI(){
  
  //console.log(mousePos);
  updatePlayerData()
    if (active){
      //console.log(cardOrigin, (mousePos.x-cardOrigin), event)
      let posValue =  (((mousePos.x-cardOrigin)-200))/9
      if (posValue > 20) {
        posValue = 20 + Math.log(Math.abs(posValue))
        showRightText()
        choice = activeCardObject.rightChoice;
        }
        
      if (posValue < -20) {
        posValue = -20 -Math.log(Math.abs(posValue))
        showLeftText()
        choice = activeCardObject.leftChoice;
        }
        if (Math.abs(posValue) > 15) {
          let translateX = (posValue)/4 + Math.random()*anxiety
          let translateY = (((mousePos.y-cardStack.offsetTop)-200))/4+ Math.random()*anxiety
          activeCard.style.transform = "rotate("+posValue+ "deg) translate(" + translateX + "px, " + translateY + "px)"  
        }
        else {
          activeCard.style.transform = "rotate(0deg) translate(0,0)"  
          showNoText()
        choice = null;
        }
      }
    else {
      //console.log(mousePos.x, cardStack.offsetLeft)
      //console.log(mousePos.x-cardStack.offsetLeft + "px")
      if (!falling)
          activeCard.style.transform = "rotate(0deg)"  
      if (falling)
        activeCard.style.transform = "rotate(0deg) translateY(600px)";  
          showNoText()
          choice = null;
      if (!falling && setup){
        
        activeCard.style.transform = "rotate(-5deg) translateY(-900px)"
      }
      
    }
  }
