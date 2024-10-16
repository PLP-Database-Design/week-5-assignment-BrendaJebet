// Import some dependencies/ packages 

const express = require('express');
const app = express(); 
const mysql = require('mysql2'); 
const cors = require('cors');
const dotenv = require('dotenv'); 

app.use(express.json());
app.use(cors());
dotenv.config(); 

// connection to the database 
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME 
});

// Check if there is a connection 
db.connect((err) => {
    // If no connection 
    if(err) return console.log("Error connecting to MYSQL");

    //If connect works successfully
    console.log("Connected to MYSQL as id: ", db.threadId); 
}) 

//   // Question 1
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/data', (req,res) => {
    
    db.query('SELECT * FROM patients', (err, results) =>{
        if (err){
            console.error(err);
            res.status(500).send('Error Retrieving data')
        }else {
            //Display the records to the browser 
            res.render('data', {results: results});
        }
    });
});

 // Question 2
 app.set('view engine', 'ejs');
 app.set('views', __dirname + '/views');
 
 app.get('/data', (req,res) => {
     
     db.query('SELECT * FROM providers', (err, results) =>{
         if (err){
             console.error(err);
             res.status(500).send('Error Retrieving data')
         }else {
             //Display the records to the browser 
             res.render('data', {results: results});
         }
     });
 });

 // Question 3
 app.set('view engine', 'ejs');
 app.set('views', __dirname + '/views');
 
 app.get('/data', (req,res) => {
     
     db.query('SELECT * FROM patients', (err, results) =>{
         if (err){
             console.error(err);
             res.status(500).send('Error Retrieving data')
         }else {
             //Display the records to the browser 
             res.render('data', {results: results});
         }
     });
 });

// Question 4
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/data', (req,res) => {
    
    db.query('SELECT * FROM providers', (err, results) =>{
        if (err){
            console.error(err);
            res.status(500).send('Error Retrieving data')
        }else {
            //Display the records to the browser 
            res.render('data', {results: results});
        }
    });
});


// Start the server 
app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`);

    // Sending a message to the browser 
    console.log('Sending message to browser...');
    app.get('/', (req,res) => {
        res.send('Server Started Successfully!');
    });

});