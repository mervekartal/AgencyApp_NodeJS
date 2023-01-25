const Portfolio = require("../models/Portfolio")

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
exports.getServicesPage = (req,res) => {
    res.status(200).render('services',{
        page_name: "services"
    })
}
exports.getAboutPage = (req,res) => {
    res.status(200).render('about',{
        page_name: "about"
    })
}
exports.getTeamPage = (req,res) => {
    res.status(200).render('team',{
        page_name: "team"
    })
}
exports.getContactPage = (req,res) => {
    res.status(200).render('contact',{
        page_name: "contact"
    })
}
exports.getEditPage = async (req,res) => {
    const portfolio = await Portfolio.findOne({slug: req.params.slug})
    res.status(200).render('edit',{
        portfolio,
        page_name: "edit"
    })
}

