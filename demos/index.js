const { getCompanyData } = require('../src/index');

getCompanyData(110714220).then((result) => {
  console.dir(result);
});
