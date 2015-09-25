angular.module('playGame', [])

.controller('gameController', function($scope, $stateParams, $window, $location, Game, $timeout) {
  $scope.skill = $stateParams.skill;
  $scope.cards = [];
  $scope.pairCheck = [];
  $scope.pairs = $scope.skill === "easy" ? 6 : $scope.skill === "medium" ? 12 : $scope.skill === "hard" ? 25 : null;
  $scope.matchedPairs = Game.getPairs($scope.pairs);
  $scope.init = function() {
    for(var key in $scope.matchedPairs) {
      if($scope.matchedPairs.hasOwnProperty(key)) {
        //objects with flipp
        var cardModel = {
          state: "panda.gif",
          face : key,
          back : "panda.gif" }

        $scope.cards.push(cardModel);
        var cardModel = {
          state: "panda.gif",
          face : $scope.matchedPairs[key],
          back : "panda.gif" }

        $scope.cards.push(cardModel);
      }
    }
    Game.shuffleArray($scope.cards, $scope.pairs*2);
    while($scope.cards.length <= 50) {
      var cardModel = {
        state: "canvas.png",
        face : null,
        back : null
      }
      $scope.cards.push(cardModel);
    }

    console.log("scope cards", $scope.cards);
  }
  $scope.init();
  console.log("skill ", $scope.skill)
  console.log("pairs ", $scope.pairs)


  //create array of card objects for card array with states.



  $scope.flipCard = function(cardModel) {

    //if pair check has two cards, not allowd to do a third
    if($scope.pairCheck.length < 2) {
      $scope.pairCheck.push(cardModel)
      cardModel.state = cardModel.face;
      console.log("length ", $scope.pairCheck.length);
    }
    if($scope.pairCheck.length === 2) {

      //check if it's a match
      var match = Game.match($scope.pairCheck[0].face, $scope.pairCheck[1].face)

      if(match){
        console.log("MATCH MATCH MATCH")
         $timeout(function () {
             $scope.pairCheck[0].state = "match.png",
              $scope.pairCheck[1].state = "match.png"
              $scope.pairCheck = [];
          }, 1000);

      } else {
        console.log("NOOOOOO MATCH", $scope.pairCheck[0],  $scope.pairCheck[1])
        $timeout(function () {
            $scope.pairCheck[0].state = $scope.pairCheck[0].back;
            $scope.pairCheck[1].state = $scope.pairCheck[1].back;
            $scope.pairCheck = [];
          }, 1000);


        }
      }

    }

  });


  //need to keep track of which two cards are flipped.

  // cards[]=[flipped, n]
  // $scope.flipCard = function(cardModel) {

  // }

  //click function, check in game object for key value pair,
  //make pair disappear/stay
  //all disappear, game over

