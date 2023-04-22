require('dotenv').config();
const express = require('express');
const app = express();
const methodOverride = require('method-override');
const portlandController = require('./controllers/portland');
const newyorkController = require('./controllers/newyork');
const neworleansController = require('./controllers/neworleans');


const PORT = process.env.PORT || 4000;

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.use(methodOverride('_method'));

app.use('/newOrleans', neworleansController); 
app.use('/portland', portlandController);
app.use('/newYork', newyorkController);

app.get('/', (req, res) => {
    res.render('home.ejs')
})


app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`);
}
)

////