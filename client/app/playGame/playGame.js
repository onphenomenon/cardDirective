angular.module('playGame', [])

.controller('gameController', function($scope, $stateParams, $window, $location, Game, $timeout) {
  $scope.skill = $stateParams.skill;
  $scope.cards = [];
  $scope.pairCheck = [];
  $scope.pairs = $scope.skill === "easy" ? 6 : $scope.skill === "medium" ? 12 : $scope.skill === "hard" ? 25 : null;
  $scope.cards = Game.getPairs($scope.pairs);
  $scope.matches = 0;

  $scope.$on('card_flip', function(event, data) {
      console.log("data ", data);
      console.log(event)
      $scope.pairCheck.push(data);
      if($scope.pairCheck.length === 2) {
        $scope.$broadcast("no_click");

         var match = Game.match($scope.pairCheck[0], $scope.pairCheck[1]);
         if(match){
          $scope.$broadcast('match');
          $scope.matches++;
          if($scope.matches === $scope.pairs){
            alert("WINNER")
          }
         } else {
          $scope.$broadcast("no_match")
         }
         $scope.pairCheck = [];
      }
      //tell all cards to go back to


    })

})
.directive("card", function($timeout){

    var linker = function(scope, element, attrs){

      var config = {
        back : "panda.gif",
        match : "match.png",
        front : scope.name,
        noclick: false
      }

      scope.name = config.back;
      //console.log("front", front);


      element.on('click', function(event){
        console.log("clicked");
        if(!config.noclick){
          scope.name = config.front;
          console.log(element);
          element.addClass("face")
          console.log(element);
          scope.$apply();
          scope.$emit("card_flip", scope.name);
        }

      });
      scope.$on('no_click', function(){
        config.noclick = true;
      })

      scope.$on('no_match', function(event){
        console.log("NO MATCH")

        $timeout(function () {
            scope.name = config.back;
            scope.$apply();
            config.noclick = false;
            }, 2000);

      });
      scope.$on('match', function(event){
        console.log("MATCH")


          $timeout(function () {
            if(scope.name === config.front){
              scope.name = config.match;
              scope.$apply();
            } else {
              config.noclick = false;
            }
          }, 2000);



      })

      };



    return {
      restrict: "E",
      link: linker,
      scope: {
        name: "="
      },
      template: [
        "<img ng-src='images/cards/{{name}}'>",
      ].join("")

    }
  });
