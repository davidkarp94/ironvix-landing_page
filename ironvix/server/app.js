const express = require('express');
const mysql = require('mysql');
const { urlencoded, json } = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const env = require('dotenv');

env.config();

const app = express();

app.use(cors());

app.use(json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('port', process.env.PORT || 9000);

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
});

db.connect((err) => {
    if(err) {
        console.log(err.message)
        return;
    }
    console.log("Database Connected Successfully");
});

//middlewares

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

//routes

app.get('/', (req, res) => {
    res.send('Server On')
});

//server running

app.listen(app.get('port'), () => {
    console.log('Server Running On Port:', app.get('port'))
});