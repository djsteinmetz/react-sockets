import firebase from "firebase/app";
import "firebase/auth";

const prodConfig = {
  apiKey: "AIzaSyBwkTXhhV834trNDGDb--FWKTUJmd7MrUc",
  authDomain: "status-tracker-dee3a.firebaseapp.com",
  databaseURL: "https://status-tracker-dee3a.firebaseio.com",
  projectId: "status-tracker-dee3a",
  storageBucket: "status-tracker-dee3a.appspot.com",
  messagingSenderId: "692331242876"
};

const devConfig = {
  apiKey: "AIzaSyBwkTXhhV834trNDGDb--FWKTUJmd7MrUc",
  authDomain: "status-tracker-dee3a.firebaseapp.com",
  databaseURL: "https://status-tracker-dee3a.firebaseio.com",
  projectId: "status-tracker-dee3a",
  storageBucket: "status-tracker-dee3a.appspot.com",
  messagingSenderId: "692331242876"
};

const config = process.env.NODE_ENV === "production"
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth,
};