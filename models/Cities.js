require('../config/connection');
const mongoose = require('mongoose');

const citiesSchema = new mongoose.Schema(
    {
        cityName: String,
        restaurantName: String,
        cuisine: String
    },
    {
        timestamps: true
    }
);

const Cities = mongoose.model('City', citiesSchema);

module.exports = Cities;
