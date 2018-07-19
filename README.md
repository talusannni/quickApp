# quickApp VideoChat
The sample quickAPI demonstrates the use of APIs for the enblex platform. 
The main motivation behind the application is to demontrate usage of APIs and allow developers to ramp up on app by hosting on their own devices instead of directly using servers.

RTC (Real time communication) applications hosted on EnableX platform run natively on supported set of web browsers without any additional plugin downloads. 

This basic video chat application is generated using HTML,CSS,Bootstrap v4.0.0-alpha.6,JAVA Script,jQuery,Node V8.9.1 and VcxRtc.

>The details of the supported set of web browser can be found in the EnableX architecture specification document.

## Important!
When building an Node app [quickApp] with VcxRtc you need to make sure to include the updated VcxRtc.js polyfills for rtcpeerconnection and getusermedia otherwise your application will not work in web.

## Demo

You can see a demo of this sample running at [https://quickapp.enablex.io/] it is recomended to join this room with authorised RoomID generated by authorised person.

> **Note** This demo is demonstrates very basic features of EnableX platform to explain usage of APIs 

# Installation

## Pre-requisite 
### appId and apiKey 
Please register to VCloudX to get AppId and AppKey. This can be done through the self-service portal from here, or contact support at here
Once you register with VCloudX and obtain the AppId and ApiKey, clone the repository from this link and follow following steps:

### Download the Application
make a sample directory e.g. quickApp and download/clone the repository:
> git clone https://github.com/enablex/quickApp.git


### SSL Certificates 
For the deployment you would need to use your companies valid certificates and point your application to use. But since this is a sample application and intent is to run on your local system, you would need to create a self-signed certificates.

There are various free sites that generate self-signed certificates. One of them you can use (You can always google it!)
> https://www.sslchecker.com/csr/self_signed
> Or 
> https://www.akadia.com/services/ssh_test_certificate.html . You have self-signed certificate files named server.crt and server.key at the step 4 (Generating a Self-Signed Certificate). 
Create a directory under your application directory quickApp 
Copy your certificate files (.key and .crt) to the directory called certs.

## Build
Before you can run this application by hosting it locally you need to modify `server/vcxconfig.js`.
snippet:
>
>vcxconfig.SERViCE={

>    name: "VCloudX Quick Start", //Name of the Application [Change optional]

>    version: "1.0.0", //Version [Change optional]

>    path: "/v1", //Route [Default /v1]

>    domain: "loclhost", // FQDN of  your hosting enviorment [accept either DNS Or IP]

>    port  : "4443", //FQDN of  your hosting port You need sudo permission if you want to use standard 443

>    listen_ssl : true //SSL on/off key  [Default "true" ,Note: it is Required to keep it "ture"]

> };

>vcxconfig.Certificate={

>    ssl_key: "../certs/server.key", // use the certificate ".key" [self signed or registered]

>    ssl_cert : "../certs/server.crt", // use the certificate ".crt" [self signed or registered]

>    sslCaCerts : [ ] // use the certificate CA[chain] [self signed or registered]

>};

>vcxconfig.SERVER_API_SERVER={

>    host: 'api.enablex.io', // hosted VCX_Server_api DNS address []

>    port: '5454', // hosted VCX_Server_api DNS port

>};

>vcxconfig.clientPath = "../client"; // UI files location

> vcxconfig.APP_ID = #AppId // "5ae1ba761bda760cca4770a2"; // Enter the issued/authorized application ID

> vcxconfig.APP_KEY = #AppKey //  "aHe3e4aduhuTyTaUyyyAyUyqy3aHyQupytyp"; // Enter the issued/authorized application key



You need to include few mandatory fields like quickApp `appId` and `appKey` , `APP-FQDN of  your hosting enviorment` , `APP-FQDN hosting port` , `SSL key and certificate` .
  >Seeting up APP-FQDN
        
        > domain: "xyz.com", // APP's FQDN or IP of  your hosting enviorment
        > port  : "443", //hosting port of your APP's FQDN or IP  
  >setting up SSL credentials
        
        > ssl_key: " ./../cert/xyz.key", // use the certificate ".key" [self signed or registered]
        > ssl_cert : "./../cert/xyz.crt", // use the certificate ".crt" [self signed or registered]
        > sslCaCerts : [./../cert/xyz.ca-bundle] // use the certificate CA[chain] [self signed or registered]        
  >Seeting up appId andappKey   
    
       > vcxconfig.APP_ID = "5b289848b0445b59155bf432";// Enter the issued/authorized application ID
       > vcxconfig.APP_KEY = "2e9etaYamyPaXaXyJyHaeyLe4yeyLeHaeena"; // Enter the issued/authorized application key
   
    
        
        
### Development server

Run `node server.js` inside server.js or else use npm start  for startingup dev server. Navigate to `https://localhost:5004/`. The app will automatically reload if you change any of the source files.


## Build

Run `npm install --save` to build the project. and The build artifacts will be stored in the `./node_modules` directory.

### Basic set of server_api used
>Rest API service meant to be called from Partner’s Application Server to provision video enabled 
meeting rooms. API Access is given to each application partners develop. Server API is a Rest API 
Service to carry out Provisioning Tasks for your Application on EnableX Infrastructure, such as manage Rooms, 
create Token, get post conference Call Detail Reports etc.

## Run!!
Point your browser to the DNSname:port  that you configured in vcxconfig.js. In our case :
> https://localhost:4443

### Allow Access to Camera and Mic to start your first call



For this  application [quickApp] we used below  mentioned API endpoints call.

Note: details handling of server_Api endpoints are available under [. / vcxroom.js]
  ##### https://api.enablex.io/v1/rooms
    use to get all rooms details
  ##### https://api.enablex.io/v1/rooms/:roomId
    use to get a specific room Details
  ##### https://api.enablex.io/v1/rooms/:roomId/tokens
    use to create tokens
### Running end-to-end tests
To get more help on the Please refer EnableX architecture specification document
