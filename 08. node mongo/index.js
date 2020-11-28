
const express    = require('express');
const app        = express();
const mongoose   = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

//routes
const aboutRoute        = require('./routes/about');
const testRoute         = require('./routes/test');
const getitemRoute      = require('./routes/getitem');
const uploadRoute       = require('./routes/upload');
const deleteRoute       = require('./routes/delete');
const insertRoute       = require('./routes/insert');
const updateRoute       = require('./routes/update');

//modelo
const Foto = require('./models/foto');

// middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

//template engine
app.set('view engine', 'pug');

const pass  = process.env.PASSWORD;
const user  = process.env.USER;
const url   = process.env.URL;
const dbname = process.env.DB;

console.log(user, pass, url, dbname);

mongoose.connect(process.env.CONNECTIONSTRING,
            {
                useNewUrlParser: true, 
                useUnifiedTopology: true, 
                useFindAndModify: false,
                useCreateIndex: true
            });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
    console.log('DB Connected!');
});

app.get('/about', aboutRoute);
app.get('/test', testRoute);
app.get('/get/:id', getitemRoute);
app.get('/upload', uploadRoute);
app.get('/delete/:id', deleteRoute);

app.post('/insert', insertRoute);
app.post('/update', updateRoute);

app.listen(process.env.PORT || 3000, () =>{
    console.log('Servidor iniciado');
});