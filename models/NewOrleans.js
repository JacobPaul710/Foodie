require('../config/connection');
const mongoose = require('mongoose');

const neworleansSchema = new mongoose.Schema(
    {
        city: String,
        restaurant: String,
        cuisine: String,
        review: String,
        priceRange: Number,
        webLink: String,
        menuItemOne: String,
        menuItemTwo: String,
        menuItemThree: String,
        imgOne: String,
        imgTwo: String,
        imgThree: String
    },
    {
        timestamps: true
    }
);

const NewOrleans = mongoose.model('New Orleans', neworleansSchema);

module.exports = NewOrleans;