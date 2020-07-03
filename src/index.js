const { JSDOM } = require('jsdom');

// NBS data access url
const URL = 'https://www.nbs.rs/rir_pn/pn_rir.html.jsp?type=rir_results&lang=SER_CIR&konverzija=yes&';

/**
 * @param {Array.<HTMLTableRowElement>} rawResult
 * @param {number} row
 * @param {number} column
 * @returns {string}
 */
function getFromTable(rawResult, row, column) {
  return rawResult[row].children[column].textContent.trim();
}

/**
 * @param {Array.<HTMLTableRowElement>} rawResult
 * @returns {string}
 */
function getMB(rawResult) {
  return getFromTable(rawResult, 4, 3);
}

/**
 * @param {Array.<HTMLTableRowElement>} rawResult
 * @returns {string}
 */
function getPIB(rawResult) {
  return getFromTable(rawResult, 5, 3);
}

/**
 * @param {Array.<HTMLTableRowElement>} rawResult
 * @returns {string}
 */
function getName(rawResult) {
  return getFromTable(rawResult, 1, 1);
}

/**
 * @param {Array.<HTMLTableRowElement>} rawResult
 * @returns {string}
 */
function getAddress(rawResult) {
  return getFromTable(rawResult, 2, 1);
}

/**
 * @param {Array.<HTMLTableRowElement>} rawResult
 * @returns {string}
 */
function getPlace(rawResult) {
  return getFromTable(rawResult, 3, 1);
}

/**
 * @param {Array.<HTMLTableRowElement>} rawResult
 * @returns {string}
 */
function getMunicipality(rawResult) {
  return getFromTable(rawResult, 4, 1);
}

/**
 * @param {Array.<HTMLTableRowElement>} rawResult
 * @returns {string}
 */
function getActivity(rawResult) {
  return getFromTable(rawResult, 5, 1);
}

/**
 * @param {Array.<HTMLTableRowElement>} rawResult
 * @returns {Array.<BankAccount>} rawResult
 */
function getBankData(rawResult) {
  const data = [];

  for (let i = 2; i < rawResult.length; i += 9) {
    const bank = {
      number: getFromTable(rawResult, i, 3),
      status: getFromTable(rawResult, i + 1, 3),
      opened: new Date(
        Date.parse(
          getFromTable(rawResult, i + 4, 3)
            .split('.')
            .reverse()
            .join('-')
        )
      ),
      bank: getFromTable(rawResult, i + 4, 1),
    };

    data.push(bank);
  }

  return data;
}

/**
 * Filter out COVID-19 info line
 * @param {HTMLCollection} tableCollection
 * @returns {Array.<HTMLTableRowElement>}
 */
function filterCovidLine(tableCollection) {
  return Array.prototype.filter.call(
    tableCollection,
    (item) => !Boolean(item.innerHTML.match(/Namenski račun za isplatu direktnih davanja COVID-19\./))
  );
}

/**
 * Search for company data
 * @param {string} query
 * @param {(string | number)} param
 * @returns {Promise.<CompanyData>}
 */
async function getCompanyData(query, param) {
  let dom;
  try {
    dom = await JSDOM.fromURL(`${URL}${query}=${param}`);
  } catch (error) {
    return Promise.reject('Error: Data source. Try again later.');
  }
  const rawResult = dom.window.document.querySelector('table#result');
  let result;

  if (rawResult) {
    result = filterCovidLine(rawResult.rows);
  } else {
    return Promise.reject('Error: No result.');
  }

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

/**
 * Search for company data by PIB (Tax number)
 * @param {(string | number)} pib
 * @returns {Promise.<CompanyData>}
 */
async function getCompanyDataByPIB(pib) {
  try {
    const company = await getCompanyData('pib', pib);
    return company;
  } catch (error) {
    return Promise.reject(error);
  }
}

/**
 * Search for comany data by MB (registration number)
 * @param {(string | number)} mb
 * @returns {Promise.<CompanyData>}
 */
async function getCompanyDataByMB(mb) {
  try {
    const company = await getCompanyData('matbr', mb);
    return company;
  } catch (error) {
    return Promise.reject(error);
  }
}

module.exports = {
  getCompanyDataByMB,
  getCompanyDataByPIB,
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
