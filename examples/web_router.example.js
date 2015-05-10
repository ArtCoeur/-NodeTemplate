/**
 * Example of implementing a web router using express
 */
var app = require('express')(),
    bodyParser = require('body-parser');

/**
 * Hook to set up routing of web requests
 */
module.exports.running = function() {

    app.use(bodyParser.json({limit: '1024kb'}));

    app.get('/', function (req, res) {
        res.json({"text" : "hello world"});
    });

};

/**
 * Hook to start listening to web requests
 */
module.exports.connected = function() {

    var PORT = process.env.PORT || 80;

    app.listen(PORT);
};
