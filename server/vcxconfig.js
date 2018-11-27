var vcxconfig={};

vcxconfig.SERViCE={
    name: "VCloudX Quick Start", //Name of the Application [Change optional]
    version: "1.0.0", //Version [Change optional]
    path: "/v1", //Route [Default /v1]
    domain: " ", // FQDN of  your hosting enviorment [accept either DNS Or IP]
    port  : " ", //FQDN of  your hosting port
    listen_ssl : true //SSL on/off key  [Default "true" ,Note: it is recomended to keep it "ture"]
};

vcxconfig.Certificate={
    ssl_key: " ", // use the certificate ".key" [self signed or registered]
    ssl_cert : " ", // use the certificate ".crt" [self signed or registered]
    sslCaCerts : [ ] // use the certificate CA[chain] [self signed or registered]
};

vcxconfig.SERVER_API_SERVER={
    host: 'api.vcloudx.com', // hosted VCX_Server_api DNS address []
    port: '5454', // hosted VCX_Server_api DNS port
};

vcxconfig.clientPath = "../client"; // UI files location

vcxconfig.APP_ID = " "; // Enter the issued/authorized application ID
vcxconfig.APP_KEY = " "; // Enter the issued/authorized application key

var module = module || {};
module.exports = vcxconfig;
