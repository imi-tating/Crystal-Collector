function createGameLayout (numberOfLitterBagsToPlay) {
  for (var i = 0; i < numberOfLitterBagsToPlay; i++) {
    $("#all-the-crystals").append('<button class="litter-button"><img class="litter-bag" src="assets/images/crystalLitter.jpeg" alt="single bag of crystal based kitty litter"></button>');
  }
}

$(document).ready(function(){


  createGameLayout(4);




});
