'use strict';

angular
  .module('ngDay2App', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .when('/blog', {
        templateUrl: 'views/blog-list.html',
        controller: 'PostsCtrl'
      })
      .when('/new', {
        templateUrl: 'views/blog-create.html',
        controller: 'PostsCtrl'
      })
      .when('/blog/:id', {
        templateUrl: 'views/blog-detail.html',
        controller: 'PostCtrl'
      })
      .when('/blog/:id/edit', {
        templateUrl: 'views/blog-editDetail.html',
        controller: 'PostCtrl'
      })
      .when('/admin', {
        templateUrl: 'views/admin.html',
        //controller: 'MainCtrl'
      })
      .when('/newItem', {
        templateUrl: 'views/create.html',
        controller: 'BaubCtrl'
      })
      .when('/cart', {
        templateUrl: 'views/cart.html',
        controller: 'BaubCtrl'
      })
      .when('/details', {
        templateUrl: 'views/details.html',
        controller: 'BaubCtrl'
      })
      .when('/:id/edit', {
        templateUrl: 'views/edit.html',
        controller: 'BaubCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
