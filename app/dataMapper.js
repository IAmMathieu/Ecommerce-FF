const client = require('./database');

const dataMapper = {
    getAllFigurines: async () => {
        const query = {
            text: `SELECT *
                    FROM figurine`     
        };

        const figurines = await client.query(query);
        return figurines.rows
    },
    getOneFigurine: async (figurineId) => {
        const query = {
            text: `SELECT *
                   FROM figurine
                   WHERE id=${figurineId}`,
        }
        const figurine = await client.query(query);
        return figurine.rows[0]
    },
    getAllFigurinesByCategory: async (category) => {
        const query = {
            text: `SELECT *
                   FROM figurine
                   WHERE category='${category}'`
        }
        const result = await client.query(query);
        return result.rows

    },
    getFigurineReview: async (figurineId) => {
        const query = {
            text: `SELECT *
                   FROM review
                   WHERE figurine_id=${figurineId}`,
        }
        const reviews = await client.query(query)
        return reviews.rows
    },
    getCategoryCount: async (category) => {
        const query = {
            text: `SELECT COUNT(*)
                   FROM figurine
                   WHERE category='${category}'`
        }
        const categoryCount = await client.query(query)
        return categoryCount.rows[0]
    }
};

// attention les query retournent toujours un array d'objet ex




module.exports = dataMapper;

//const query = {
//     text: `
//     INSERT INTO student
//     (
//         "first_name",
//         "last_name",
//         "github_username",
//         "promo_id"
//     )
//     VALUES
//     ($1, $2, $3, $4);
// `,
// values: [
//     studentInfo.first_name,
//     studentInfo.last_name,
//     studentInfo.github_username,
//     studentInfo.promoId
// ]
// };
