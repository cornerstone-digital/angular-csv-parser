describe('DIRECTIVE: InputChange', function() {
  beforeEach(angular.mock.module('app.csvParser'));
  
  describe('SCENARIO: Rendering', function() {
    var $compile,
        $scope,
        $template;
  
    beforeEach(inject(function(_$compile_, _$rootScope_) {
      $compile = _$compile_;
      $scope = _$rootScope_.$new();
      $template = $compile("<input type='file' input-change='processCSV' readonly style='display: none;'>")($scope);
      
    }));
  
    it('should exist', function() {
      expect($template).toBeDefined();
      
    });
  });
});
