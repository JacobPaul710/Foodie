const express = require('express');
const router = express.Router();
let neworleans = require('../models/NewOrleans');

const nolaSeed = [
    {
        city: "New Orleans",
        restaurant: "Margot's",
        cuisine: "pizza",
        review: "Offering wood-fired sourdough pizza, natural wine, and Italian-tinged cocktails in a neighborhood bar setting.",
        priceRange: 25,
        webLink: "https://www.margotsnola.com/",
        menuItemOne: "Supremo",
        menuItemTwo: "Zucca",
        menuItemThree: "Rhubarb Old Fashioned",
        imgOne: "https://bloximages.newyork1.vip.townnews.com/nola.com/content/tncms/assets/v3/editorial/0/96/0968f88a-b5e9-11ec-ae13-77100c227c12/624df9efbe259.image.jpg?resize=750%2C500",
        imgTwo: "https://images.squarespace-cdn.com/content/v1/5f063187ead18a2e98ba7f9b/1656677849570-DXD37PQDDA966EA18KMW/Chef_AdrianChelette-16.jpg",
        imgThree:"https://bloximages.newyork1.vip.townnews.com/nola.com/content/tncms/assets/v3/editorial/6/66/66660fc2-b5ea-11ec-bba4-fb9a6238bfe1/624dfbee2bb69.image.jpg?resize=1396%2C930"
    }, {

        city: "New Orleans",
        restaurant: "Luvi",
        cuisine: "asian fusion",
        review: "One of the most exciting restaurants in New Orleans since opening in 2018, Luvi is a petite and colorful Uptown cottage where chef Hao Gong wows with his mastery of Japanese and Chinese cuisines.",
        priceRange: 50,
        webLink: "https://www.luvirestaurant.com/",
        menuItemOne: "Curried Favor Dumplings",
        menuItemTwo: "Spicy Dan Dan Noodles",
        menuItemThree: "Dragon Boat",
        imgOne: "https://cdn.vox-cdn.com/thumbor/OpUg1TNT_aKjmctYCxuwrXcTQHU=/0x0:946x1080/870x653/filters:focal(389x391:539x541):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/67870402/s713027832499952230_p116_i1_w946.0.jpeg",
        imgTwo: "https://www.luvirestaurant.com/uploads/1/2/7/3/127395728/s713027832499952230_p14_i1_w600.jpeg",
        imgThree:"https://www.luvirestaurant.com/uploads/1/2/7/3/127395728/s713027832499952230_p181_i3_w2560.png"
    }, {

        city: "New Orleans",
        restaurant: "Fritai",
        cuisine: "haitian",
        review: "a hub for Haitian specialties and exciting cocktails in Treme",
        priceRange: 35,
        webLink: "https://fritai.com/",
        menuItemOne: "Fritai Sandwich",
        menuItemTwo: "Baked Crab Mac n' Cheese",
        menuItemThree: "Griyo",
        imgOne: "https://img1.wsimg.com/isteam/ip/3559876c-4bd3-4ce4-a289-35952b5cb20a/header-0004.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1160,h:653",
        imgTwo: "https://img1.wsimg.com/isteam/ip/3559876c-4bd3-4ce4-a289-35952b5cb20a/mac.png/:/",
        imgThree:"https://img1.wsimg.com/isteam/ip/3559876c-4bd3-4ce4-a289-35952b5cb20a/header-4.jpg/:/rs=w:1160,h:653"
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
    res.render('neworleans/newOrleansNew.ejs');
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
        res.render('neworleans/newOrleansShow.ejs', {singleNewOrleans: nolaRestaurant});
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
        res.render('neworleans/newOrleansDelete.ejs', {singleNewOrleans: nolaRestoToDelete});
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