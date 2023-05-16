require('dotenv').config();

const Pool = require('pg').Pool
const pool = new Pool({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT
})

const GetCartItems = async(req, res)=> {
    const {
        userId,
        name
    } = req.user;

    if(!req.user)
    {
        throw new Error('Unauthenticated');
    }

    try {
        const items = await pool.query(
            `SELECT * FROM "cartItems"
            RIGHT JOIN products
            ON productId = id
            WHERE userId = $1`, 
            [userId]);

        res.status(200).json(items.rows)
    }
    catch(err)
    {
        throw err;
    }   
}



module.exports = {
    GetCartItems
}