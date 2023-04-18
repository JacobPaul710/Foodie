require('dotenv').config();
const express = require('express');
const app = express();
const citiesController = require('./controllers/cities')
const restaurantsController = require('./controllers/restaurants');
const portlandController = require('./controllers/portland');
const newyorkController = require('./controllers/newyork');

const PORT = 4000;

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended:false }));
app.use(express.static(__dirname + '/public'));

// app.get('/', (req, res) => {
//     res.render('home.ejs')
// })

app.use('', citiesController);
app.use('', restaurantsController);
app.use('', portlandController);
app.use('', newyorkController);

app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`);
}
)