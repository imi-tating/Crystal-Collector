var numberOfLitterBagsToPlay = 4;
var currentTotal = 0;
var gameEnded = false;
var wins = 0;
var losses = 0;

function callModal() {
  // Get the modal
  var modal = document.getElementById('myModal');
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  modal.style.display = "block";
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
      modal.style.display = "none";
  }
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
}

function createGameLayout () {
  for (var i = 0; i < numberOfLitterBagsToPlay; i++) {
    var newImage = $('<img src="assets/images/crystalLitterMysteryBag.png" alt="single bag of crystal based kitty litter">');
    newImage.addClass("litter-bag");
    newImage.attr("data-hiddenValue", (generateRandomValues(1, 12)));
    var newButton = $("<button>").append(newImage);
    newButton.addClass("litter-button");
    $("#all-the-crystals").append(newButton);
  }
}

function generateRandomValues (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function assignNumberOfBagsNeeded () {
  $("#number-of-bags").text(generateRandomValues(19, 120));
}

function checkBagTotals () {
  if (currentTotal >= parseInt($("#number-of-bags").text())) {
    gameEnded = true;
  }
}

function gameReset () {
  currentTotal = 0;
  gameEnded = false;
  $("#all-the-crystals").empty();
  $("#number-of-bags").text(0);
  $("#running-total").text(0);
  createGameLayout();
  assignNumberOfBagsNeeded();
  $(".litter-bag").on("click", gamePlay)
}

function gamePlay () {
 currentTotal += parseInt($(this).attr("data-hiddenValue"));
 $("#running-total").text(currentTotal);
 checkBagTotals();
 if (gameEnded == true) {
   if (currentTotal == parseInt($("#number-of-bags").text())) {
     alert("You collected exactly " + currentTotal + " bags. You have achieved perfection and won Ellie's heart!");
     wins++;
     $("#wins").text(wins);
   } else {
     alert("Uh-oh! You collected " + currentTotal + " bags instead of " + $("#number-of-bags").text() + " bags. Ellie is offended you think she needs that much litter!");
     losses++;
     $("#losses").text(losses);
   }
   gameReset ();
 }
}

$(document).ready(function(){
  $("#ellieFace").on("click", function () {
    callModal();
  });
   gameReset();
});
