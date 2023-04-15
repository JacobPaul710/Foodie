require('../config/connection');
const mongoose = require('mongoose');

const restaurantsSchema = new mongoose.Schema(
    {
        city: String, required,
        restaurant: String, required,
        cuisine: String, required,
        review: String, required,
        menuItem: String, required,
        price: Number, required,
        zipcode: Number, required,
        webLink: String, required
    },
    {
        timestamps: true
    }
);

const Restaurants = mongoose.model('Restaurant', restaurantsSchema);

module.exports = Restaurants;
