import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

    let firebaseConfig = {
        apiKey: "AIzaSyAxnLVYBkFF_9BPXPL8osA_qOe-W6sCWqM",
        authDomain: "reactapp-f26ad.firebaseapp.com",
        projectId: "reactapp-f26ad",
        storageBucket: "reactapp-f26ad.appspot.com",
        messagingSenderId: "616215914535",
        appId: "1:616215914535:web:4e1c1775fe173214468602",
        measurementId: "G-EM0D5M8W3W"
    };
    // Initialize Firebase
    
        firebase.initializeApp(firebaseConfig)
    
    // firebase.analytics();


  export default firebase;