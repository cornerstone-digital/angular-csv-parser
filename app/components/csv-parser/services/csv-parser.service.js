(function () {
  'use strict';
  
  angular.module('app.csvParser')
         .factory('ParserService', function ($q) {
           return {
             ReadFile: function (file) {
               return new Promise(function (resolve, reject) {
                 var reader = new FileReader();
  
                 reader.onloadend = function (evt) {
                   resolve(evt.target.result);
                 };
                 
                 reader.readAsText(file);
                 
               });
             },
      
             ParseCSV: function (csvData) {
               return new Promise(function (resolve, reject) {
                 var lines = csvData.split(/\r\n|\n/), csvObject = {
                   headers: lines[ 0 ].split(","), data: []
                 };
          
                 for (var i = 1; i < lines.length; i++) {
            
                   var obj         = {};
                   var currentLine = lines[ i ].split(",");
            
                   for (var j = 0; j < csvObject.headers.length; j++) {
                     obj[ csvObject.headers[ j ] ] = currentLine[ j ];
                   }
            
                   csvObject.data.push(obj);
                 }
          
                 resolve(csvObject);
               });
             },
      
             CSVToObject: function (csvFile) {
               return this.ReadFile(csvFile)
                          .then(this.ParseCSV);
             }
           }
         });
})();
