require('./db/initTable.js')
const express= require('express');
const cors = require('cors');
const app = express();
app.use(cors())
const ProductsRouter = require('./routers/productQueries.js');
app.use('/api/v1/products', ProductsRouter);

const port = process.env.port || 3001;

const start = async ()=> {
    app.listen(port, ()=>{
        console.log(`Server listening on port ${port}`)
    })
}

start();