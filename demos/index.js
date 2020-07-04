const { getCompanyDataByPIB, getCompanyDataByMB } = require('nbs-pretraga-registra');

/***********************
 * getCompanyDataByPIB *
 ***********************/

// Pretraga po PIB-u - Promise .then() .catch()
getCompanyDataByPIB(105359737)
  .then(result => {
    console.dir(result);
  })
  .catch(err => {
    console.error(err);
  });

// Pretragat po PIB-u - async/await
(async () => {
  try {
    const result = await getCompanyDataByPIB(105359737);
    console.dir(result);
  } catch (error) {
    console.error(error);
  }
})();

// Pretraga po PIB-u, .catch() hvata kada ne postoji rezultat pretrage
getCompanyDataByPIB('111111111')
  .then(result => {
    console.dir(result);
  })
  .catch(err => {
    console.error(err);
  });

/***********************
 * getCompanyDataByPIB *
 ***********************/

// Pretraga po maticnom broju - Promise .then() .catch()
getCompanyDataByMB('17402200')
  .then(result => {
    console.dir(result);
  })
  .catch(error => {
    console.error(error);
  });

// Pretraga po MB-u, .catch() hvata kada ne postoji rezultat pretrage
getCompanyDataByMB('999')
  .then(result => {
    console.dir(result);
  })
  .catch(error => {
    console.error(error);
  });
