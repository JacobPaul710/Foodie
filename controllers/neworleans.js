const express = require('express');
const router = express.Router();
let neworleans = require('../models/NewOrleans');

const nolaSeed = [
    {
        city: "",
        restaurant: "",
        cuisine: "",
        review: "",
        priceRange: "",
        webLink: "",
        menuItemOne: "",
        menuItemTwo: "",
        menuItemThree: "",
        imgOne: "",
        imgTwo: "",
        imgThree:""
    }
];

router.get('/neworleans', async (req, res, next) => {
    try {
        const nolaRestaurants = await neworleans.find({});
        console.log(neworleans);
        res.render('neworleans/newOrleansIndex.ejs', {neworleans: nolaRestaurants});
    } catch(err) {
        console.log(err);
        next();
    }
})

router.get('/neworleans/new', (req, res) => {
    res.render('neworleans/new.ejs');
})

router.get('/neworleans/seed/', async (req, res, next) => {
    try {
        await neworleans.deleteMany({});
        await neworleans.insertMany(nolaSeed);
        res.redirect('/neworleans');
    } catch(err) {
        console.log(err);
        next();
    }
})

router.get('/neworleans/:id', async (req, res, next) => {
    try {
        const nolaRestaurant = await neworleans.findById(req.params.id);
        res.render('neworleans/show.ejs', {singleNewOrleans: nolaRestaurant});
    } catch(err) {
        console.log(err);
        next();
    }
})

router.post('/neworleans', async (req, res, next) => {
    try {
        const newRestoNola = await neworleans.create(req.body);
        console.log(newRestoNola);
        res.redirect('/neworleans')
    } catch(err) {
        console.log(err);
        next();
    }
})

router.get('/neworleans/:id/edit', async (req, res, next) => {
    try {
        const nolaRestoToEdit = await neworleans.findById(req.params.id);
        console.log(nolaRestoToEdit);
        res.render('neworleans/edit.ejs', {singleNewOrleans: nolaRestoToEdit})
    } catch(err) {
        console.log(err);
        next();
    }
})

router.put('/neworleans/:id', async (req, res, next) => {
    try {
        const updatedNola = await neworleans.findByIdAndUpdate(req.params.id, req.body);
        console.log(updatedNola);
        res.redirect(`/neworleans/${req.params.id}`);
    } catch(err) {
        console.log(err);
        next();
    }
})

router.get('/neworleans/:id/delete', async (req, res, next) => {
    try {
        const nolaRestoToDelete = await neworleans.findById(req.params.id);
        console.log(nolaRestoToDelete);
        res.render('neworleans/delete.ejs', {singleNewOrleans: nolaRestoToDelete});
    } catch(err) {
        console.log(err);
        next();
    }
})

router.delete('/neworleans/:id', async (req, res, next) => {
    try {
        const deletedNola = await neworleans.findByIdAndDelete(req.params.id);
        console.log(deletedNola);
        res.redirect('/neworleans');
    } catch(err) {
        console.log(err);
        next();
    }
})

module.exports = router;