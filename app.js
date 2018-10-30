const mongoose = require('mongoose');
const express = require('express'); // Not needed just added because.. :)
const Schema = mongoose.Schema;

mongoose.connect('mongodb://mongod345:Hector3463@ds245523.mlab.com:45523/mongo-prac', { useNewUrlParser: true });

const StocksSchema = new Schema ({
    name: String, // Name of the stock 
    price: {
      type: String,
      unique: true, // meaning this won't be used anywhere else 
    }, // The price for purchasing the stock
    rankForStock: Number, // The rank for the Stock whether it exceeds or it doesn't
    SocialNet: String, // How popular the stock is
    date: { type: Date, default: Date.now } // Date.everyWeek} // Date... API used so that it can tell you how it will do per week and shows the previous weeks as well    data: 
    
})

    
