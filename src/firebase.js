import firebase from 'firebase'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDfkP_MzBr-XQle_w5eeSrt5gjaK3wcdPY",
  authDomain: "golfplayed-733f4.firebaseapp.com",
  databaseURL: "https://golfplayed-733f4.firebaseio.com",
  projectId: "golfplayed-733f4",
  storageBucket: "golfplayed-733f4.appspot.com",
  messagingSenderId: "277095100919"
};
firebase.initializeApp(config);

export default firebase;