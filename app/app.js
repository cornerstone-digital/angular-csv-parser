(function () {
  'use strict';
  
  angular.module('app', [ 'ui.router', 'app.csvParser' ])
         .config(function ($stateProvider) {
           var homeState = {
             name: 'home', url: '/', templateUrl: 'components/csv-parser/csv-parser.html'
           };
    
           $stateProvider.state(homeState);
         });
})();
