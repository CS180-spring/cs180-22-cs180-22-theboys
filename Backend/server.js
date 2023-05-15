const db = require('./db/initTable.js')
require('dotenv').config();

const express= require('express');
const cors = require('cors');
const authenticationMiddleware = require('./middleware/authenticationMiddleware.js')
const app = express();
app.use(express.json())
app.use(cors())

//Import routers
const ProductsRouter = require('./routers/productQueries.js');
const AuthRouter = require('./routers/auth.js');

//Use routers
app.use('/api/v1/products', ProductsRouter);
app.use('/api/v1/auth', AuthRouter);

const port = process.env.PORT || 3001;

const start = async ()=> {
    try{
        await db.InitTables();
    }
    catch(err)
    {
        throw err;
    }

    app.listen(port, ()=>{
        console.log(`Server listening on port ${port}`)
    })
}
start();