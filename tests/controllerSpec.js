describe('Controllers ::', function() {
  beforeEach(module('playGame'));

  describe('gameController', function() {
    var scope, gameCtrl, Game, stateparams, location;
    var gameMock = {
      getPairs: function(skill){
        return ["2clubs.png" , "2spades.png", "2diamonds.png" , "2hearts.png", "3clubs.png" , "3spades.png", "3diamonds.png" , "3hearts.png", "4clubs.png" , "4spades.png", "4diamonds.png" , "4hearts.png"]
      }
    }

    beforeEach(inject(function ($controller, $rootScope, $location) {
      scope = $rootScope.$new();
      stateparams = { skill: "easy" };
      location = $location;
      gameCtrl = $controller('gameController', {
        $scope: scope,
        Game: gameMock,
        $stateParams:stateparams

      });
    }));

    it('should be defined', function() {
      expect(gameCtrl).toBeDefined();
    });


    describe('easy game redirect', function() {
      it('should redirect to easy game with params "easy" ', function() {
        location.path('/easy');
        scope.$apply();
        expect(location.path()).toBe('/easy');
      });



    });


  });
});
