require('../config/connection');
const mongoose = require('mongoose');

const restaurantsSchema = new mongoose.Schema(
    {
        city: String, required,
        restaurant: String, required,
        cuisine: String, required,
        menuItem: String, required,
        zipcode: Number, required,
        price: Number, required
    },
    {
        timestamps: true
    }
);

const Cities = mongoose.model('Restaurant', restaurantsSchema);

module.exports = Restaurants;
