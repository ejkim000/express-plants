const express = require('express');
const app = express();
const port = 3000;

const plants = ['Monstera Deliciosa', 'Corpse Flower', 'Elephant-Foot Yam', "Witches' Butter"];

app.get('/', (req, res) => {
    res.send('<h1>Hi there!</h1>');
});

app.get('/awesome', (req, res) => {
    res.send(`
    <h1>Plants are awesome!</h1>
    <img src="https://static.boredpanda.com/blog/wp-content/uuuploads/plant-sculptures-mosaicultures-internationales-de-montreal/plant-sculptures-mosaicultures-internationales-de-montreal-14.jpg" >
  `);
})

app.get('/:id', (req, res) => {
    if (plants[req.params.id]) {
        res.send(plants[req.params.id]);
    } else {
        res.send('cannot find id of ' + req.params.id);
    }
});


app.listen(port, () => {
    console.log('listening on port', port);
});