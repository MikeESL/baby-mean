'use strict';

angular
  .module('ngDay2App', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ui.bootstrap',
    'ngDay5App.directives'
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
  // ----- begin shopping cart routes ------ //    
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
      .when('/cart-admin', {
        templateUrl: 'views/cart-admin.html',
        controller: 'BaubCtrl'
      })
      .when('/bauble/:id/edit', {
        templateUrl: 'views/cart-admin-edit.html',
        controller: 'EditBaubCtrl'
      })
      .when('/bauble/:id/delete', {
        templateUrl: 'views/cart-delete.html',
        controller: 'EditBaubCtrl'
      })
      .when('/add', {
        templateUrl: 'views/shoppingcart.html',
        controller: 'CartCtrl'
      })
      .when('/add/:id/delete', {
        templateUrl: 'views/shopping-delete.html',
        // controller: 'EditCartCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
angular.module('ngDay5App.directives', []);

