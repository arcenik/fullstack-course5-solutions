(function(){
'use strict';

angular.module('MenuApp')
.component('itemsList', {
  templateUrl: 'js/items/items.component.html',
  bindings: {
    items: '<'
  }
});

})()
