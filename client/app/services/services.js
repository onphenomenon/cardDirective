angular.module('concentrate.services', [])

.factory('Poems', function($window, $http, $location) {
  // //find out what user it is from token??
  // var getPoems = function() {
  //   return $http({
  //     method: 'GET',
  //     url: 'haiku/poems/gallery'
  //   });
  // };

  // var postPoem = function(poem) {
  //   return $http({
  //     method: 'POST',
  //     url: 'haiku/poems/new',
  //     data: poem
  //   })
  //   // .then(function(resp) {
  //   //   return resp.
  //   // })
  // }

  // return {
  //   getPoems: getPoems,
  //   postPoem: postPoem
  // }
})


.factory('Auth', function ($http, $location, $window) {

});
