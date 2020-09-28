const mysql = require('mysql');
const faker = require('faker');

const connection = mysql.createConnection({
  user: 'root',
  password: 'Heno12345$',
  database: 'reviewService',
});

const seed = () => {
  connection.query('DELETE FROM review');
  connection.query('DELETE FROM hotels');
  const n = Math.floor(Math.random() * 10) + 1;
  const rate1 = (Math.random() * (5.0 - 2.0) + 2.0).toFixed(1);
  const rate2 = (Math.random() * (5.0 - 2.0) + 2.0).toFixed(1);
  const rate3 = (Math.random() * (5.0 - 2.0) + 2.0).toFixed(1);
  const rate4 = (Math.random() * (5.0 - 2.0) + 2.0).toFixed(1);
  const rate5 = (Math.random() * (5.0 - 2.0) + 2.0).toFixed(1);
  const rate6 = (Math.random() * (5.0 - 2.0) + 2.0).toFixed(1);
  const rate7 = (Math.random() * (5.0 - 2.0) + 2.0).toFixed(1);
  // eslint-disable-next-line quotes
  const q1 = `INSERT INTO hotels ( rate, reviewsNum, cleanRate,  commRate, checkinRate, acuurRate, locRate, valueRate) VALUES (?,?,?,?,?,?,?,?)`;
  const param = [rate1, n, rate2, rate3, rate4, rate5, rate6, rate7];

  connection.query(q1, param, (err, data) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    } else {
      // eslint-disable-next-line no-console
      console.log(data);
    }
  });

  for (let i = 1; i <= n; i += 1) {
    const visitorName1 = faker.name.findName();

    // eslint-disable-next-line no-console
    console.log(visitorName1);
    const avatar1 = faker.image.avatar(); // console.log('AVATAR' ,avatar1);
    const review1 = faker.lorem.paragraph();
    // eslint-disable-next-line prefer-template
    const col1 = faker.date.month() + ' ' + faker.random.number({ min: 2017, max: 2020 });

    // eslint-disable-next-line quotes
    const q = `INSERT INTO review (visitorName , avatar, review , col) VALUES (?,?,?,?)`;
    const params = [visitorName1, avatar1, review1, col1];
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
