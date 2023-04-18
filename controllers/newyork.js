const express = require('express');
const router = express.Router();
let newyork = require('../models/NewYork');

const nySeed = [
    {
        city: "New York",
        restaurant: "Speedy Romeo",
        cuisine: "piazz",
        review: "Best pizza in Brooklyn!",
        priceRange: 40,
        webLink: "https://speedyromeo.com/",
        menuItemOne: "Dick Dale",
        menuItemTwo: "Beets and Ricotta",
        menuItemThree: "KC Style Wings"
    }, {
    
        city: "New York",
        restaurant: "White Tiger",
        cuisine: "korean",
        review: "New Korean food, traditional flavor with a modern twist, celebrating the unique upbringing of our Chef Liz Kwon.",
        priceRange: 40,
        webLink: "http://www.whitetiger.nyc/",
        menuItemOne: "Sesame Gnocchi",
        menuItemTwo: "Dolsot Bibimbap",
        menuItemThree: "Spicy Pork Bulgogi"
    }, {
    
        city: "New York",
        restaurant: "Pilar",
        cuisine: "cuban",
        review: "Classic Cuban cuisine with a modern twist, beautiful setting, and amzaing cocktails",
        priceRange: 40,
        webLink: "https://www.pilarny.com/",
        menuItemOne: "Vaca Frita",
        menuItemTwo: "Pressed Cuban Sandwich",
        menuItemThree: "Passionfruit Mojito"
    }
];

router.get('/newyork', async (req, res, next) => {
    try {
        const nycRestaurants = await newyork.find({});
        console.log(newyork);
        res.render('newyork/index.ejs', {newyork: nycRestaurants});
    } catch(err) {
        console.log(err);
        next();
    }
})

router.get('/newyork/new', (req, res) => {
    res.render('newyork/new.ejs');
})

router.get('/newyork/seed/', async (req, res, next) => {
    try {
        await newyork.deleteMany({});
        await newyork.insertMany(nySeed);
        res.redirect('/newyork');
    } catch(err) {
        console.log(err);
        next();
    }
})

router.get('/newyork/:id', async (req, res, next) => {
    try {
        const nycRestaurant = await newyork.findById(req.params.id);
        res.render('newyork/show.ejs', {singleNewYork: nycRestaurant});
    } catch(err) {
        console.log(err);
        next();
    }
})

router.post('/newyork', async (req, res, next) => {
    try {
        const newRestoNy = await newyork.create(req.body);
        console.log(newRestoNy);
        res.redirect('/newyork')
    } catch(err) {
        console.log(err);
        next();
    }
})

router.get('/newyork/:id/edit', async (req, res, next) => {
    try {
        const nyRestoToEdit = await newyork.findById(req.params.id);
        console.log(nyRestoToEdit);
        res.render('newyork/edit.ejs', {singleNewYork: nyRestoToEdit})
    } catch(err) {
        console.log(err);
        next();
    }
})

router.put('/newyork/:id', async (req, res, next) => {
    try {
        const updatedNy = await newyork.findByIdAndUpdate(req.params.id, req.body);
        console.log(updatedNy);
        res.redirect(`/newyork/${req.params.id}`);
    } catch(err) {
        console.log(err);
        next();
    }
})

router.get('/newyork/:id/delete', async (req, res, next) => {
    try {
        const nyRestoToDelete = await newyork.findById(req.params.id);
        console.log(nyRestoToDelete);
        res.render('newyork/delete.ejs', {singleNewYork: nyRestoToDelete});
    } catch(err) {
        console.log(err);
        next();
    }
})

router.delete('/newyork/:id', async (req, res, next) => {
    try {
        const deletedNy = await.findByIdAndDelete(req.params.id);
        console.log(deletedNy);
        res.redirect('/newyork');
    } catch(err) {
        console.log(err);
        next();
    }
})

module.exports = router;