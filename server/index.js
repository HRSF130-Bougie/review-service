const express = require('express')
const app = express()
const port = 3000
const db = require('../database')
const bodyParser = require ('body-parser');
const path = require('path');


app.use(bodyParser .json());
app.use(bodyParser .urlencoded({extended: true}));

app.use('/', express.static(path.join(__dirname, '../client/dist')))


app.get('/api/review', (req, res) => {
       //console.log(db)
    //db.connection.query(`DELETE FROM review`);
    const q = `SELECT * FROM review`;
    db.seed();
    db.connection.query(q, (err , data) => {
        if (err) {
            console.log('ERRR' , err)
            res.status(400).send()
        } else {
            res.status(200).send(data)
        }
    } )

})


app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`)
});