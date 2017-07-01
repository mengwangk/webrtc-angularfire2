# webrtc-angularfire2

WebRTC using AngulareFire2 sample code.

## Testing

`git clone https://github.com/mengwangk/webrtc-angularfire2.git`

`cd angular`

`npm install`

`ng serve`

- Launch Google Chrome and navigate to "http://localhost:4200"
- Launch another instance of Google Chrome with the same URL and click on the "Connect" button.



## Configure SSL

If you need to host the sample on your own server, you can use the NodeJS server available in the nodejs-server folder.

- You can generate self-signed SSL certificate using OpenSSL. Refer to this [article](https://gaboesquivel.com/blog/2014/nodejs-https-and-ssl-certificate-for-development/) to find out more. You can set an empty challenge and set the days to be, e.g. 1000.
- I have generated the certificate (under nodejs-server folder) so it is not a must for you to do so.
- In case you are running the server locally and is using Chrome, you may want to configure Chrome to allow insecure localhost.
`chrome://flags/#allow-insecure-localhost`