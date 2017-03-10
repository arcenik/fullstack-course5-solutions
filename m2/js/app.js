(function(){

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ShoppingListCheckOffService.$inject = []
function ShoppingListCheckOffService() {
  var svc = this;

  var toBuy = [{"name":"cookies #1", "nb": 10},
               {"name":"cookies #2", "nb": 10},
               {"name":"cookies #3", "nb": 10},
               {"name":"cookies #4", "nb": 10},
               {"name":"cookies #5", "nb": 10},
               {"name":"cookies #6", "nb": 10}];

  var bought = []; // start with empty list

  svc.getToBuy = function() { return toBuy; };
  svc.getBought = function() { return bought; };
  svc.isToBuyEmpty = function() { return toBuy.length == 0; };
  svc.isBoughtEmpty = function() { return bought.length == 0; };
  svc.buyItem = function(id) {
    var item = toBuy.splice(id, 1);
    console.log(item[0]);
    bought.push(item[0]);
  };

}


ToBuyController.$inject = ['ShoppingListCheckOffService']
function ToBuyController(svc) {
  var ctrl = this;

  ctrl.getList = function() { return svc.getToBuy(); };
  ctrl.isEmpty = function() { return svc.isToBuyEmpty(); };
  ctrl.buyItem = function(id) { svc.buyItem(id); };
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService']
function AlreadyBoughtController(svc) {
  var ctrl = this;

  ctrl.getList = function() { return svc.getBought(); };
  ctrl.isEmpty = function() { return svc.isBoughtEmpty(); };

}




})()
