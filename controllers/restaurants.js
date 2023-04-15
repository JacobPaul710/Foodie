const express = require('express');
const router = express.Router();
let restaurants = require('../models/Restaurants');
const seededData = [
    {
        city: "Portland",
        restaurant: "Ranch Pizza",
        cuisine: "Pizza",
        review: "My favorite pizza in Portland!",
        menuItem: "Radicchio Caeser Salad",
        price: 12,
        zipcode: 97211,
        webLink: "https://www.ranchpdx.com/"
    }, {
        city: "New York",
        restaurant: "Speedy Romeo",
        cuisine: "Pizza",
        review: "My favorite pizza in Brooklyn!",
        menuItem: "Dick Dale",
        price: 22,
        zipcode: 11238,
        webLink: "https://speedyromeo.com/"
    }, {
        city: "New Orleans",
        restaurant: "Margot's",
        cuisine: "Pizza",
        review: "My favorite pizza in New Orleans!",
        menuItem: "Cavoletti",
        price: 14,
        zipcode: 70032,
        webLink: "https://www.margotsnola.com/"
    }
]

// this route needs to be the id of the cityName, and I'm not sure how to do that at the moment, because the show page from here will need to be the id of the restaurantName.
router.get('/Portland', (req, res) => {
    res.render('resto_show.ejs')
})


module.exports = router;