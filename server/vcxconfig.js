///////////////////////////////////////////////////////
//
// Application: Quick App
// Version: 1.0.0
// The sample quickAPI demonstrates the use of APIs for EnableX platform.
// The main motivation behind this application is to demonstrate usage of APIs and
// allow developers to ramp up on app by hosting on their own devices instead of
// directly using servers.
//
// Released: Nov 26, 2018
//
// File: config.js
// Service Configuration File, need to be modified as needed.
//
/////////////////////////////////////////////////////


var vcxconfig={};

vcxconfig.SERViCE={
    name: "vdo",                // Name of the App
    version: "1.0.0",                               // Version
    path: "/v1",                                    // EnableX Server API Version Route to access
    domain: "svideox.herokuapp.com",                       // Domain / Sub-Domain to host this Service
    port  : "4443",                                 // Port No. of this Service
    listen_ssl : true                               // Enable SSL. Set always to "true"
};



// SSL Certificate (Self Signed or Registered)

vcxconfig.Certificate={
    ssl_key: "../cert/27728153_svideox.herokuapp.com.key",               // Path to .key file
    ssl_cert : "../cert/27728153_svideox.herokuapp.com.crt"             // Path to .crt file
};



// Enbalex Server API Infomration

vcxconfig.SERVER_API_SERVER={
    host: 'api.vcloudx.com',                    // FQDN of Service
    port: '',                                       // PORT of Service (If specified by EnableX)
};

vcxconfig.APP_ID    = "5bf3bce18e52a5016f49cc15";               // APP ID to access Server API
vcxconfig.APP_KEY   = "4e4y8abyVySaPysyey8yueNaMeWeJaue2ute";   // APP KEY to access Server API



vcxconfig.clientPath = "../client";                 // Client End Point UI Route

var module = module || {};
module.exports = vcxconfig;
