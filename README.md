# webrtc-angularfire2

WebRTC using AngulareFire2 sample.



## Configure SSL

- You can generate self-signed SSL certificate using OpenSSL. Refer to this [article](https://gaboesquivel.com/blog/2014/nodejs-https-and-ssl-certificate-for-development/) to find out more. You can set an empty challenge and set the days to be, e.g. 1000.
- I have generated the certificate (under nodejs-server folder) so it is not a must for you to do so.
- In case you are running the server locally and is using Chrome, you may want to configure Chrome to allow insecure localhost.
`chrome://flags/#allow-insecure-localhost`