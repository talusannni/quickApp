var btoa = require('btoa');
var http = require('http');
var https = require('https');
var vcxconfig = require('./vcxconfig');
var log = require('../util/logger/logger').logger;
var logger = log.getLogger('AppApi');
var vcxutil = {};

vcxutil.getBasicAuthToken = function () {
    var APP_ID = vcxconfig.APP_ID;
    var APP_KEY = vcxconfig.APP_KEY;
    var authorizationBasic = btoa(APP_ID + ':' + APP_KEY);
    return authorizationBasic;
}

vcxutil.connectServer = function (options, data, callback) {
    logger.info("REQ URI:- " + options.method + " " + options.host + ":" + options.port + options.path);
    logger.info("REQ PARAM:- " + data);
    var request = https.request(options, function (res) {
        res.on('data', function (chunk) {
            logger.info("RESPONSE DATA:- " + chunk);
            callback(JSON.parse(chunk));
        });
    });
    request.on('error', function (err) {
        logger.info("RESPONSE ERROR:- " + JSON.stringify(err));
    });
    if (data == null)
        request.end();
    else
        request.end(data);
}
var module = module || {};
module.exports = vcxutil;