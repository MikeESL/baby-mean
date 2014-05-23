var shopApp = angular.module('crudCartApp')
	.controller ('BaubCtrl', ['$scope', '$routeParams', '$location', 'ShopService', function($scope, $routeParams, $location, ShopService){

			$scope.things = ShopService.getAllThings();
			$scope.addPost = function(){
				$location.path('/new');
			};

			// @params {thing} is an data object from cart.html object
			$scope.createThing = function(thing) {
				ShopService.createThing(thing);
				$location.path('/cart');
			};
	}]);