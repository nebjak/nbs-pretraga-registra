const { getCompanyData } = require('../src/index');

getCompanyData(106644707).then((result) => {
  console.dir(result);
});
