
const express = require('express')
const app = express()
const path = require('path')
const ejs = require('ejs')
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const pageController = require('./controllers/pageController')
const Photo = require('./models/Portfolio')


mongoose.set('strictQuery', false)

//connect db
mongoose.connect('mongodb://localhost:27017/agency-db')

process.on('warning', (warning) => {
    console.log(warning.stack);
})

//middlewares
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//Template Engine
app.set("view engine", "ejs")

app.get('/', pageController.getIndexPage) //index
app.get('/portfolios', pageController.getPortfoliosPage) //portfolio

const port = 3000
app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})