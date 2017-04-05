(function(){
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);

ItemsController.$inject = ['catItems'];
function ItemsController(catItems) {
  var $ctrl=this;

  $ctrl.items = catItems;

};

})()
