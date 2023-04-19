require('dotenv').config();
const express = require('express');
const app = express();
const methodOverride = require('method-override');
const portlandController = require('./controllers/portland');
const newyorkController = require('./controllers/newyork');
const neworleansController = require('./controllers/neworleans');
const PORT = 5001;

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended:false }));
app.use(express.static(__dirname + '/Public'));
app.use(methodOverride('_method'));

app.get('/', (req, res) => {
    res.render('home.ejs')
})

app.use('', neworleansController);
app.use('', portlandController);
app.use('', newyorkController);

app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`);
}
)