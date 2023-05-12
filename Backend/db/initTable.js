const { Client } = require('pg');

const client = new Client({
    user: 'me',
    host: 'localhost',
    database: 'api',
    password: 'password',
    port: '5432'
});

const execute = async (query) => {
    try {
        await client.connect();     // gets connection
        await client.query(query);  // sends queries
        return true;
    } catch (error) {
        console.error(error.stack);
        return false;
    } finally {
        await client.end();         // closes connection
    }
};

const text = `
    CREATE TABLE IF NOT EXISTS "users" (
	    "id" SERIAL,
	    "name" VARCHAR(100) NOT NULL, 
        "imageUrl" VARCHAR(100) NOT NULL, 
        "price" VARCHAR(100) NOT NULL, 
        "quantity" VARCHAR(100) NOT NULL, 
        "description" VARCHAR(100) NOT NULL, 
        "onSale" VARCHAR(100) NOT NULL, 
        "salePrice" VARCHAR(100) NOT NULL,
	    PRIMARY KEY ("id")
    );`;

execute(text).then(result => {
    if (result) {
        console.log('Table created');
    }
});