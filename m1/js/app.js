(function(){
'use strict';

angular.module('MyApp', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

  $scope.dishes = "";
  $scope.msg = "";
  $scope.msgclass = "";

  $scope.doCheck = function() {
    var d = $scope.dishes.split(",");
    var nb = d.length;

    // ignore empty items
    for(var i in d) {
      if(d[i].trim() == "") { nb -= 1; }
    }

    if(nb == 0) {
      $scope.msg = "Please enter data first"
      $scope.msgclass = "error";
    } else if(nb <= 3) {
      $scope.msg = "Enjoy!";
      $scope.msgclass = "ok";
    } else {
      $scope.msg = "Too much!";
      $scope.msgclass = "ok";
    }
  };

}

})()
