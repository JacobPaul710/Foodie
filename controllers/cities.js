const express = require('express');
const router = express.Router();
let cities = require('../models/Cities');
const seededData = [
    {
        cityName: "Portland",
        restaurantName: "Ranch Pizza",
        cuisine: "pizza"

    }
]

router.get('/', (req, res) => {
    res.render('home.ejs')
})

router.get('/:id', async (req, res, next) => {
    try {
        const myCity = await cities.findById(req.params.id);
        res.render('city.ejs', {cities: myCity});
    } catch(err) {
        console.log(err);
        next();
    }
})


module.exports = router;