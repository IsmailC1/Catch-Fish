import Rebase from 're-base';
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyBwxuFGS2QsP9XV4CghriwOjl17LqaflTE",
        authDomain: "fish1-52e80.firebaseapp.com",
        databaseURL: "https://fish1-52e80-default-rtdb.europe-west1.firebasedatabase.app",
});

const base = Rebase.createClass(firebaseApp.database());

//This is a named export 
export {firebaseApp};

//This is a default export 
export default base;