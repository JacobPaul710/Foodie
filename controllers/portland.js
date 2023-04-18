const express = require('express');
const router = express.Router();
let portland = require('../models/Portland');

const seededData = [
    {
        city: "Portland",
        restaurant: "Ranch Pizza",
        cuisine: "pizza",
        review: "Best pizza in Oregon!",
        priceRange: 40,
        webLink: "https://www.ranchpdx.com/",
        menuItemOne: "Radicchio Caeser Salad",
        menuItemTwo: "Pepperoni Pizza",
        menuItemThree: "Ranch Dressing"
    }, {
    
        city: "Portland",
        restaurant: "Eem",
        cuisine: "thai",
        review: "Delicious Thai BBQ fusion with a national reputation.",
        priceRange: 40,
        webLink: "https://www.eempdx.com/",
        menuItemOne: "White Curry with Brisket Burnt Ends",
        menuItemTwo: "Chopped BBQ Fried Rice",
        menuItemThree: "Baby Back Ribs"
    }, {
    
        city: "Portland",
        restaurant: "Jacqueline",
        cuisine: "seafood",
        review: "Jacqueline is a seafood restaurant & oyster bar on Southeast Clinton Street. A petite, friendly neighborhood restaurant focused on carefully crafted dishes that emphasize Pacific Northwest seafood and vegetables. Jacqueline works directly with Oyster Farmers in the Puget Sound, Oregon Coast & Canada to bring in the best fresh oysters everyday.",
        priceRange: 40,
        webLink: "hhttps://jacquelinepdx.com/",
        menuItemOne: "Oysters on the half shell",
        menuItemTwo: "Dungeness Crab Toast",
        menuItemThree: "Seared Wild Prawns"
    }
];

router.get('/portland', async (req, res, next) => {
    try {
        const pdxRestaurants = await portland.find({});
        console.log(portland);
        res.render('portland/index.ejs', {portland: pdxRestaurants});
    } catch(err) {
        console.log(err);
        next();
    }
})

router.get('/porland/new', (req, res) => {
    res.render('portland/new.ejs');
})

router.get('/portland/:id', async (req, res, next) => {
    try {
        const pdxRestaurant = await portland.findById(req.params.id);
        res.render('portland/show.ejs', {singlePortland: pdxRestaurant});
    } catch(err) {
        console.log(err);
        next();
    }
})


router.post('/portland', async (req, res, next) => {
    try {
        const newPdxResto = await portland.create(req.body);
        console.log(newPdxResto);
        res.redirect('/portland');
    } catch(err) {
        console.log(err);
        next();
    }
})

router.get('/portland/:id/edit', async (req, res, next) => {
    try {
        const pdxRestoToEdit = await portland.findById(req.params.id);
        console.log(pdxRestoToEdit);
        res.render('portland/ejs', {singlePortland: pdxRestoToEdit});
    } catch(err) {
        console.log(err);
        next();
    }
})

router.put('portland/:id', async (req, res, next) => {
    try {
        updatedPdx = await portland.findByIdAndUpdate(req.params.id, req.body);
        console.log(updatedPdx);
        res.redirect(`/portland/${req.params.id}`);
    } catch(err) {
        console.log(err);
        next();
    }
})

router.get('/portland/:id/delete', async (req, res, next) => {
    try {
        const pdxRestoToDelete = await portland.findByIdAndDelete(req.params.id);
        console.log(pdxRestoToDelete);
        res.render('portland/delete.ejs', {singlePortland: pdxRestoToDelete})
    } catch(err) {
        console.log(err);
        next();
    }
})

router.delete('/portland/:id', async (req, res, next) => {
    try {
        const deletedPdx = await portland.findByIdAndDelete(req.params.id);
        console.log(deletedPdx);
        res.redirect('/portland');
    } catch(err) {
        console.log(err);
        next();
    }
})

module.exports = router;