const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const popular = require('./data/popularItems.json');

app.get('/', (req, res)=>{
    res.send('Delicious is Running')
})

app.get('/popular', (req, res) =>{
    res.send(popular);
})

app.listen(port, ()=>{
    console.log(`Delicious API is running on port: ${port}`);
})