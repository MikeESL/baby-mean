'use strict'
angular.module('ngDay5App.directives')
.directive('myDirective', function(){
	return {
		restrict: 'EA', // E is element, A is attrbute
		//template: '<span>{{bauble.price}}</span>'
		  templateURL: 'views/directiveDemo.html' // make that file

	}
});