const mysql = require('mysql');
const faker = require('faker');
const connection = mysql.createConnection({
    user     : 'root',
    password : 'Heno12345$',
    database : 'reviewService'
});


// connection.connect();

//connection.query(`DELETE FROM review`);




const seed = () => {
    connection.query(`DELETE FROM review`);
    const n =  Math.floor(Math.random() * 10) + 1;
    const rate1 = (Math.random() * (5.0 - 2.0) +2.0).toFixed(1);   

for (let i = 1 ; i <= n ; i++){
const visitorName1 = faker.name.findName();

//const reviewsNum1 = n ;
console.log(visitorName1)
const avatar1 = faker.image.avatar();
console.log( "AVATAR" ,avatar1)
const review1 = faker.lorem.paragraph()
const col1 = faker.date.month() + ' ' + faker.random.number({min: 2017 , max : 2020});
// console.log(col1)

const q = `INSERT INTO review ( reviewsNum , rate ,visitorName , avatar, review , col) VALUES ( ?,?,?,?,?,?)`
const params = [n , rate1 , visitorName1, avatar1, review1, col1];
connection.query(q ,params, (err , data) => {
    if (err) {
        console.log(err)
    } else {
        console.log(data)
    }
});
}


}
  // seed();

// const getAllReviwes = (callback) => {

    
//     console.log(seed())
//     const q = `SELECT * FROM review`;
//     connection.query(q , (err, data) => {
//         if(err) {
//             callback(err)
//         } else {
//             callback(data)
//         }

//     })

// }




//module.exports = connection;
module.exports = {seed  , connection};
