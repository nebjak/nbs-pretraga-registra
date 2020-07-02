const { JSDOM } = require('jsdom');

const URL = 'https://www.nbs.rs/rir_pn/pn_rir.html.jsp?type=rir_results&lang=SER_CIR&konverzija=yes&pib=';

function getFromTable(resultRows, row, column) {
  return resultRows[row].children[column].textContent.trim();
}

function getMB(resultRows) {
  return getFromTable(resultRows, 4, 3);
}

function getPIB(resultRows) {
  return getFromTable(resultRows, 5, 3);
}

function getName(resultRows) {
  return getFromTable(resultRows, 1, 1);
}

function getAddress(resultRows) {
  return getFromTable(resultRows, 2, 1);
}

function getPlace(resultRows) {
  return getFromTable(resultRows, 3, 1);
}

function getMunicipality(resultRows) {
  return getFromTable(resultRows, 4, 1);
}

function getActivity(resultRows) {
  return getFromTable(resultRows, 5, 1);
}

function getBankData(resultRows) {
  const data = [];

  for (let i = 2; i < resultRows.length; i += 9) {
    const bank = {
      number: getFromTable(resultRows, i, 3),
      status: getFromTable(resultRows, i + 1, 3),
      opened: new Date(
        Date.parse(
          getFromTable(resultRows, i + 4, 3)
            .split('.')
            .reverse()
            .join('-')
        )
      ),
      bank: getFromTable(resultRows, i + 4, 1),
    };

    data.push(bank);
  }

  return data;
}

/**
 * @param {(string | number)} pib
 * @returns {Promise.<CompanyData>}
 */
async function getCompanyData(pib) {
  const dom = await JSDOM.fromURL(URL + pib);
  const result = dom.window.document.querySelector('table#result').rows;

  const company = {
    mb: getMB(result),
    pib: getPIB(result),
    name: getName(result),
    address: getAddress(result),
    place: getPlace(result),
    municipality: getMunicipality(result),
    activity: getActivity(result),
    banks: getBankData(result),
  };

  return company;
}

module.exports = {
  getCompanyData,
};

/**
 * @typedef {Object} BankAccount
 * @property {string} number - Account number
 * @property {string} status - Status
 * @property {Date} opened - Date when account opened
 * @property {string} bank - Name of bank
 */

/**
 * @typedef {Object} CompanyData
 * @property {string} mb - Maticni broj
 * @property {string} pib - PIB
 * @property {string} name - Name
 * @property {string} address - Address
 * @property {string} place - Place
 * @property {string} municipality - Municipality
 * @property {string} activity - Activity
 * @property {Array.<BankAccount>} banks - Array of bank accounts
 */
