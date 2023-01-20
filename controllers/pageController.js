
exports.getIndexPage = (req,res) => {
    res.status(200).render('index',{
        page_name: "index"
    })
}
exports.getPortfoliosPage = (req,res) => {
    res.status(200).render('portfolios',{
        page_name: "portfolios"
    })
}
