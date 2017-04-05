(function(){
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = [ '$http', 'API'];
function MenuDataService( $http, API) {
  var svc=this;


  svc.getAllCategories = function() {
    return $http({
      url: (API + '/categories.json')
    }).then(function(result){
      return result.data;
    })
  };


  svc.getItemsForCategory = function(categoryShortName) {
    return $http({
      url: (API + '/menu_items.json'),
      params: {
        'category': categoryShortName
      }
    }).then(function(result){
      return result.data;
    })
  };



};


})()
