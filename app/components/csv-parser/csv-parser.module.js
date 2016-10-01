(function() {
  'use strict';

  angular.module('app.csvParser', [])
  .controller('ParserCtrl', function ($scope, parserService) {

    $scope.fileContent = {};
  
    $scope.titleCase = function(str) {
        console.log(str);
        // replace underscores with space
        //str.replace(/_/g, ' ');
        
        str = str.replace(/_/g, ' ');
        
        // Now capitalise first letter of each word
        return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    };
    
    $scope.processCSV = function(event) {
      parserService.CSVToObject(event.target.files[0])
        .then((function(csvObject) {
          $scope.$apply(function() {
            $scope.fileContent = csvObject;
          });
        }))
    };

  });
})();
