const express = require('express')
const request = require('request')
//const {StatusCodes} = require('http-status-codes')


const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY)


const StripePurchase = async (req, res)=>{  
    const query = req.query;
    const productID = query ? req.query.productid : null;
    const productPrice = query ? req.query.productsaleprice : null; 
    const productName = query ? req.query.productname : null;

    var API_Response = {
        error: '',
        payload: {}
    };

    if(productID)
    {
        try{
            const session = await stripe.checkout.session.create({
                payment_method_types: ['card'],
                mode: 'payment',
                line_items: productID =>{
                    return{
                        price_data:{
                            currency: 'usd',
                            product_data: {
                                name: productName,
                            
                            },
                            unit_amount: productPrice * 100 //needs to be in pennies for stripe to function
                        },
                        quantity: 1  //hardcoded value for quantity for testing
                       
                    }
                },
                success_url: '/ordersummary', //success pagge for completing order
                cancel_url: '/paymenterror'   //page when error occurs
            })

        }catch(err)
        {
            console.log(err);
            API_Response = {
                error : "No Query Provided"
            }
            return res.status(400).json(API_Response); 
        }
       
    }
    else{
        API_Response = {
            error : "No Query Provided"
        }
        return res.status(400).json(API_Response); 
    }
}

module.exports = {
    StripePurchase
   
}