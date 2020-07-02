const { getCompanyData } = require('../src/index');

getCompanyData(110714220)
  .then((result) => {
    console.dir(result);
  })
  .catch((err) => {
    console.error(err);
  });

(async () => {
  try {
    const result = await getCompanyData(106644707);
    console.dir(result);
  } catch (error) {
    console.error(error);
  }
})();
