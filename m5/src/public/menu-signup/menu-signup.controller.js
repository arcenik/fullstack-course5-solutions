(function(){
'use strict';

angular.module('public')
.controller('MenuSignUpController', MenuSignUpController);

MenuSignUpController.$inject = ['MenuService', 'myInfo', '$state'];
function MenuSignUpController(MenuService, myInfo, $state) {
  var $ctrl = this;

  // $ctrl.items = menuItems.menu_items;

  // $ctrl.first_name = "bla";
  // $ctrl.last_name = "bla";
  // $ctrl.phone = "05550000000";
  // $ctrl.email = "bla@bla.bla";
  // $ctrl.fav = "A1";

  if(myInfo) {
    $ctrl.first_name = myInfo.fn;
    $ctrl.last_name = myInfo.ln;
    $ctrl.phone = myInfo.phone;
    $ctrl.email = myInfo.email;
    $ctrl.fav = myInfo.fav;
  }

  $ctrl.fav_item = null;
  $ctrl.fav_error = null;

  $ctrl.submit = function() {
    // console.log("XXX Submit !");
    $ctrl.fav = $ctrl.fav.toUpperCase();
    MenuService.setMyInfo({
      'fn': $ctrl.first_name,
      'ln': $ctrl.last_name,
      'phone': $ctrl.phone,
      'email': $ctrl.email,
      'fav': $ctrl.fav
    });

    MenuService.getMenuItem($ctrl.fav).then(
      function(res) {
        // console.log("Fav item loaded !", res);
        $ctrl.fav_item = res;
        $ctrl.fav_error = null;
        // $state.go('public.myinfo');
      },
      function(error) {
        // console.log("Error loading fav idem", error);
        $ctrl.fav_error = "No such menu number exists";
        $ctrl.fav_item = null;
      }
    );
  };

}

})()
