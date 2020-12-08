const express = require('express');
const bodyParser = require("body-parser"); // middleware
const pgp = require("pg-promise")();//PG-Promise is how postgres and node communicate
const db = pgp("prostgres:localhost..."); // connecting to "todo_app DB"
const app = express();
const port = 3001;

// Importing our Order Routes
const memberRoutes = require('./routes/memberInfo');

// Middleware
app.use(express.json());
// request body has been parsed
app.use(express.urlencoded({extended: false}));

app.use(bodyParser.json());
// Custom Middleware
app.use((req, res, next) => {
    console.log(`Request received: ${req.method} ${req.path}`) 
    next();
})

// Routes - memberInfo
app.use('/memberInfo', memberRoutes);

app.get('*', (req, res) => {
    res.status(404).send('Not found');
})

app.listen(port, () => {
    console.log('server started');
})

