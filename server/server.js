/*Author:Sohom
* Modified:15.02.2018
* Description:An application based on VCX API
* */
var express = require('express')
var https = require('https')
var http = require('http')
var fs = require('fs')
var morgan = require('morgan')
var debug = require('debug')('vcloudx-server-api:server');
var app = express()
var vcxroom = require('./vcxroom')
var vcxconfig = require('./vcxconfig')
var bodyParser = require('body-parser')

/*
*Author:[Sohom]sohom.h@vcloudx.com
* Description: Initalization of the basic HTTPS server.[Ref:vcxconfig.js]
* */
var server;

if (vcxconfig.SERViCE.listen_ssl === true) {
    var options = {
        key: fs.readFileSync(vcxconfig.Certificate.ssl_key).toString(),
        cert: fs.readFileSync(vcxconfig.Certificate.ssl_cert).toString(),
    }
    if (vcxconfig.Certificate.sslCaCerts) {
        options.ca = [];
        for (var ca in vcxconfig.Certificate.sslCaCerts) {
            options.ca.push(fs.readFileSync(vcxconfig.Certificate.sslCaCerts[ca]).toString());
        }
    }
    server = https.createServer(options, app);
} else {
    server = http.createServer(app);
}
var port = normalizePort(vcxconfig.SERViCE.port);
app.set('port', port);
server.listen(port);
console.log("server listen on port" + port);
server.on('error', onError);
server.on('listening', onListening);

function normalizePort(val) {
    var port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
}

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));


app.use(morgan('dev'));
app.use(express.static(vcxconfig.clientPath));

/*
*Author:[Sohom]sohom.h@vcloudx.com
* Description: Routes to get all rooms
*              using server api[Ref:vcxconfig.js]
* */
app.get('/getAllRooms', function (req, res) {

    vcxroom.getAllRooms(function (data) {
        res.status(200);
        res.send(data);
    });
});
/*
*Author:[Sohom]sohom.h@vcloudx.com
* Description: Routes to get a room based on ID
*              using server api[Ref:vcxconfig.js]
* */
app.get('/getRoom/:roomName', function (req, res) {

    var room = req.params.roomName;
    vcxroom.getRoom(room, function (data) {
        res.status(200);
        res.send(data);
    });
});

app.post('/createToken/', function (req, res) {
    vcxroom.getToken(req.body, function (data) {
        res.status(200);
        res.send(data);
    });
});

