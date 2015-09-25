angular.module('auth', [])

.controller('AuthController', function($scope, $window, $state) {

  $scope.level = 'easy';

  $scope.chooseGame = function() {
    console.log("choosing games ", this.level)
    $state.go('skill', {skill: this.level})
  }


})
