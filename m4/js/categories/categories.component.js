(function(){
'use strict';

angular.module('MenuApp')
.component('categoriesList', {
  templateUrl: 'js/categories/categories.component.html',
  bindings: {
    items: '<'
  }
});

})()
