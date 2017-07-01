// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  appName: "webrtc-angularfire2",
  firebase: {
    apiKey: "AIzaSyAcMOgG58ZIfB0Mr62tpUS6YUB8wpnvIJg",
    authDomain: "webrtc-e1eeb.firebaseapp.com",
    databaseURL: "https://webrtc-e1eeb.firebaseio.com",
    projectId: "webrtc-e1eeb",
    storageBucket: "",
    messagingSenderId: "276952673200"
  }
};
