(function () {
  'use strict';
  
  angular.module('app.csvParser')
         .controller('ParserCtrl', function ($scope, ParserService) {
    
           $scope.fileContent = {};
    
           $scope.titleCase = function (str) {
             // replace underscores with space
             str = str.replace(/_/g, ' ');
      
             // Now capitalise first letter of each word
             return str.replace(/\w\S*/g, function (txt) {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
           };
    
           $scope.processCSV = function (event) {
              return new Promise(function(resolve, reject) {
                ParserService.CSVToObject(event.target.files[ 0 ])
                             .then((function (csvObject) {
                               //console.log(csvObject);
                               $scope.$apply(function () {
                                 $scope.fileContent = csvObject;
                                 resolve();
                               });
                             }));
              });
           };
    
         });
})();
