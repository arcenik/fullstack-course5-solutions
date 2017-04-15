(function(){
'use strict';

angular.module('public')
.controller('MenuMyInfoController', MenuMyInfoController);

MenuMyInfoController.$inject = ['myInfo', 'MenuService'];
function MenuMyInfoController(myInfo, svc) {
  var $ctrl=this;

  $ctrl.info = myInfo;

  if($ctrl.info) {
    svc.getMenuItem($ctrl.info.fav)
       .then(
         function(res) { $ctrl.fav_item = res; },
         function(error) {}
       );
    console.log("XXX $ctrl.fav_item", $ctrl.fav_item);
  } else {
    console.log("XXX no info, no fav_item");
  }

};

})()
