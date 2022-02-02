const dataMapper = require('../dataMapper');


const bookmarksController = {
  
  // méthode pour afficher les favoris
  bookmarksPage: (req, res) => {
      res.render('favoris', { bookmarks: req.session.bookmarks });
  },
  addFavoris: async (req, res) => {
    const figurineId = Number(req.params.figurineId); // on récupère l'id de la figurine incluse dans l'adresse de l'article /bookmarks/add/:figurineId
    try {
      const figurine = await dataMapper.getOneFigurine(figurineId); // On fait une requete SQL getOneFigurine avec l'argument figurineId ce qui retourne la data de l'article voulu
      // const figurine = figurineArray[0]; // on récupère le 1er objet de l'array retourné par la requete SQL

      if (!req.session.bookmarks) {
        req.session.bookmarks = []
      }
      
      if (!req.session.bookmarks.find((oneFig) => oneFig.id === figurineId)) { 
      req.session.bookmarks.push(figurine) ///// CHANGER ICI figurine >> figurine[0]
      res.redirect('/bookmarks')
    } else {
      res.redirect('/bookmarks')
    }
    
    } catch (error) {
      console.log(error);
    }
    
  },
  deleteFavoris: async (req, res) => {
    const figurineId = Number(req.params.slug);
    console.log(figurineId);
    console.log(req.session.bookmarks);

    if (req.session.bookmarks) {
      req.session.bookmarks = await req.session.bookmarks.filter(oFig => oFig.id !== figurineId); //// CHANGER ici ofig === figurine >>>> ofig.id !== figurine.id
  }
  res.redirect('/bookmarks')
}};


module.exports = bookmarksController;

// const userController = {
//   viewLogin(req, res) {
//       res.render('login');
//   },
//   loginAction(req, res) {

//       // je vais stocker le user dans ma SESSION
//       // attention, pour manipuler la session, c'est bien REQ.session
//       // et non pas RES.session :) hé hé hé :) 
//       req.session.first_name = req.body.first_name;

//       res.redirect('/');
//   }
// }

// module.exports = userController;
