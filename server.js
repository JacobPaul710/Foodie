require('dotenv').config();
const express = require('express');
const app = express();
const citiesController = require('./controllers/cities');

const PORT = 4000;

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended:false }));

app.get('/', (req, res) => {
    res.send('Home')
})

app.use('', citiesController);

app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`);
}
)