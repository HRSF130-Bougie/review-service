const mysql = require('mysql');
// const faker = require('faker');
const faker = require('faker/locale/en');

const connection = mysql.createConnection({
  user: 'root',
  password: 'Heno12345$',
  database: 'reviewService',
});

const seed = () => {
  connection.query('DELETE FROM review');
  connection.query('DELETE FROM hotels');
  for (let i = 0; i < 100; i += 1) {
    const rate1 = (Math.random() * (5.0 - 2.0) + 2.0).toFixed(2);
    const rate2 = (Math.random() * (5.0 - 2.0) + 2.0).toFixed(1);
    const rate3 = (Math.random() * (5.0 - 2.0) + 2.0).toFixed(1);
    const rate4 = (Math.random() * (5.0 - 2.0) + 2.0).toFixed(1);
    const rate5 = (Math.random() * (5.0 - 2.0) + 2.0).toFixed(1);
    const rate6 = (Math.random() * (5.0 - 2.0) + 2.0).toFixed(1);
    const rate7 = (Math.random() * (5.0 - 2.0) + 2.0).toFixed(1);
    // eslint-disable-next-line quotes

    const q1 = 'INSERT INTO hotels (id, rate,cleanRate,  commRate, checkinRate, acuurRate, locRate, valueRate) VALUES (?,?,?,?,?,?,?,?)';
    const param = [i, rate1, rate2, rate3, rate4, rate5, rate6, rate7];

    connection.query(q1, param, (err, data) => {
      if (err) {
      // eslint-disable-next-line no-console
        console.log(err);
      } else {
      // eslint-disable-next-line no-console
        console.log(data);
      }
    });
  }
  const n = Math.floor(Math.random() * 40) + 1;
  for (let i = 1; i <= n; i += 1) {
    const visitorName1 = faker.name.findName();

    // eslint-disable-next-line no-console
    console.log(visitorName1);
    const avatar1 = faker.image.avatar(); // console.log('AVATAR' ,avatar1);
    const review1 = faker.lorem.paragraph();
    const hotelID = Math.floor(Math.random() * (100 - 1) + 1);
    // eslint-disable-next-line prefer-template
    const date = faker.date.month() + ' ' + faker.random.number({ min: 2017, max: 2020 });

    // eslint-disable-next-line quotes
    const q = `INSERT INTO review (visitorName , avatar, review , col , hotelID) VALUES (?,?,?,?,?)`;
    const params = [visitorName1, avatar1, review1, date, hotelID];
    connection.query(q, params, (err, data) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.log(err);
      } else {
        // eslint-disable-next-line no-console
        console.log(data);
      }
    });
  }
};

module.exports = { seed, connection };
