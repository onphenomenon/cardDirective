angular.module('concentrate', [
  // 'shortly.poem',
  'concentrate.auth',
  'concentrate.gallery',
  'ui.router',
  'concentrate.services',
  'ngRoute',
  'ui.bootstrap'

])
.config(function($routeProvider, $httpProvider, $stateProvider, $urlRouterProvider) {



  $urlRouterProvider.otherwise('/auth');

  $stateProvider
    .state('auth', {
      url: "/auth",
      views: {
        'auth': {
          templateUrl: "app/auth/auth.html",
          controller: 'AuthController'
        }
      }
    })
    .state('gallery', {
      url: "/gallery",
      views: {
        'gallery': {
          templateUrl: "app/gallery/gallery.html",
          controller: 'GalleryController'
        }
      }

    })
});
