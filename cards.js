
firstCard = {
  prompt: "Isn't painting Wonderful???",
  rightChoiceText: "I LOVE PAINTING",
  rightChoice: function(){
    addResource("veggies", 20)
      addPackToDeck("bumbling")
    addToTopDeck("VanGoghHappy")
    },
  
  leftChoiceText: "PAINTING SUCKS", 
  leftChoice: function(){
    addResource("meat", 20)
      addPackToDeck("bumbling")
    addToTopDeck("VanGoghBetrayed")
    enemiesMade += 1;
  },
  name: "Van Gogh",
  resultText: "",
  image: "./images/VanGosh.png",
  priority: 1,
  pack : "none"
}


cardPool = {
  "uniqueIDList" : ["VanGoghHappy", "VanGoghBetrayed"],
  
  "VanGoghHappy" : {
    prompt: "Really? Let's be friends",
    rightChoiceText: "Lol Okay",
      rightChoice: function(){
      addResource("veggies", 10)
      },
    leftChoiceText: "XD HAHA. . .No", 
    leftChoice: function(){
      addResource("meat", 20)
      addToTopDeck("VanGoghBetrayed")
    enemiesMade += 1;
    },
    name: "Van Gogh",
    resultText: "",
    image: "./images/VanGosh.png",
    priority: 2,
    pack : "none"
  },


  "VanGoghBetrayed": {
    prompt: "To Heck with you",
    rightChoiceText: ". . . ",
      rightChoice: function(){
      addResource("veggies", 20)
      },
    leftChoiceText: "Fine. . . ", 
    leftChoice: function(){
      addResource("meat", 100)
    },
    name: "Van Gogh",
    resultText: "",
    image: "./images/VanGosh.png",
    priority: 2,
    pack : "none"
  }

}




