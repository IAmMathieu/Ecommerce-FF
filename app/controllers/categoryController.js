const res = require('express/lib/response');
const dataMapper = require('../dataMapper');

const categoryController = {
    categoryRender: async (req, res) => {
        
        const category = req.params.categoryId
        let searchCategory = null
        let figurines = null
        const categories = [
            {name: 'Gentil', count: 0},
            {name: 'Méchant', count: 0},
            {name: 'Animal', count: 0}
          ];
        switch (category) {
            case 'gentil':
                searchCategory = 'Gentil';
                figurines = await dataMapper.getAllFigurinesByCategory(searchCategory);
                break;
    
            case 'mechant':
                searchCategory = 'Méchant';
                figurines = await dataMapper.getAllFigurinesByCategory(searchCategory);
                break;
    
            case 'animal':
                searchCategory = 'Animal';
                figurines = await dataMapper.getAllFigurinesByCategory(searchCategory);
                break;
        }
        res.render('accueil', { figurines, categories })
    }
}


module.exports = categoryController;