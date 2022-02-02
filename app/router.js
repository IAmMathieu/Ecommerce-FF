const express = require('express');

// on importe nos controllers
const mainController = require('./controllers/mainController');
const bookmarksController = require('./controllers/bookmarksController');
const categoryController = require('./controllers/categoryController');



const router = express.Router();

// page d'accueil
router.get('/', mainController.homePage);

// page article
router.get('/article/:articleId', mainController.articlePage);

// page favoris
router.get('/bookmarks', bookmarksController.bookmarksPage)
router.get('/bookmarks/add/:figurineId', bookmarksController.addFavoris );
router.get('/bookmarks/delete/:slug', bookmarksController.deleteFavoris)

router.get('/category/:categoryId', categoryController.categoryRender)

// on exporte le router 
module.exports = router;