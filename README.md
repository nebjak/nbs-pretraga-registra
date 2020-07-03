# Pretraga NBS registra

Pretraga NBS registra pravnih lica po PIB-u i matičnom broju.

## Pretraga po PIB-u

### Promise .then() - .catch()

```javascript
getCompanyDataByPIB(105359737)
  .then((result) => {
    console.dir(result);
  })
  .catch((err) => {
    console.error(err);
  });

// { mb: '20365099',
//   pib: '105359737',
//   name: 'GOOGLE DOO BEOGRAD',
//   address: 'MARSALA BIRJUZOVA 47/18',
//   place: 'BEOGRAD 3',
//   municipality: 'Beograd-Stari Grad',
//   activity: 'Delatnost reklamnih agencija',
//   banks:
//    [ { number: '165-0000000014614-47',
//        status: 'uključen',
//        opened: 2008-02-06T00:00:00.000Z,
//        bank: 'Addiko Bank AD Beograd' },
//      { number: '165-0007011599405-60',
//        status: 'račun ne podleže blokadi',
//        opened: 2020-04-21T00:00:00.000Z,
//        bank: 'Addiko Bank AD Beograd' } ] }
```

### async/await

```javascript
(async () => {
  try {
    const result = await getCompanyDataByPIB(105359737);
    console.dir(result);
  } catch (error) {
    console.error(error);
  }
})();
```

## Pretraga po matičnom broju

```javascript
getCompanyDataByMB('17402200')
  .then((result) => {
    console.dir(result);
  })
  .catch((error) => {
    console.error(error);
  });

// { mb: '17402200',
//   pib: '100058325',
//   name:
//    'PREDUZEĆE ZA TRGOVINU I SERVISIRANJE SOFTVERA MICROSOFT SOFTWARE DOO, BEOGRAD (NOVI BEOGRAD)',
//   address: 'ŠPANSKIH BORACA 3',
//   place: 'BEOGRAD-NOVI BEOGRAD',
//   municipality: 'Beograd-Novi Beograd',
//   activity: 'Ostale usluge informacione tehnologije',
//   banks:
//    [ { number: '265-1100310000223-59',
//        status: 'uključen',
//        opened: 2002-12-23T00:00:00.000Z,
//        bank: 'Raiffeisen banka A.D.- Beograd' },
//      { number: '265-1100310006913-68',
//        status: 'račun ne podleže blokadi',
//        opened: 2020-04-21T00:00:00.000Z,
//        bank: 'Raiffeisen banka A.D.- Beograd' } ] }
```

## Više primera

[DEMO](https://github.com/nebjak/nbs-pretraga-registra/tree/master/demos)

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request
