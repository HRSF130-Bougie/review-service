const express = require('express');

const app = express();
const port = 3000;
const path = require('path');

const bodyParser = require('body-parser');

const db = require('../database');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.get('/api/reviews', (req, res) => {
  const q = 'SELECT * FROM review LEFT JOIN hotels ON hotelID = hotels.id ';
  db.seed();
  db.connection.query(q, (err, data) => {
    if (err) {
      res.status(400).send();
    } else {
      res.status(200).send(data);
    }
  });
});

// // app.get('/api/review', (req, res) => {
// //   const q = 'SELECT * FROM review';
// //   db.seed();
// //   db.connection.query(q, (err, data) => {
// //     if (err) {
// //       res.status(400).send();
// //     } else {
// //       res.status(200).send(data);
// //     }
// // });
// });

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening at http://localhost:${port}`);
});
