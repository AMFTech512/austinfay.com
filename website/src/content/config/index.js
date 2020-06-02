var CONTENT_TYPES = [];

var normalizedPath = require("path").join(__dirname, ".");

require("fs").readdirSync(normalizedPath).forEach(function(file) {
    if(file == 'index.js') return;
    let CONTENT_TYPE = require("./" + file);
    CONTENT_TYPES.push(CONTENT_TYPE);
});

exports.CONTENT_TYPES = CONTENT_TYPES;