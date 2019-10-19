import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig  = {
    apiKey: "AIzaSyDhxweaoUEK5H8iqhViw_oOyUrS7sJX5Uo",
    authDomain: "tech-shop-9a4cb.firebaseapp.com",
    databaseURL: "https://tech-shop-9a4cb.firebaseio.com",
    projectId: "tech-shop-9a4cb",
    storageBucket: "tech-shop-9a4cb.appspot.com",
    messagingSenderId: "769823742215",
    appId: "1:769823742215:web:8642550727c3e2a9638da2",
    measurementId: "G-KGZV7C2LQC"
};

firebase.initializeApp(firebaseConfig );

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;