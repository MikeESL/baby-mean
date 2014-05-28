angular.module('ngDay5App.directives')
	.directive('myDirective', function(){
		return{
			restrict: 'E',
			templateURL: 'views/directiveDemo.html'
		}
	});


var PopoverDemoCtrl = function ($scope) {
  $scope.dynamicPopover = 'Hello, World!';
  $scope.dynamicPopoverTitle = 'Title';
};
var TooltipDemoCtrl = function ($scope) {
  $scope.dynamicTooltip = 'Hello, World!';
  $scope.dynamicTooltipText = 'dynamic';
  $scope.htmlTooltip = 'I\'ve been made <b>bold</b>!';
};
