describe('SERVICE: ParserService', function() {
  var ParserService,
      csvContent,
      objHeaders,
      objData;
      
  beforeEach(angular.mock.module('app.csvParser'));

  beforeEach(inject(function(_ParserService_) {
    ParserService = _ParserService_;
    
    csvContent = [
      'first_name,last_name,company_name,address,city,county,postal,phone1,phone2,email,web',
      'Aleshia,Tomkiewicz,Alan D Rosenburg Cpa Pc,14 Taylor St,St. Stephens Ward,Kent,CT2 7PP,01835-703597,01944-369967,atomkiewicz@hotmail.com,http://www.alandrosenburgcpapc.co.uk',
      'Evan,Zigomalas,Cap Gemini America,5 Binney St,Abbey Ward,Buckinghamshire,HP11 2AX,01937-864715,01714-737668,evan.zigomalas@gmail.com,http://www.capgeminiamerica.co.uk',
      'France,Andrade,"Elliott, John W Esq",8 Moor Place,East Southbourne and Tuckton W,Bournemouth,BH6 3BE,01347-368222,01935-821636,france.andrade@hotmail.com,http://www.elliottjohnwesq.co.uk',
      'Ulysses,Mcwalters,"Mcmahan, Ben L",505 Exeter Rd,Hawerby cum Beesby,Lincolnshire,DN36 5RP,01912-771311,01302-601380,ulysses@hotmail.com,http://www.mcmahanbenl.co.uk',
      'Tyisha,Veness,Champagne Room,5396 Forth Street,Greets Green and Lyng Ward,West Midlands,B70 9DT,01547-429341,01290-367248,tyisha.veness@hotmail.com,http://www.champagneroom.co.uk',
      'Eric,Rampy,"Thompson, Michael C Esq",9472 Lind St,Desborough,Northamptonshire,NN14 2GH,01969-886290,01545-817375,erampy@rampy.co.uk,http://www.thompsonmichaelcesq.co.uk',
      'Marg,Grasmick,Wrangle Hill Auto Auct & Slvg,7457 Cowl St #70,Bargate Ward,Southampton,SO14 3TY,01865-582516,01362-620532,marg@hotmail.com,http://www.wranglehillautoauctslvg.co.uk',
      'Laquita,Hisaw,In Communications Inc,20 Gloucester Pl #96,Chirton Ward,Tyne & Wear,NE29 7AD,01746-394243,01590-982428,laquita@yahoo.com,http://www.incommunicationsinc.co.uk',
      'Lura,Manzella,Bizerba Usa Inc,929 Augustine St,Staple Hill Ward,South Gloucestershire,BS16 4LL,01907-538509,01340-713951,lura@hotmail.com,http://www.bizerbausainc.co.uk',
      'Yuette,Klapec,Max Video,45 Bradfield St #166,Parwich,Derbyshire,DE6 1QN,01903-649460,01933-512513,yuette.klapec@klapec.co.uk,http://www.maxvideo.co.uk']
      .join('\n');
      
    objHeaders = ['first_name', 'last_name', 'company_name', 'address', 'city', 'county', 'postal', 'phone1', 'phone2', 'email', 'web'];
      
    objData = [
      { first_name: 'Aleshia', last_name: 'Tomkiewicz', company_name: 'Alan D Rosenburg Cpa Pc', address: '14 Taylor St', city: 'St. Stephens Ward', county: 'Kent', postal: 'CT2 7PP', phone1: '01835-703597', phone2: '01944-369967', email: 'atomkiewicz@hotmail.com', web: 'http://www.alandrosenburgcpapc.co.uk' },
      { first_name: 'Evan', last_name: 'Zigomalas', company_name: 'Cap Gemini America', address: '5 Binney St', city: 'Abbey Ward', county: 'Buckinghamshire', postal: 'HP11 2AX', phone1: '01937-864715', phone2: '01714-737668', email: 'evan.zigomalas@gmail.com', web: 'http://www.capgeminiamerica.co.uk' },
      { first_name: 'France', last_name: 'Andrade', company_name: '"Elliott', address: ' John W Esq"', city: '8 Moor Place', county: 'East Southbourne and Tuckton W', postal: 'Bournemouth', phone1: 'BH6 3BE', phone2: '01347-368222', email: '01935-821636', web: 'france.andrade@hotmail.com' },
      { first_name: 'Ulysses', last_name: 'Mcwalters', company_name: '"Mcmahan', address: ' Ben L"', city: '505 Exeter Rd', county: 'Hawerby cum Beesby', postal: 'Lincolnshire', phone1: 'DN36 5RP', phone2: '01912-771311', email: '01302-601380', web: 'ulysses@hotmail.com' },
      { first_name: 'Tyisha', last_name: 'Veness', company_name: 'Champagne Room', address: '5396 Forth Street', city: 'Greets Green and Lyng Ward', county: 'West Midlands', postal: 'B70 9DT', phone1: '01547-429341', phone2: '01290-367248', email: 'tyisha.veness@hotmail.com', web: 'http://www.champagneroom.co.uk' },
      { first_name: 'Eric', last_name: 'Rampy', company_name: '"Thompson', address: ' Michael C Esq"', city: '9472 Lind St', county: 'Desborough', postal: 'Northamptonshire', phone1: 'NN14 2GH', phone2: '01969-886290', email: '01545-817375', web: 'erampy@rampy.co.uk' },
      { first_name: 'Marg', last_name: 'Grasmick', company_name: 'Wrangle Hill Auto Auct & Slvg', address: '7457 Cowl St #70', city: 'Bargate Ward', county: 'Southampton', postal: 'SO14 3TY', phone1: '01865-582516', phone2: '01362-620532', email: 'marg@hotmail.com', web: 'http://www.wranglehillautoauctslvg.co.uk' },
      { first_name: 'Laquita', last_name: 'Hisaw', company_name: 'In Communications Inc', address: '20 Gloucester Pl #96', city: 'Chirton Ward', county: 'Tyne & Wear', postal: 'NE29 7AD', phone1: '01746-394243', phone2: '01590-982428', email: 'laquita@yahoo.com', web: 'http://www.incommunicationsinc.co.uk' },
      { first_name: 'Lura', last_name: 'Manzella', company_name: 'Bizerba Usa Inc', address: '929 Augustine St', city: 'Staple Hill Ward', county: 'South Gloucestershire', postal: 'BS16 4LL', phone1: '01907-538509', phone2: '01340-713951', email: 'lura@hotmail.com', web: 'http://www.bizerbausainc.co.uk' },
      { first_name: 'Yuette', last_name: 'Klapec', company_name: 'Max Video', address: '45 Bradfield St #166', city: 'Parwich', county: 'Derbyshire', postal: 'DE6 1QN', phone1: '01903-649460', phone2: '01933-512513', email: 'yuette.klapec@klapec.co.uk', web: 'http://www.maxvideo.co.uk' }
    ];
    
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
    
    describe('SCENARIO: Reading a file', function() {
      it('should be able to read a file', function(done) {
        
        var file = new Blob([csvContent], {type: 'text/csv'});
  
        ParserService.ReadFile(file)
                     .then(function(content) {
                      expect(content).toBeDefined();
                      expect(content).toEqual(csvContent);
                      done();
                     });
      })
    })
  });
  
  describe('METHOD: CSVToObject', function() {
    it('should exist', function() {
      expect(typeof ParserService.CSVToObject).toBeDefined();
    });
    
    it('should be of type function', function() {
      expect(typeof ParserService.CSVToObject).toBe('function');
    });
    
    describe('SCENARIO: Converting from CSV to Object', function() {
      it('should process the CSV and return an object', function(done) {
        var file = new Blob([csvContent], {type: 'text/csv'});
  
        ParserService.CSVToObject(file)
                     .then(function (csvObject) {
                        expect(csvObject).toBeDefined();
                        expect(typeof csvObject).toBe('object');
                        expect(csvObject.headers).toEqual(objHeaders);
                        expect(csvObject.data).toEqual(objData);
                        done();
                     });
      });
    })
  });
  
  describe('METHOD: ParseCSV', function() {
    it('should exist', function() {
      expect(typeof ParserService.ParseCSV).toBeDefined();
    });
    
    it('should be of type function', function() {
      expect(typeof ParserService.ParseCSV).toBe('function');
    });
    
    describe('SCENARIO: Parsing a CSV string', function() {
      it('should parse the CSV string and return an object', function(done) {
          ParserService.ParseCSV(csvContent)
                       .then(function (csvObject) {
                         expect(csvObject).toBeDefined();
                         expect(typeof csvObject).toBe('object');
                         expect(csvObject.headers).toEqual(objHeaders);
                         expect(csvObject.data).toEqual(objData);
                         done();
                       });
      });
    });
  });
});
