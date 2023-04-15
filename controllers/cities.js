const express = require('express');
const router = express.Router();
let cities = require('../models/Cities');
const seededData = [
    {
        cityName: "Portland",
        cuisine: "Pizza",
        restaurantName: "Ranch Pizza"
    }, {
        cityName: "New York",
        cuisine: "Pizza",
        restaurantName: "Speedy Romeo"
    }, {
        cityName: "Manassas",
        cuisine: "Pizza",
        restaurantName: "Some pizza place"
    }
]

// this route needs to be the id of the cityName, and I'm not sure how to do that at the moment, because the show page from here will need to be the id of the restaurantName.
router.get('/Portland', (req, res) => {
    res.render('cities/portland.ejs')
})


module.exports = router;