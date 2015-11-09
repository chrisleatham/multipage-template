// Create app
var myApp = angular.module('myApp', ['ui.router'])

// Configure app
.config(function($stateProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'templates/landing.html',
            controller: 'HomeController'
        })
        .state('content', {
            url: '/content',
            templateUrl: 'templates/content.html',
            controller: 'ContentController',
        })
        .state('about', {
            url: '/about',
            templateUrl: 'templates/about.html',
            controller: 'AboutController',
        })
})

// Landing page controller: define $scope.number as a number
.controller('HomeController', function($scope){
  $scope.number = 6;
})

// About page controller: define $scope.about as a string
.controller('AboutController', function($scope){
  $scope.about = "String"
})

// Content controller: define $scope.url as an image
.controller('ContentController', function($scope){
  $scope.url = "http://a-z-animals.com/media/animals/images/original/weasel2.jpg"
})

