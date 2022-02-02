const dataMapper = require('../dataMapper');

const countMiddleware = {
    countCategories: async (category) => { 
        try {
           const count = await dataMapper.getCategoryCount(category)
           return count.count
        } catch (error) {
            console.log(error);
        }
    },
    countNote: async (figurineId) => {
        let globalNote = 0;
        let reviews = [];
        reviews = await dataMapper.getFigurineReview(figurineId);
        for (const review of reviews) {
            globalNote += review.note
        }
        return globalNote / reviews.length
    }
}

module.exports = countMiddleware;