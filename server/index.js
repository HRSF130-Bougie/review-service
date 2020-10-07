const express = require('express');

const app = express();
const port = 3003;
const path = require('path');

const bodyParser = require('body-parser');

const db = require('../database');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.get('/api/reviews/:id', (req, res) => {

  const {id} = req.params;
  console.log("ID", id);
    
  const q = `SELECT * FROM review, hotels WHERE hotels.id =${id} AND hotels.id = review.hotelID`;
  console.log(q)
  db.query(q, (err, data) => {
    if (err) {
      res.status(400).send();
    } else {
      res.status(200).send(data);
    }
  });
});

// // app.get('/api/review', (req, res) => {
// //   const q = 'SELECT * FROM review';
// //   db.seed();cc/ //   db.connection.query(q, (err, data) => {
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
