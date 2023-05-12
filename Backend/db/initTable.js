const Pool = require('pg').Pool;
require('dotenv').config();

const pool = new Pool({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT
});

const queries = [
    `CREATE TABLE IF NOT EXISTS "products" (
	    id SERIAL,
	    name VARCHAR(100) NOT NULL, 
        imageUrl VARCHAR(100) NOT NULL, 
        price VARCHAR(100) NOT NULL, 
        quantity VARCHAR(100) NOT NULL, 
        description VARCHAR(100) NOT NULL, 
        onSale VARCHAR(100) NOT NULL, 
        salePrice VARCHAR(100) NOT NULL,
	    PRIMARY KEY (id)
    );`,
    `CREATE TABLE IF NOT EXISTS "users" (
	    id SERIAL,
	    username VARCHAR(100) NOT NULL, 
        password VARCHAR(100) NOT NULL, 
        email VARCHAR(100) NOT NULL, 
        isTempUser BOOLEAN NOT NULL,
        PRIMARY KEY (id)
    );`


];


const execute = async (query) => {
    try {
        await pool.connect();     // gets connection
        await pool.query(query);  // sends queries
        return true;
    } catch (error) {
        console.error(error.stack);
        return false;
    }
};


//For each table type we have, create the table if it doesn not already exist.
const InitTables = async()=>{
    for(const element of queries)
    {
        await execute(element).then(result => {
            console.log('Table created.') 
        }) 
    }
}

module.exports = {InitTables}