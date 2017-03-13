(function(){
'use strict';

angular.module('NarrowItDownApp', [])
.controller('ListController', ListController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', foundItems)
.controller('foundItemsController', foundItemsController)
.constant('API', 'http://davids-restaurant.herokuapp.com');


/******************************************************************************/
function foundItems() {
  var ddo = {
    templateUrl: 'foundItems.html',
    restrict: 'E',
    scope: {
      title: '@',
      items: '<',
      onRemove: '&'
    },
    controller: 'foundItemsController',
    controllerAs: 'list',
    bindToController: true,
    transclude: true,
    bla:42
  };
  return ddo;
}

function foundItemsController() {
  var ctrl = this;

  console.log("XXX dir ctrl : ", ctrl);

}

/******************************************************************************/
ListController.$inject = ['MenuSearchService']
function ListController( svc) {
  var ctrl = this;

  ctrl.filter = "";
  ctrl.title = "Submit a query to see the result";

  function setTitle( data) {
    if(data.length == 1) {
      ctrl.title = "One result found !";
    } else if(data.length > 1) {
      ctrl.title = data.length + " results found !";
    } else {
      ctrl.title = "Nothing found";
    }
  }

  ctrl.getMenuItems = function() {
    if(ctrl.filter) {
      var promise = svc.getMenuItems(ctrl.filter);
      promise.then(function(data){
        ctrl.items = data;
        setTitle(data);
      });
    } else {
      ctrl.title = "Nothing found";
    }
  };

  ctrl.removeItem = function(index) {
    ctrl.items.splice(index, 1);
    setTitle(ctrl.items);
  };

}


/******************************************************************************/
MenuSearchService.$inject = [ '$http', 'API'];
function MenuSearchService( $http, API) {
  var svc = this;

  svc.getMenuItems = function(q) {
    return $http({
      url: (API + '/menu_items.json')
    }).then(function(result){
      var items;
      if(q){
        items = [];
        var ql = q.toLowerCase();
        for(var i in result.data.menu_items) {
          var toCheck = result.data.menu_items[i];
          if(toCheck.name.toLowerCase().indexOf(ql) != -1) {
            items=items.concat(toCheck);
          }
        }
      }
      else {
        items = result.data.menu_items;
      }
      return items;
    });
  };
};


})()
