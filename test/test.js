const chai = require('chai');
chai.should();
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should check for the length and be right', function() {
      [1,2,3].length.should.eql(3);
    });
  });
});
