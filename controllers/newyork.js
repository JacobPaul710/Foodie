const express = require('express');
const router = express.Router();
let newyork = require('../models/NewYork');

const nySeed = [
    {
        city: "New York",
        restaurant: "Speedy Romeo",
        cuisine: "pizza",
        review: "Best pizza in Brooklyn!",
        priceRange: 40,
        webLink: "https://speedyromeo.com/",
        menuItemOne: "Dick Dale",
        menuItemTwo: "Beets and Ricotta",
        menuItemThree: "KC Style Wings",
        imgOne: "https://static01.nyt.com/images/2012/04/11/dining/20120411-SPEEDY-slide-SVFO/20120411-SPEEDY-slide-SVFO-jumbo.jpg",
        imgTwo: "https://static.onecms.io/wp-content/uploads/sites/39/2021/02/12/feel-the-beet-salad-ricotta-RU341836.jpg",
        imgThree:"https://d2s742iet3d3t1.cloudfront.net/restaurants/restaurant-140294000000000000/menu/items/3/item-800000000311614863_1679603878.png?size=medium"
    }, {
    
        city: "New York",
        restaurant: "White Tiger",
        cuisine: "korean",
        review: "New Korean food, traditional flavor with a modern twist, celebrating the unique upbringing of our Chef Liz Kwon.",
        priceRange: 40,
        webLink: "http://www.whitetiger.nyc/",
        menuItemOne: "Sesame Gnocchi",
        menuItemTwo: "Dolsot Bibimbap",
        menuItemThree: "Spicy Pork Bulgogi",
        imgOne: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgOmuuzE8B3qCxi2yJMY5iPb3wJGl0wc_HoaYxe7_-NA&usqp=CAU&ec=48665699",
        imgTwo: "https://s3-media0.fl.yelpcdn.com/bphoto/Gb7sAnEvbT1KJKoCOS6x6Q/348s.jpg",
        imgThree:"https://pupswithchopsticks.com/wp-content/uploads/korean-spicy-pork-new5.jpg"
    }, {
    
        city: "New York",
        restaurant: "Pilar",
        cuisine: "cuban",
        review: "Classic Cuban cuisine with a modern twist, beautiful setting, and amzaing cocktails",
        priceRange: 40,
        webLink: "https://www.pilarny.com/",
        menuItemOne: "Vaca Frita",
        menuItemTwo: "Pressed Cuban Sandwich",
        menuItemThree: "Passionfruit Mojito",
        imgOne: "https://www.the-girl-who-ate-everything.com/wp-content/uploads/2013/08/vaca-frita-9.jpg",
        imgTwo: "https://s3.amazonaws.com/toasttab/restaurants/restaurant-58477000000000000/menu/items/9/item-100000005679056499_1607973282.jpg",
        imgThree:"https://s3.amazonaws.com/toasttab/restaurants/restaurant-58477000000000000/menu/items/3/item-100000005679080183_1607974318.jpg"
    }
];

router.get('/', async (req, res, next) => {
    try {
        const nycRestaurants = await newyork.find({});
        // console.log(newyork);
        res.render('newyork/newYorkIndex.ejs', {newyork: nycRestaurants});
    } catch(err) {
        console.log(err);
        next();
    }
})

router.get('/new', (req, res) => {
    res.render('newyork/newYorkNew.ejs');
})

router.get('/seed/', async (req, res, next) => {
    try {
        await newyork.deleteMany({});
        await newyork.insertMany(nySeed);
        res.redirect('/newyork');
    } catch(err) {
        console.log(err);
        next();
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const nycRestaurant = await newyork.findById(req.params.id);
        res.render('newyork/newYorkShow.ejs', {singleNewYork: nycRestaurant});
    } catch(err) {
        console.log(err);
        next();
    }
})

router.post('/', async (req, res, next) => {
    try {
        console.log("Post route called");
        console.log(req.body);
        const newRestoNy = await newyork.create(req.body);
        console.log(newRestoNy);
        res.redirect('/newyork');
    } catch(err) {
        console.log(err);
        next();
    }
})

router.get('/:id/edit', async (req, res, next) => {
    try {
        const nyRestoToEdit = await newyork.findById(req.params.id);
        console.log(nyRestoToEdit);
        res.render('newyork/newYorkEdit.ejs', {singleNewYork: nyRestoToEdit})
    } catch(err) {
        console.log(err);
        next();
    }
})

router.put('/:id', async (req, res, next) => {
    try {
        const updatedNy = await newyork.findByIdAndUpdate(req.params.id, req.body);
        console.log(updatedNy);
        res.redirect(`/newyork/${req.params.id}`);
    } catch(err) {
        console.log(err);
        next();
    }
})

router.get('/:id/delete', async (req, res, next) => {
    try {
        const nyRestoToDelete = await newyork.findById(req.params.id);
        console.log(nyRestoToDelete);
        res.render('newyork/newYorkDelete.ejs', {singleNewYork: nyRestoToDelete});
    } catch(err) {
        console.log(err);
        next();
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        const deletedNy = await newyork.findByIdAndDelete(req.params.id);
        console.log(deletedNy);
        res.redirect('/newyork');
    } catch(err) {
        console.log(err);
        next();
    }
})

module.exports = router;