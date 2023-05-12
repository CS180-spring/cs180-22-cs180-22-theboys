const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'nodePG123!',
    port: '5432'
})

const GetProducts = async (req, res) => {
    pool.query('SELECT * FROM products ORDER BY id ASC', (err, results) => {
        if(err)
        {
            console.log(err);
            throw err;
        }
        res.status(200).json(results.rows)
    })
}

const GetProductById = async (req, res)=>{
    const id = req.params.id;

    pool.query('SELECT * FROM products WHERE id = $1', [id], (err, results)=>{
        if(err)
        {
            console.log(err);
            throw err;
        }
        res.status(200).json(results.rows);
    })
}

const CreateProduct = async (req, res)=> {    
    const {
        name, 
        imageUrl, 
        price, 
        quantity, 
        description, 
        onSale, 
        salePrice
    } = req.body; 

    pool.query('INSERT INTO products (name, imageUrl, price, quantity, description, onSale, salePrice)'
    + ' VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
    [name, imageUrl, price, quantity, description, onSale, salePrice],
    (err, results)=> {
        if(err)
        {
            console.log(err);
            throw err;
        }

        res.status(200).json(`Product added with ID: ${results.rows[0].id}`);
    })
}

const UpdateProduct = async (req, res)=> {
    const id = parseInt(req.params.id);
    const {
        name, 
        imageUrl, 
        price, 
        quantity, 
        description, 
        onSale, 
        salePrice
    } = req.body; 
    pool.query(
        'UPDATE products SET name = $1, imageUrl = $2, price = $3, quantity = $4, description = $5, onSale = $6, salePrice = $7',
        [ name, 
            imageUrl, 
            price, 
            quantity, 
            description, 
            onSale, 
            salePrice
        ],
        (err, results) => {
            if(err)
            {
                console.log(err);
                throw err;
            }

            res.status(200).json({
                msg: `Product modified with ID: ${id}`,
                updatedEntry: results.rows[0]
            })
            }
    )
}

const DeleteProduct = async (req, res) => {
    const id = parseInt(req.params.id);

    pool.query('DELETE FROM products WHERE id = $1', [id], (err, results) => {
        if(err)
        {
            throw err;
        }

        res.status(200).send(`Product delete with ID: ${id}`);
    })
}

module.exports = {
    CreateProduct,
    GetProducts,
    GetProductById,
    UpdateProduct,
    DeleteProduct
}