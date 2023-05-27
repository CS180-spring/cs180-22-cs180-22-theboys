const express = require('express')
const request = require('request')
//const {StatusCodes} = require('http-status-codes')


const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY)


const StripePurchase = async (req, res)=>{    //change this
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
                            unit_amount: productPrice * 100
                        },
                        quantity: 1
                       
                    }
                },
                success_url: '/ordersummary',
                cancel_url: '/paymenterror'
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

/*We WERE going to use API-Ninjas Calories burned API, but it looks like they are somehow
missing entries that they say they have (https://api.api-ninjas.com/v1/caloriesburnedactivities gives a full list of
activities, but when you search an activity listed in their database using
https://api.api-ninjas.com/v1/caloriesburned?activity=activityName, it doesn't come up). SO, I found where they likely
sourced their data from and copied it all into my own database. 

Data Entries Source: 
Barbara E. Ainsworth, et al., “2011 Compendium of Physical Activities: A Second Update of Codes and MET Values,” Medicine and Science in Sports and Exercise, Aug. 2011*/
const ExerciseSearch = async (req, res)=>{
    const query = req.query;
    const exerciseName = query ? req.query.exerciseName : null;
    //duration in minutes. 60 by default.
    let duration = query ? req.query.duration : 60;
    //User weight in lbs. 160 by default.
    let weight = query ? req.query.weight : 160



    if(!duration || duration < 1)
    {
        duration = 60;
    }

    if(!weight || weight < 1)
    {
        weight = 160
    }

    if(!exerciseName)
    {
        return res.status(StatusCodes.BAD_REQUEST).send('Please provide a valid exercise name');
    }
    
    var API_Response = {
        payload: []
    };

    const exercises = await Exercise.find({ 
        "exerciseName": { 
            "$regex": exerciseName, 
            "$options": "i" 
        } 
    }).limit(20).exec();

    //When returning the exercise data to the user, we want to return the MET along with the queries. 
    //We do this so we can modify an entry at a later time.
    const exerciseResponse = exercises.map(item => {
        return {
            exerciseName : item.exerciseName,
            category: item.category,
            met: item.met,
            weightDuringExercise: weight,
            exerciseDuration: duration,
            //(0.45kg / lb) * user weight * MET  = cal/hr. (cal/hr) / 60 = cal/min * duration in minutes is total burned cals
            caloriesBurned: 0.453592 * weight * item.met / 60 * duration 
        }
    })
    API_Response.payload = exerciseResponse;
    res.status(StatusCodes.OK).json(API_Response);
}

module.exports = {
    StripePurchase
    //ExerciseSearch
}