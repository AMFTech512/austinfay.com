const functions = require('firebase-functions');
const { Nuxt } = require('nuxt');
const express = require('express');

const config = require('./nuxt.config.js');
config.dev = false;
const app = express();
const nuxt = new Nuxt(config);

function handleRequest(req, res) {
    console.log(`Incoming request: ${req.path}`);
    // res.send("Hello world!");
    res.set('Cache-Control', 'public, max-age=600, s-maxage=1200');
    nuxt.render(req, res);
}

app.get('*/*', handleRequest);

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.ssrapp = functions.https.onRequest(app);
