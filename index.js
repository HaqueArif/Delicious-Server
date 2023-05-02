const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const popular = require('./data/popularItems.json');
const chef = require('./data/chefInfo.json');

app.use(cors());

app.get('/', (req, res)=>{
    res.send('Delicious is Running')
});

app.get('/popular', (req, res) =>{
    res.send(popular);
});

app.get('/chef', (req, res)=>{
    res.send(chef);
})

app.get('/chef/:id',(req, res)=>{
    const id = req.params.id;
    const selectedChef = chef.find(c => c.id ===id);
    res.send(selectedChef)
})

app.listen(port, ()=>{
    console.log(`Delicious API is running on port: ${port}`);
});