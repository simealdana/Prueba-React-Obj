import express from 'express';
import path from 'path';
import bodyParser from'body-parser';
import IndexRoutes from './routes';




// Initializations
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, './public')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, './public', 'index.html'));
});


// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(function(req, res, next) {
res.header('Access-Control-Allow-Origin', '*');
res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
// allow preflight
if (req.method === 'OPTIONS') {
    res.send(200);
} else {
    next();
}})


// Routes
app.use(IndexRoutes);

// Static files

// Starting the Server
app.listen(process.env.PORT || 5000, () => {
    console.log(`Server on port`, process.env.PORT);
});



