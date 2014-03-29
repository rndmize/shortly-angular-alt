var app = angular.module('myApp', ['ngRoute']);

app.service('get_Links', function($http) {
  return {
    getLinks: function(){
      var promise = $http({
        method: 'GET',
        url: '/links'
      }).then(function(data){
        return data;
      });
      return promise;
    }
  };
});

app.run(function($rootScope) {
  $rootScope.name = 'someone else';
});

app.controller('linkController', function($scope, $http, get_Links) {
  get_Links.getLinks().then(function(data){
    $scope.links = data.data;
  });
  $scope.addLink = function() {
    $http({
      method: 'POST',
      url: '/links',
      data: {url: $scope.linkText}
    });
  };
});

// app router*******************************************************
app.config(function($routeProvider, $locationProvider){
  $routeProvider
    .when('/create', {
      templateUrl: 'signup.ejs'
    });
});
