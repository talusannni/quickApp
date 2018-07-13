# quickApp VideoChat

A basic video chat application using HTML,CSS,Bootstrap v4.0.0-alpha.6,JAVA Script,jQuery,Node V8.9.1 and VcxRtcLib. This project was generated with [node] version 8.9.1.

>For an example of how to use VcxRtcLib with basic HTML,CSS,Bootstrap,Javascript And Jquary  have a look at [enablex/quickApp](https://github.com/enablex/quickApp).

## Important!

When building an Node app with VcxRtcLib you need to make sure to include the updated VcxRtcLib.js polyfills for rtcpeerconnection and getusermedia otherwise your application will not work in web.

## Known Limitations

* This sample app does not work in IE 11 . To get it to work in IE 11 you will need to turn on the extra polyfills for IE in.

## Demo

You can see a demo of this sample running at [https://quickapp.enablex.io/] it is recomended to join this room with RoomID - "5b4840517e83194a9cdf6b73"
> **Note** The demo is setup with very basic feature, so that a room got used  based on your public IP address. Both the party can used the same roomId to join the room
## Running the App

### get your quickApp appId and apiKey , sessionId from authorised person

Before you can run this application you need to modify [server/vcxconfig.js] there you need to include few mandatory fields like quickApp appId and API Key ,APPQDN of  your hosting enviorment,APPQDN hosting port,SSL key and certificate .

### Development server

Run `node server.js` inside server.js or else use npm start  for startingup dev server. Navigate to `https://localhost:5004/`. The app will automatically reload if you change any of the source files.


### Build

Run `npm install --save` to build the project. and The build artifacts will be stored in the `./node_modules` directory.

### Running unit tests

N.A
### Running end-to-end tests

N.A

### Further help

To get more help on the Please refer Product Description Documents.