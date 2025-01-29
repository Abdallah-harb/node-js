const { Pool } = require('pg');
const dotenv = require('dotenv');
dotenv.config();

const db_Config = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    connectionTimeoutMillis: 300,
    idleTimeoutMillis: 200,
    max: 20,
    allowExitOnIdle: true,
};

const pool = new Pool(db_Config);
pool.on('connect', (client) => {
    console.log('data base is connected .!');
})

pool.on('error', (err) => {
    console.error('Unexpected error on idle client', err);
    process.exit(-1);
});

module.exports = pool;