const express = require('express')
const request = require('request')
//const {StatusCodes} = require('http-status-codes')


const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY)


const StripePurchase = async (req, res)=>{  
    var API_Response = {
        error: '',
        payload: {}
    };

    const items = req.body.items;
    if(!items)
    {
        return res.status(400).send('No items found in request body.');
    }
    
        try{
            const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                mode: 'payment',
                line_items: items.map(item =>{
                    return({
                        price_data:{
                            currency: 'usd',
                            product_data: {
                                name: item.productName,
                            
                            },
                            unit_amount: item.productPrice * 100 //needs to be in pennies for stripe to function
                        },
                        quantity: 1  //hardcoded value for quantity for testing  
                    })
                }),
                success_url: `${process.env.SERVER_URL}ordersummary`, //success pagge for completing order
                cancel_url: `${process.env.SERVER_URL}paymenterror`  //page when error occurs
                });
            return res.status(200).json(session)

        }catch(err)
        {
            API_Response = {
                error: err.message,
                payload: {}
            }
            return res.status(400).json(API_Response); 
        }
       
}


module.exports = {
    StripePurchase
}