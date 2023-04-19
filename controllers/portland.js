const express = require('express');
const router = express.Router();
let portland = require('../models/Portland');

const pdxSeed = [
    {
        city: "Portland",
        restaurant: "Ranch Pizza",
        cuisine: "pizza",
        review: "Best pizza in Oregon!",
        priceRange: 40,
        webLink: "https://www.ranchpdx.com/",
        menuItemOne: "Radicchio Caeser Salad",
        menuItemTwo: "Pepperoni Pizza",
        menuItemThree: "Ranch Dressing",
        imgOne: "https://ranch-pdx.square.site/uploads/1/3/0/9/130995125/s394696418460366382_p817_i2_w2311.jpeg?width=1280&dpr=1",
        imgTwo: "https://ranch-pdx.square.site/uploads/1/3/0/9/130995125/s394696418460366382_p807_i1_w2108.jpeg?width=1280&dpr=1",
        imgThree: "https://ranch-pdx.square.site/uploads/1/3/0/9/130995125/s394696418460366382_p822_i1_w2311.jpeg?width=1280&dpr=1"
    }, {
    
        city: "Portland",
        restaurant: "Eem",
        cuisine: "thai",
        review: "Delicious Thai BBQ fusion with a national reputation.",
        priceRange: 40,
        webLink: "https://www.eempdx.com/",
        menuItemOne: "White Curry with Brisket Burnt Ends",
        menuItemTwo: "Chopped BBQ Fried Rice",
        menuItemThree: "Baby Back Ribs",
        imgOne: "https://tb-static.uber.com/prod/image-proc/processed_images/45e7f41a16140cacc282e7a40f758954/c73ecc27d2a9eaa735b1ee95304ba588.jpeg",
        imgTwo: "https://cdn.vox-cdn.com/thumbor/X58YxQ1Dd0nNHk29I-E4yR-ty40=/0x0:2000x1333/1200x800/filters:focal(840x507:1160x827)/cdn.vox-cdn.com/uploads/chorus_image/image/66645318/Avila_Eem_DSC4366_.0.jpg",
        imgThree: "https://img.texasmonthly.com/2019/12/eem-bbq-1.jpg?auto=compress&crop=faces&fit=fit&fm=pjpg&ixlib=php-1.2.1&q=45"

    }, {
    
        city: "Portland",
        restaurant: "Jacqueline",
        cuisine: "seafood",
        review: "Jacqueline is a seafood restaurant & oyster bar on Southeast Clinton Street. A petite, friendly neighborhood restaurant focused on carefully crafted dishes that emphasize Pacific Northwest seafood and vegetables. Jacqueline works directly with Oyster Farmers in the Puget Sound, Oregon Coast & Canada to bring in the best fresh oysters everyday.",
        priceRange: 40,
        webLink: "hhttps://jacquelinepdx.com/",
        menuItemOne: "Oysters on the half shell",
        menuItemTwo: "Dungeness Crab Toast",
        menuItemThree: "Seared Wild Prawns",
        imgOne: "https://images.squarespace-cdn.com/content/v1/56fca26d746fb9af3d59be82/1624346159106-TFL2N8DY02NN6G5FF8QG/DAlvarado_Jacqueline_020.jpg?format=500w",
        imgTwo: "https://www.oregonlive.com/resizer/jXKB9gg_KQD0GNsoNw7q1Xt1ghk=/1280x0/smart/advancelocal-adapter-image-uploads.s3.amazonaws.com/expo.advance.net/img/6faf8b876f/width2048/29a_jacquelinedungenesscrab.jpeg",
        imgThree: "https://img.delicious.com.au/oGf6ryxn/del/2021/02/chargrilled-prawns-with-basil-chimichurri-145692-2.jpg"
    }
];

router.get('/portland', async (req, res, next) => {
    try {
        const pdxRestaurants = await portland.find({});
        console.log(portland);
        res.render('portland/portlandIndex.ejs', {portland: pdxRestaurants});
    } catch(err) {
        console.log(err);
        next();
    }
})

router.get('/porland/new', (req, res) => {
    res.render('portland/new.ejs');
})

router.get('/portland/seed/', async (req, res, next) => {
    try {
        await portland.deleteMany({});
        await portland.insertMany(pdxSeed);
        res.redirect('/portland');
    } catch(err) {
        console.log(err);
        next();
    }
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
        const newRestoPdx = await portland.create(req.body);
        console.log(newRestoPdx);
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