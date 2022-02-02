// 1. require le module
const { Client } = require('pg');

const client = new Client({
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    port: process.env.PGPORT
});

// 2. Créer un client
// const client = new pg.Client(process.env.PG_URL);

// 3. Connecter le client
client.connect();

// 4. Exporter le client connecté
module.exports = client;