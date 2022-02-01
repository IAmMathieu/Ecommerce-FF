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
                   WHERE id=$1`,
            value: [figurineId]
        }
        const figurine = await client.query(query);
        return figurine.rows
    }
};

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
