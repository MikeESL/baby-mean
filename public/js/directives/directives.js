// ----custom directive ------------------- //
angular.module('ngDay5App.directives', []);
angular.module('ngDay5App.directives').directive('myDirective', function () {
    return {
        restrict: 'A',
        template: '<span>{{label}}</span>',
        link: function (scope, el, attrs) {
            scope.label = attrs.popoverLabel;
            $(el).popover({
                trigger: 'hover',
                html: true,
                content: attrs.popoverHtml,
                placement: attrs.popoverPlacement
            });
        }
    };
});










// -- standard pop-over directive -----//
var PopoverDemoCtrl = function ($scope) {
  $scope.dynamicPopover = '';
  $scope.dynamicPopoverTitle = '';
};
// -----

var TooltipDemoCtrl = function ($scope) {
  $scope.dynamicTooltip = 'Hello, World!';
  $scope.dynamicTooltipText = 'dynamic';
  $scope.htmlTooltip = 'I\'ve been made <b>bold</b>!';
};
// failed Tabs directive ~ cart.html
// var TabsDemoCtrl = function ($scope) {
//   console.log('heyyyyy')
//   $scope.tabs = [
//     { title:'Photo 1', content: $scope.bauble.img1 },
//     { title:'Photo 2', content: $scope.bauble.img2 },
//     { title:'Photo 3', content: $scope.bauble.img3 },
//     { title:'Description', content:$scope.bauble.description },
//     { title:'Price', content:$scope.bauble.price}
//   ];
//   console.log($scope.tabs)
  
// };
function CollapseDemoCtrl($scope) {
  $scope.isCollapsed = true;
}


