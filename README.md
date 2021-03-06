# QuickApp - A Sample Video Chat Application

The sample quickAPI demonstrates the use of APIs for EnableX platform. The main motivation behind this application is to demonstrate usage of APIs and allow developers to ramp up on app by hosting on their own devices instead of directly using servers.

RTC (Real Time Communication) Applications hosted on EnableX platform run natively on supported set of web browsers without any additional plugin downloads. 

This basic Video Chat Application is generated using HTML, CSS, Bootstrap v4.0.0-alpha.6, JAVA Script, jQuery, Node V8.9.1 and EnxRtc (The EnableX Web Toolkit). 

>The details of the supported set of web browsers can be found here:
https://developer.enablex.io/release-notes/#cross-compatibility



## 1. Important!

When developing a Node Application __[Like quickApp]__ with EnxRtc.js make sure to include the updated EnxRtc.js polyfills for RTCPeerConnection and getUserMedia otherwise your application will not work in web browsers.



## 2. Demo

This quickApp Application has been setup for Live Demostration here:
https://quickapp.enablex.io/

You need to get connected to our [Sales Team](sales@enablex.io) to get access for the Demo Applicaiton.



## 3. Installation


### 3.1 Pre-Requisites

#### 3.1.1 App Id and Api Key 

* Register with EnableX [https://www.enablex.io] 
* Create your Application
* Get your App ID and App Key delivered to your Email
* Clone or download this Repository [https://github.com/enablex/quickApp.git] & follow the steps further 


#### 3.1.2 SSL Certificates

The Application needs to run on https. So, you need to use a valid SSL Certificate for your Domain and point your application to use them. 

However you may use self-signed Certificate to run this application locally. There are many Web Sites to get a Self-Signed Certificate generated for you, Google it. Few among them are:

* https://www.sslchecker.com/csr/self_signed
* https://www.akadia.com/services/ssh_test_certificate.html  

As you have Certificate or created a Self-Signed Certificate, create a directory "certs" under your quickApp Application Directory. Copy your Certificate files (.key and .crt files)  to this directory. 


#### 3.1.3 Configure

Before you can run this application by hosting it locally you need to customize `server/vcxconfig.js` to meet your needs:
```javascript 
vcxconfig.SERViCE = {
  name: "VCloudX Quick Start",        // Name of the Application [Change optional]
  version: "1.0.0",                   // Version [Change optional]
  path: "/v1",                        // Route [Default /v1]
  domain: "localhost",                // FQDN of  your hosting enviornment
  port  : "4443",                     // FQDN of  your hosting port. You need sudo permission if you want to use standard 443
  listen_ssl : true                   // SSL on/off key  [ Set always to "true" ]
};

vcxconfig.Certificate = {
  ssl_key:    "../certs/server.key",  // Use the certificate ".key" [self signed or registered]
  ssl_cert :  "../certs/server.crt",  // Use the certificate ".crt" [self signed or registered]
  sslCaCerts :  [ ]                   // Use the certificate CA[chain] [self signed or registered]
};

vcxconfig.SERVER_API_SERVER = {
  host: 'api.enablex.io',             // Hosted EnableX Server API Domain Name
};

vcxconfig.clientPath  = "../client";  // UI files location
vcxconfig.APP_ID      = #AppId;       // Enter Your App ID
vcxconfig.APP_KEY     = #AppKey;      // Enter Your App Key
```

### 3.2 Build

Run `npm install --save` to build the project and the build artifacts will be stored in the `./node_modules` directory.


#### 3.2.1 Run Server

Run `node server.js` inside `server` folder for starting your Server. 


#### 3.2.2 Test 

a) Open a browser and go to [https://localhost:4443/](https://localhost:4443/). The browser should load the App. 
b) Allow access to Camera and Mic as and when prompted to start your first RTC Call through EnableX



## 4 Server API

EnableX Server API is a Rest API service meant to be called from Partners' Application Server to provision video enabled 
meeting rooms. API Access is given to each Application through the assigned App ID and App Key. So, the App ID and App Key 
are to be used as Username and Password respectively to pass as HTTP Basic Authentication header to access Server API.
 
For this application [quickApp], the following Server API calls are used: 
* https://api.enablex.io/v1/rooms - To get list of Rooms
* https://api.enablex.io/v1/rooms/:roomId - To get information of the given Room
* https://api.enablex.io/v1/rooms/:roomId/tokens - To create Token for the given Room

To know more about Server API, go to:
https://developer.enablex.io/api/server-api/



## 5 Client API

Client End Point Application uses Web Toolkit EnxRtc.js to communicate with EnableX Servers to initiate and manage RTC Communications.  

To know more about Client API, go to:
https://developer.enablex.io/api/client-api/


