const dataMapper = require('../dataMapper');
const countMiddleware = require('../middlewares/countMiddleware');

const categories = [
  {name: 'Gentil', count: 0},
  {name: 'Méchant', count: 0},
  {name: 'Animal', count: 0}
]

const mainController = {

  // méthode pour la page d'accueil
  homePage: async (req, res) => {
    const figurines = await dataMapper.getAllFigurines();
    for (const category of categories) {
      category.count = await countMiddleware.countCategories(category.name)
    }
    res.render('accueil', { figurines, categories });
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
