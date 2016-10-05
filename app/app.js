(function () {
  'use strict';
  
  angular.module('app', [ 'ui.router', 'app.csvParser' ])
         .config(function ($stateProvider, $urlRouterProvider) {
           $urlRouterProvider.otherwise('/');
           
           var homeState = {
             name: 'home', url: '/', templateUrl: 'components/csv-parser/csv-parser.html'
           };
    
           $stateProvider.state(homeState);
         });
})();
