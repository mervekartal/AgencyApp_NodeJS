
const express = require('express')
const app = express()
const path = require('path')
const ejs = require('ejs')
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const pageController = require('./controllers/pageController')
const portfolioController = require('./controllers/portfolioController')
const Photo = require('./models/Portfolio')


mongoose.set('strictQuery', false)

//connect db
mongoose.connect('mongodb://localhost:27017/agency-db').then(() => {
    console.log('DB Connection Successful')
}).catch((err) => {
    console.log(err)
})

process.on('warning', (warning) => {
    console.log(warning.stack);
})

//middlewares
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//Template Engine
app.set("view engine", "ejs")

//routes
app.get('/', pageController.getIndexPage) //index
app.get('/add', pageController.getAddPage) //add
app.get('/services', pageController.getServicesPage) //services
app.get('/about', pageController.getAboutPage) //about
app.get('/team', pageController.getTeamPage) //team
app.get('/contact', pageController.getContactPage) //team
// app.get('/portfolios', pageController.getPortfoliosPage) //portfolios
app.post('/portfolios', portfolioController.createPortfolio) //add portfolio - post operation
app.get('/portfolios',portfolioController.getAllPortfolios) //portfolios - all portfolio


const port = 3000
app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})