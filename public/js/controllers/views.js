'use strict';
angular.module('ngDay2App')
  .controller("ViewsCtrl", function() {
  this.tab = 0;

  this.selectTab = function(setTab) {
    this.tab = setTab;
  };
  this.isSelected = function(checkTab) {
    return this.tab === checkTab;
  };
  })

      
