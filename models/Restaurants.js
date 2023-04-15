require('../config/connection');
const mongoose = require('mongoose');

const restaurantsSchema = new mongoose.Schema(
    {
        city: String,
        restaurant: String,
        cuisine: String,
        review: String,
        menuItem: String,
        price: Number,
        zipcode: Number,
        webLink: String,
    },
    {
        timestamps: true
    }
);

const Restaurants = mongoose.model('Restaurant', restaurantsSchema);

module.exports = Restaurants;
