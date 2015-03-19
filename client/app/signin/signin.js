'use strict';

angular.module('pwrecovApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/signin', {
        templateUrl: 'app/signin/signin.html',
        controller: 'SigninCtrl'
      });
  });
