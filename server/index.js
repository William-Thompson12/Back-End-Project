const express = require('express')
const app = express()
const port = 3000

// Importing our Order Routes
const memberFormRoutes = require('/routes/memberForm');
const memberRoutes = require('/routes/member');

app.use(express.json());
// request body has been parsed
app.use(express.urlencoded({extended: false}));
// request body has been url encoded

// Custom Middleware for visual
app.use((req, res, next) => {
  console.log(`Request received: ${req.method} ${req.path}`) 
  next();
})

// Routes - Orders
app.use('/memberForm', memberFormRoutes);
app.use('/member', memberRoutes);

app.get('*', (req, res) => {
    res.status(404).send('Not found');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})