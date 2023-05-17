enemiesMade = 0;


function updatePlayerData(){
  
  
let dataToShow = "ENEMIES MADE: "+ enemiesMade;


io.writeIntoElement(dataToShow,"playerData")

}