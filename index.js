// Toujours commencer par importer les variables d'environnement !
require('dotenv').config();

const express = require('express');
const ejs = require('ejs')
const session = require('express-session')
// on importe le router
const router = require('./app/router');
// const sessionMiddleware = require('./app/middlewares/sessionMiddleware')

// un peu de config
const PORT = process.env.PORT || 5000;


const app = express();

app.use(session({
  secret: process.env.SECRET,
  resave: true,
  saveUninitialized: true,
  cookie: {
    secure: false,
    maxAge: (1000 * 60 * 60) // milliseconds * secondes * minutes
  }
}));


app.set('views', './app/views');
app.set('view engine', 'ejs');

// servir les fichiers statiques qui sont dans "integration"
app.use(express.static('integration'));

// un middleware pour refiler les infos de la session
// a mes vues
// app.use(sessionMiddleware);

// function sessionMiddleware(req, res, next) {
//   // si dans ma session jai un prénom
//   if (req.session.first_name) {
//       // je le range dans res.locals
//       res.locals.first_name = req.session.first_name;
//   }
//   next();
// }

// module.exports = sessionMiddleware;
// app.use(sessionMiddleware);
// routage !
app.use(router);


// on lance le serveur
app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});


