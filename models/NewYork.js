require('../config/connection');
const mongoose = require('mongoose');

const newyorkSchema = new mongoose.Schema(
    {
        city: String,
        restaurant: String,
        cuisine: String,
        review: String,
        priceRange: Number,
        webLink: String,
        menuItemOne: String,
        menuItemTwo: String,
        menuItemThree: String
    },
    {
        timestamps: true
    }
);

const Portland = mongoose.model('New York', newyorkSchema);

module.exports = NewYork;