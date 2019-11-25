const { Nuxt } = require('nuxt');
const express = require('express');

const config = require('./nuxt.config.js');
config.dev = false;
const app = express();
const nuxt = new Nuxt(config);

const port = 3000;

function handleRequest(req, res) {
    console.log(`Received a request from ${req.ip}`)
    nuxt.render(req, res);
}



app.use(handleRequest);

app.listen(port, () => console.log(`Listening on port ${port}`));