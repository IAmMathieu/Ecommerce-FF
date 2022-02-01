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
    const figurineArray = await dataMapper.getOneFigurine(articleId);
    const figurine = figurineArray[0]

    res.render('article', { figurine });
  }

};


module.exports = mainController;
