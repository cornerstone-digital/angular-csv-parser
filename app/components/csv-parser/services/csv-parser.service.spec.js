describe('SERVICE: ParserService', function() {
  
  beforeEach(angular.mock.module('app.csvParser'));

  beforeEach(inject(function(_ParserService_) {
    ParserService = _ParserService_;
  }));

  it('should exist', function() {
    expect(ParserService).toBeDefined();
  });
  
  describe('METHOD: ReadFile', function() {
    it('should exist', function() {
      expect(typeof ParserService.ReadFile).toBeDefined();
    });
    
    it('should be of type function', function() {
      expect(typeof ParserService.ReadFile).toBe('function');
    });
  });
  
  describe('METHOD: CSVToObject', function() {
    it('should exist', function() {
      expect(typeof ParserService.CSVToObject).toBeDefined();
    });
    
    it('should be of type function', function() {
      expect(typeof ParserService.CSVToObject).toBe('function');
    });
  });
  
  describe('METHOD: ParseCSV', function() {
    it('should exist', function() {
      expect(typeof ParserService.ParseCSV).toBeDefined();
    });
    
    it('should be of type function', function() {
      expect(typeof ParserService.ParseCSV).toBe('function');
    });
  });
});
