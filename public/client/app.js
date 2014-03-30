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

app.controller('navController', function($rootScope, $scope, get_Links) {
  $rootScope.show = false;
  $scope.display = function() {
    $rootScope.show = !$rootScope.show;
    get_Links.getLinks().then(function(data){
      $rootScope.links = data.data;
    });
  };
});

app.controller('linkController', function($rootScope, $scope, $http, get_Links) {
  get_Links.getLinks().then(function(data){
    $rootScope.links = data.data;
  });
  $scope.addLink = function() {
    $http({
      method: 'POST',
      url: '/links',
      data: {url: $scope.linkText}
    });
    $scope.linkText = '';
  };
});

// app router*******************************************************
app.config(['$routeProvider',
  function($routeProvider){
    $routeProvider
    .when('/create', {
      templateUrl: '/views/signup.ejs'
    }).
    otherwise({
      redirectTo: '/views/login.ejs'
    });
  }
]);
