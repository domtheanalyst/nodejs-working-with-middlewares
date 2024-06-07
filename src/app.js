// Variables

const express = require('express');

const app = express();

//const customLogger = require('../src/middlewares/customLogger');

const morgan = require('morgan')

const fs= require('fs')

const path = require('path')

const {getAllBooks, createBook} = require('./controllers/books.controllers');

const validateBookCreation = require('./middlewares/weakValidator');

const accessLogStream = fs.createWriteStream(path.join(__dirname, 'logs', 'access.log'), { flags: 'a' })




// Middlewares

app.use(express.json());

//app.use(customLogger)

app.use(morgan('combined', { stream: accessLogStream }))


// Routes

app.get('/books', getAllBooks);

app.post('/books', validateBookCreation, createBook)


module.exports = app;