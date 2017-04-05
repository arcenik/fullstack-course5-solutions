(function(){
'use strict';

angular.module('MenuApp')
.controller('CatController', CatController);

CatController.$inject = ['categories', '$state'];
function CatController(categories, $state) {
  var $ctrl=this;

  $ctrl.categories = categories;
}

})()
