
exports.getIndexPage = (req,res) => {
    res.status(200).render('index',{
        page_name: "index"
    })
}
exports.getAddPage = (req,res) => {
    res.status(200).render('add',{
        page_name: "add"
    })
}
exports.getPortfoliosPage = (req,res) => {
    res.status(200).render('portfolios',{
        page_name: "portfolios"
    })
}
