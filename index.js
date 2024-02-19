const createError = require('http-errors');
const express = require('express');
const mysql = require('mysql');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

(async () => {
    try {
        await mysql.connect("mysql://localhost:3306/Weblog")
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})()

const router = require('./routes/index');
app.use('/', router);

app.use(function (req, res, next) {
    next(createError(404));
});

const PORT = 5600;
app.listen(PORT, console.log(`Server running port ${PORT}`));