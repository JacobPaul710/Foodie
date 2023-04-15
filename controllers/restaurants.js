const express = require('express');
const router = express.Router();
let restaurants = require('../models/Restaurants');
const seededData = [
    {
        city: "Portland",
        restaurant: "Ranch Pizza",
        cuisine: "Pizza",
        menuItem: "Radicchio Caeser Salad",
        zipcode: 97211,
        price: 12
    }, {
        city: "New York",
        restaurant: "Speedy Romeo",
        cuisine: "Pizza",
        menuItem: "Dick Dale",
        zipcode: 11238,
        price: 22
    }, {
        city: "New Orleans",
        restaurant: "Some pizza place",
        cuisine: "Pizza",
        menuItem: "Oysters",
        zipcode: 70032,
        price: 32
    }
]

// this route needs to be the id of the cityName, and I'm not sure how to do that at the moment, because the show page from here will need to be the id of the restaurantName.
router.get('/Portland', (req, res) => {
    res.render('cities/portland.ejs')
})


module.exports = router;