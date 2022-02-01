const path = require('path');
const dataMapper = require('../dataMapper');


const mainController = {

  // méthode pour la page d'accueil
  homePage: async (req, res) => {
    const figurines = await dataMapper.getAllFigurines();
    res.render('accueil', { figurines });
  },

  // méthode pour la page article
  articlePage: async (req, res) => {
    const articleId = req.params.articleId;
    const figurine = await dataMapper.getOneFigurine(articleId);
    const reviews = await dataMapper.getFigurineReview(articleId)

    res.render('article', { figurine, reviews });
  }

};


module.exports = mainController;
