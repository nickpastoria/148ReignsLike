failCards = [{
  resource:"veggies", 
  level: "high", 
  card: {
    prompt: "You have been overcome by vegetables!",
    rightChoiceText: "The Horror",
    rightChoice: function(){location.reload();
      },
    
    leftChoiceText: "The Bliss", 
    leftChoice: function(){location.reload();
    },
    name: "VeggieDoom ",
    resultText: "",
    image: "./images/legumes.jpg"
  }  
}]

defaultFailCard = {
  prompt: "I don't know what you did wrong, but it was something",
  rightChoiceText: "oops",
  rightChoice: function(){location.reload();
    },
  
  leftChoiceText: "PAINTING SUCKS", 
  leftChoice: function(){location.reload();
  },
  name: "Narrator",
  resultText: "You made a mistake",
  image: "./images/legumes.jpg"
}