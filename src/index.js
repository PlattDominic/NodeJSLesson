// const myModule = require('./my-module');
// console.log(myModule);

const express = require('express');

const app = express();

/* Method one, non asynchronous  */
// const { readFile } = require('fs');
// app.get('/', (req, res) => { 

//     readFile('./home.html', 'utf8', (err, html) => {
//         if (err) {
//             res.status(500).send('welp, we\'re out right now');
//         }

//         res.send(html);
//     })

// })

/*  Method two, asynchronous */
const { readFile } = require('fs').promises;

app.get('/', async (req, res) => {
    res.send( await readFile('./home.html', 'utf8'));
});



app.listen(process.env.PORT || 3000, () => console.log('App available on http://localhost:3000'))

