import * as firebase from 'firebase';

// Optionally import the services that you want to use
//import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBHt-qQf2vO5qgXXEsOQfT4dMirfawU2rM",
    authDomain: "skyelite-679ef.firebaseapp.com",
    databaseURL: "https://skyelite-679ef.firebaseio.com",
    projectId: "skyelite-679ef",
    storageBucket: "skyelite-679ef.appspot.com",
    messagingSenderId: "519893458934",
    appId: "1:519893458934:web:446896cd3dc8365c25b1d7",
    measurementId: "G-XFHCTP73VK"
};

firebase.initializeApp(firebaseConfig);
