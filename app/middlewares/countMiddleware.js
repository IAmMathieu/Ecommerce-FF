const dataMapper = require('../dataMapper');

const countMiddleware = {
    countCategories: async (category) => { 
        try {
           const count = await dataMapper.getCategoryCount(category)
           return count.count
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = countMiddleware;