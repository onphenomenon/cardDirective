angular.module('concentrate', [
  // 'shortly.poem',
  'auth',
  'playGame',
  'ui.router',
  'concentrate.services',
  'ui.bootstrap'

])
.config(function($httpProvider, $stateProvider, $urlRouterProvider) {



  $urlRouterProvider.otherwise('/auth');

  $stateProvider
    .state('auth', {
      url: "/auth",
      views: {
        "auth" : {
          templateUrl: "app/auth/auth.html",
          controller: 'AuthController'
        }
      }
    })
    .state('skill', {
      url: "/:skill",
      views: {
        "game" : {
          templateUrl: "app/playGame/playGame.html",
          controller: 'gameController'
        }
      }

    })
});
