function sessionMiddleware(req, res, next) {
    // si dans ma session jai un prénom
    if (req.session.bookmarks) {
        // je le range dans res.locals
        res.locals.bookmarks = req.session.bookmarks;
    }
    next();
}

module.exports = sessionMiddleware;