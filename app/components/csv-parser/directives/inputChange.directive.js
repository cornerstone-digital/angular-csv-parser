(function () {
  'use strict';
  angular.module('app.csvParser')
         .directive("inputChange", function () {
           return {
             restrict: 'A', link: function (scope, element, attrs) {
               var onChangeFunc = scope.$eval(attrs.inputChange);
               element.bind('change', onChangeFunc);
             }
           }
         });
})();
