import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyDn7VpKgjNvQaKuiK6g2tMahVr7D93xbZg",
    authDomain: "clone-16353.firebaseapp.com",
    projectId: "clone-16353",
    storageBucket: "clone-16353.appspot.com",
    messagingSenderId: "74394598752",
    appId: "1:74394598752:web:88caf72c035dacae0b3205",
    measurementId: "G-DCGW9PPZXZ"

});


const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };