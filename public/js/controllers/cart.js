  'use strict'

  angular.module('ngDay2App')
  .controller('CartCtrl', function($scope, $location, CartSvc){

    $scope.addBauble = function() {
      $location.path('/cart');
    };
    $scope.addedBauble = function(bauble) {
      CartSvc.createCartItem(bauble)
      $location.path('/add');
    };
    $scope.baubles = CartSvc.queryCart();
  })
  .controller('EditCartCtrl', function($scope, $location, $routeParams,$log, EditCartSvc){

    $scope.bauble = EditCartSvc.show({ id: $routeParams.id });
    $scope.delete = function(){ 
      $log($routeParams.id);
      EditCartSvc.delete({ id: $routeParams.id });
      $location.path('/add');
    };
    $scope.edit = function() {
      EditCartSvc.edit($scope.bauble);
      $location.path('/add');
    };

  });