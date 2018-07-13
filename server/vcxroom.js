var http = require('http')
var fs = require('fs')
var vcxconfig = require('./vcxconfig')
var vcxutil = require('./vcxutil')
var vcxroom = {};

var options = {
    port: vcxconfig.SERVER_API_SERVER.port,
    host: vcxconfig.SERVER_API_SERVER.host,
    key: fs.readFileSync(vcxconfig.Certificate.ssl_key).toString(),
    cert: fs.readFileSync(vcxconfig.Certificate.ssl_cert).toString(),

    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + vcxutil.getBasicAuthToken()
    }
}
vcxroom.getToken = function (details, callback) {
    var rooms = {};
    options.path = '/v1/rooms/' + details.roomId + '/tokens';
    options.method = 'POST';
    options.headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + vcxutil.getBasicAuthToken()
    };
    vcxutil.connectServer(options, JSON.stringify(details), function (data) {
        callback(data);
    });

}
vcxroom.getAllRooms = function (callback) {
    var rooms = {};
    options.path = '/v1/rooms/';
    options.method = 'GET';
    vcxutil.connectServer(options, null, function (data) {
        callback(data);
    });

}
vcxroom.getRoom = function (roomName, callback) {
    var rooms = {};
    options.path = '/v1/rooms/' + roomName;
    options.method = 'GET';
    vcxutil.connectServer(options, null, function (data) {
        var roomData = {};
        if (data) {
            //var roomsDetail=data;
            roomData = data.room;
        } else {
        }
        callback(roomData);

    });

}
var module = module || {};
module.exports = vcxroom;