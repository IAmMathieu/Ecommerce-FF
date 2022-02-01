const path = require('path');
const dataMapper = require('../dataMapper');


const bookmarksController = {

  // méthode pour afficher les favoris
  bookmarksPage: (request, response) => {
    const filePath = path.resolve(__dirname + '/../../integration/favoris.html');
    response.sendFile(filePath);
  }

};


module.exports = bookmarksController;
