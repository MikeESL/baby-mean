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
    $scope.deleteCartItem = function(){ 
      
      CartSvc.deleteItem({ id: $scope.paramId });
      $location.path('/add');
    };
    $scope.baubles = CartSvc.queryCart();
  })
  .controller('EditCartCtrl', function($scope, $location, $routeParams, EditCartSvc, CartSvc){
    $scope.paramId = $routeParams.id;
    $scope.bauble = EditCartSvc.showCartItem({ id: $scope.paramId });
    $scope.deleteCartItem = function(){ 
      
      CartSvc.deleteItem({ id: $scope.paramId });
      $location.path('/add');
    };
    $scope.edit = function() {
      CartSvc.edit($scope.bauble);
      $location.path('/add');
    };

  });