require('../config/connection');
const mongoose = require('mongoose');

const citiesSchema = new mongoose.Schema(
    {
        cityName: String,
        cuisine: String,
        restaurantName: String
    },
    {
        timestamps: true
    }
);

const Cities = mongoose.model('City', citiesSchema);

module.exports = Cities;
