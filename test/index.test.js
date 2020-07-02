const expect = require('chai').expect;
const { getCompanyData } = require('../src/index');

describe('getCompanyData', () => {
  it('rejects promise with "No result" for nonexiting PIB', async () => {
    try {
      const result = await getCompanyData(111);
    } catch (error) {
      expect(error).to.be.Throw;
      expect(error).to.be.equal('No result!');
    }
  });

  it('returns property name for valid PIB', () => {
    getCompanyData(105359737).then((result) => {
      expect(result.name).to.match(/google/i);
    });
  });

  it('returns property mb for valid PIB', () => {
    getCompanyData(105359737).then((result) => {
      expect(result.mb).to.be.equal('20365099');
    });
  });

  it('returns property pib for valid PIB', () => {
    getCompanyData(105359737).then((result) => {
      expect(result.pib).to.be.equal('105359737');
    });
  });

  // TODO: test all properties
});
