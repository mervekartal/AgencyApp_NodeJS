const Portfolio = require('../models/Portfolio')

exports.createPortfolio = async (req,res) => {
//template hazır olmadığı için json dosyası gönderildi.
    const portfolio = await Portfolio.create(req.body)
    try{
        res.status(201).json({
            status: 'success',
            portfolio: portfolio
        })
    }catch{
        res.status(400).json({
            status: 'fail',
            error
        })
    }
}
