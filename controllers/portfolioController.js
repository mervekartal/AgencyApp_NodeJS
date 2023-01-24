const Portfolio = require('../models/Portfolio')
const fs = require('fs')

// exports.createPortfolio = async (req, res) => {  
//     const course = await Portfolio.create(req.body)
//     try{
//         res.status(201).json({
//             status: 'success',
//             portfolio: portfolio
//         })
//     }catch(error){
//         res.status(400).json({
//             status: 'fail',
//             error
//         })
//     }
// }

exports.createPortfolio = async (req, res) => {  
    const portfolio = await Portfolio.create(req.body)
    try{
        res.status(201).json({
            status: 'success',
            portfolio: portfolio
        })        
    }catch(err){
        res.status(400).json({
            status: 'fail',
            err    
        })
    }
}

exports.getAllPortfolios = async (req,res) => {
    try{
    const portfolios = await Portfolio.find({}).sort('-createdAt')
        res.status(200).render('portfolios', {
            portfolios,
            page_name: "portfolios"
        })
    }catch(error){
         res.status(400).json({
         status: 'fail',
         error

        })
    }
}
