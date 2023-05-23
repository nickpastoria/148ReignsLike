
firstCard = {
  prompt: "You are Ilya Petrov",
  rightChoiceText: "Who?",
  rightChoice: function(){
    addToTopDeck("Intro2")
    },
  
  leftChoiceText: "Ok", 
  leftChoice: function(){
    addToTopDeck("Intro2")
  },
  name: "?",
  resultText: "",
  image: "./images/Petrov.png",
  priority: 1,
  pack : "none"
}


cardPool = {
  "uniqueIDList" : ["Intro2", "Intro3"],
  
  "Intro2" : {
    prompt: "Investigate the Paranormal for the benefit of the USSR",
    rightChoiceText: "Lol Okay",
      rightChoice: function(){
        addToTopDeck("Intro3")
      },
    leftChoiceText: "XD HAHA. . .No", 
    leftChoice: function(){
      addToTopDeck("Intro3")
    enemiesMade += 1;
    },
    name: "?",
    resultText: "",
    image: "./images/Petrov.png",
    priority: 2,
    pack : "none"
  },


  "Intro3": {
    prompt: "We need any advantage we can get. Do you understand?",
    rightChoiceText: "I Will do my best!",
      rightChoice: function(){
        addToTopDeck("  i1")
      },
    leftChoiceText: "Fine. . . ", 
    leftChoice: function(){
      addToTopDeck("  i1")
    },
    name: "?",
    resultText: "",
    image: "./images/Petrov.png",
    priority: 2,
    pack : "none"
  }

}




