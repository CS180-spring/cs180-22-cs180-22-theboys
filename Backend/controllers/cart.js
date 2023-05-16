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

    console.log(req.user)

    if(!req.user)
    {
        throw new Error('Unauthenticated');
    }

    try {
        const items = await pool.query(
            `SELECT * FROM "cartItems"
            RIGHT JOIN products
                ON productId = cartProductId
            WHERE cartUserId = $1`, 
            [userId]);

        console.log(items.rowCount);
        res.status(200).json({payload : items.rows})
    }
    catch(err)
    {
        throw err;
    }   
}

const GetSingleCartItem = async(req, res)=> {
    const cartEntryId = req.params.id;
    const userId = req.user.userId;
    try{
        const result = await pool.query(
            `SELECT * FROM "cartItems"
            RIGHT JOIN products
                ON productId = cartProductId
            WHERE cartEntryId = $1 AND cartUserId = $2`,
            [cartEntryId, userId]
        )
        res.status(200).json({payload: result.rows[0]})

    }
    catch(err)
    {
        throw err;
    }
}

const PostCartItem = async(req, res) => {
    const {
        cartProductId,
        cartQuantity
    } = req.body;

    const {userId} = req.user;

    try{
        const results = await pool.query(
            `INSERT into "cartItems" (
                cartProductId,
	            cartUserId,
                cartQuantity
            )
            VALUES (
                $1,
                $2,
                $3
            )
            RETURNING *`,
            [
                cartProductId,
                userId,
                cartQuantity
            ]
        )
        res.status(200).json({msg: `Cart entry created with id: ${results.rows[0].cartentryid}`})
    }
    catch(err)
    {
        throw err;
    }
}

const UpdateCartItem = async(req, res)=> {
    const {userId} = req.user;
    const {cartQuantity} = req.body;
    const cartEntryId = req.params.id;
    try{
        const results = await pool.query(
            `UPDATE "cartItems" SET
                cartQuantity = $1
            WHERE cartEntryId = $2 AND cartUserId = $3
            RETURNING *`,
            [
                cartQuantity,
                cartEntryId,
                userId
            ]
            )
        res.status(200).json({
            msg: `Updated entry with id: ${cartEntryId}`
        })
    }
    catch(err)
    {
        throw err;
    }
}


const DeleteCartItem = async(req, res)=> {
    const {userId} = req.user;
    const cartEntryId = req.params.id;
    try{
        const results = await pool.query(
            `DELETE FROM "cartItems" 
            WHERE cartEntryId = $1 AND cartUserId = $2
            RETURNING *`,
            [
                cartEntryId,
                userId
            ]
            )
        res.status(200).json({
            msg: `Updated entry with id: ${results.rows[0].cartentryid}`
        })
    }
    catch(err)
    {
        throw err;
    }

}


module.exports = {
    GetCartItems,
    GetSingleCartItem,
    PostCartItem,
    UpdateCartItem,
    DeleteCartItem
}