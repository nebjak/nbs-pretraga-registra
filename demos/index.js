const { getCompanyData } = require('../src/index');

getCompanyData(105359737)
  .then((result) => {
    console.dir(result);
  })
  .catch((err) => {
    console.error(err);
  });

(async () => {
  try {
    const result = await getCompanyData(105359737);
    console.dir(result);
  } catch (error) {
    console.error(error);
  }
})();
