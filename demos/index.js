const { getCompanyDataByPIB, getCompanyDataByMB } = require('../src/index');

// getCompanyDataByPIB(105359737)
//   .then((result) => {
//     console.dir(result);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// (async () => {
//   try {
//     const result = await getCompanyDataByPIB(105359737);
//     console.dir(result);
//   } catch (error) {
//     console.error(error);
//   }
// })();

// getCompanyDataByMB('20365099')
//   .then((result) => {
//     console.dir(result);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

getCompanyDataByMB('999')
  .then((result) => {
    console.dir(result);
  })
  .catch((error) => {
    console.error(error);
  });
