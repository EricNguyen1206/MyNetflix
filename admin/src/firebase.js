import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyATiMr7_uqaaTCJERPOCu7fFrKzm4L2Hy0",
    authDomain: "mynetflix-5b499.firebaseapp.com",
    projectId: "mynetflix-5b499",
    storageBucket: "mynetflix-5b499.appspot.com",
    messagingSenderId: "37323817274",
    appId: "1:37323817274:web:94650e5290ebea01b31003",
    measurementId: "G-853DYY7NKH",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
