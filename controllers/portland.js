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

