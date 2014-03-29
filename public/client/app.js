// require ngRoute
var app = angular.module('myApp', []);

// app.service('Links', function($http) {
//   return {
//     getLinks: function(){
//       var promise = $http({
//         method: 'GET',
//         url: '/links'
//       }).then(function(data){
//         return data;
//       });
//       return promise;
//     }
//   };
// });

// app.run(function($rootScope) {
//   $rootScope.name = 'someone else';
// });

// app.controller('linkController', function($scope, Links) {
//   Links.getLinks().then(function(data){
//     $scope.links = data.data;
//     console.log('WAAAAAAAAAAAAAAAAAHHHHHHHHHHH', data);
//   });
// });

// app router
// app.config(function($routeProvider, $locationProvider){
//   $routeProvider
//     .when('')
// });

app.controller('linkController', function($scope, $http){
  $http({
    method: 'GET',
    url: '/links'
  }).then(function(links){
    $scope.links = links.data;
  });
});
