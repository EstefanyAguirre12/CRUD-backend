const firebase = require("firebase");

const firebaseConfig = {
    apiKey: "AIzaSyDsh5RDAk6bAGBYC1S4nRBlFMkvUPI9i8U",
    authDomain: "crud-26a30.firebaseapp.com",
    projectId: "crud-26a30",
    storageBucket: "crud-26a30.appspot.com",
    messagingSenderId: "654604749121",
    appId: "1:654604749121:web:ef37ca0b0921b2b856f9c0",
    measurementId: "G-MKC1T4NQ3R"
  };

  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const Movies = db.collection('movies');
  module.exports = Movies;