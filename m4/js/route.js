(function(){
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);


RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // fallback route
  $urlRouterProvider.otherwise('/');

  $stateProvider

  // home page
  .state('home', {
    url: '/',
    templateUrl: 'js/home/home.html'
  })

  // categories
  .state('categories', {
    url: '/categories',
    templateUrl: 'js/categories/categories.html',
    controller: 'CatController as $ctrl',
    resolve: {
      categories: ['MenuDataService', function(svc) {
        return svc.getAllCategories();
      }]
    }
  })

  // items
  .state('items', {
    url: '/items/{id}',
    templateUrl: 'js/items/items.html',
    controller: 'ItemsController as $ctrl',
    resolve: {
      catItems: ['MenuDataService', '$stateParams', '$state', function(svc, $stateParams, $state) {
        return svc.getItemsForCategory($stateParams.id)
                  .then(function(data){
                    if(data.menu_items.length) {
                      return data;
                    } else {
                      $state.go('categories');
                    }
                  },
                  function(error){
                    $state.go('categories');
                  });
      }]
    }
  });

}

})()
