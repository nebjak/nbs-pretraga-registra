const expect = require('chai').expect;
const { getCompanyDataByPIB, getCompanyDataByMB } = require('../src/index');

describe('getCompanyDataByPIB', () => {
  it('rejects promise for nonexiting PIB', async () => {
    try {
      const result = await getCompanyDataByPIB(111);
    } catch (error) {
      expect(error).to.be.Throw;
      expect(error).to.match(/^Error:/);
    }
  });

  it('returns property name for valid PIB', () => {
    getCompanyDataByPIB(105359737)
      .then((result) => {
        expect(result.name).to.match(/google/i);
      })
      .catch((err) => {});
  });

  it('returns property mb for valid PIB', () => {
    getCompanyDataByPIB(105359737)
      .then((result) => {
        expect(result.mb).to.be.equal('20365099');
      })
      .catch((err) => {});
  });

  it('returns property pib for valid PIB', () => {
    getCompanyDataByPIB(105359737)
      .then((result) => {
        expect(result.pib).to.be.equal('105359737');
      })
      .catch((err) => {});
  });

  it('returns property place for valid PIB', () => {
    getCompanyDataByPIB(105359737)
      .then((result) => {
        expect(result.place).to.match(/beograd/i);
      })
      .catch((err) => {});
  });

  it('returns property municipality for valid PIB', () => {
    getCompanyDataByPIB(105359737)
      .then((result) => {
        expect(result.municipality).to.match(/beograd/i);
      })
      .catch((err) => {});
  });

  it('returns property activity for valid PIB', () => {
    getCompanyDataByPIB(105359737)
      .then((result) => {
        expect(result.activity).to.be.a('string');
      })
      .catch((err) => {});
  });

  it('returns property banks for valid PIB', () => {
    getCompanyDataByPIB(105359737)
      .then((result) => {
        expect(result.banks).to.be.a('array');
      })
      .catch((err) => {});
  });

  it('property banks have property number for valid PIB', () => {
    getCompanyDataByPIB(105359737)
      .then((result) => {
        expect(result.banks).to.have.ownProperty('number').with.typeOf('string');
      })
      .catch((err) => {});
  });

  it('property banks have property status for valid PIB', () => {
    getCompanyDataByPIB(105359737)
      .then((result) => {
        expect(result.banks).to.have.ownProperty('status').with.typeOf('string');
      })
      .catch((err) => {});
  });

  it('property banks have property opened for valid PIB', () => {
    getCompanyDataByPIB(105359737)
      .then((result) => {
        expect(result.banks).to.have.ownProperty('opened').with.typeOf('Date');
      })
      .catch((err) => {});
  });

  it('property banks have property bank for valid PIB', () => {
    getCompanyDataByPIB(105359737)
      .then((result) => {
        expect(result.banks).to.have.ownProperty('bank').with.typeOf('string');
      })
      .catch((err) => {});
  });
});

describe('getCompanyDataByMB', () => {
  it('rejects promise for nonexiting MB', async () => {
    try {
      const result = await getCompanyDataByMB(222);
    } catch (error) {
      expect(error).to.be.Throw;
      expect(error).to.match(/^Error:/);
    }
  });

  it('returns property name for valid MB', () => {
    getCompanyDataByMB(20365099)
      .then((result) => {
        expect(result.name).to.match(/google/i);
      })
      .catch((err) => {});
  });

  it('returns property mb for valid MB', () => {
    getCompanyDataByMB(20365099)
      .then((result) => {
        expect(result.mb).to.be.equal('20365099');
      })
      .catch((err) => {});
  });

  it('returns property pib for valid MB', () => {
    getCompanyDataByMB(20365099)
      .then((result) => {
        expect(result.pib).to.be.equal('20365099');
      })
      .catch((err) => {});
  });

  it('returns property place for valid MB', () => {
    getCompanyDataByMB(20365099)
      .then((result) => {
        expect(result.place).to.match(/beograd/i);
      })
      .catch((err) => {});
  });

  it('returns property municipality for valid MB', () => {
    getCompanyDataByMB(20365099)
      .then((result) => {
        expect(result.municipality).to.match(/beograd/i);
      })
      .catch((err) => {});
  });

  it('returns property activity for valid MB', () => {
    getCompanyDataByMB(20365099)
      .then((result) => {
        expect(result.activity).to.be.a('string');
      })
      .catch((err) => {});
  });

  it('returns property banks for valid MB', () => {
    getCompanyDataByMB(20365099)
      .then((result) => {
        expect(result.banks).to.be.a('array');
      })
      .catch((err) => {});
  });

  it('property banks have property number for valid MB', () => {
    getCompanyDataByMB(20365099)
      .then((result) => {
        expect(result.banks).to.have.ownProperty('number').with.typeOf('string');
      })
      .catch((err) => {});
  });

  it('property banks have property status for valid MB', () => {
    getCompanyDataByMB(20365099)
      .then((result) => {
        expect(result.banks).to.have.ownProperty('status').with.typeOf('string');
      })
      .catch((err) => {});
  });

  it('property banks have property opened for valid MB', () => {
    getCompanyDataByMB(20365099)
      .then((result) => {
        expect(result.banks).to.have.ownProperty('opened').with.typeOf('Date');
      })
      .catch((err) => {});
  });

  it('property banks have property bank for valid MB', () => {
    getCompanyDataByMB(20365099)
      .then((result) => {
        expect(result.banks).to.have.ownProperty('bank').with.typeOf('string');
      })
      .catch((err) => {});
  });
});
