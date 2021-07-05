import firebase from "firebase";
import "firebase/storage"
var firebaseConfig = {
    apiKey: "AIzaSyAHVsyapw6GTpJ-8pZPiGI2IjVw-QH9ZKM",
    authDomain: "tapovan-69fc8.firebaseapp.com",
    projectId: "tapovan-69fc8",
    storageBucket: "tapovan-69fc8.appspot.com",
    messagingSenderId: "1034025333060",
    appId: "1:1034025333060:web:2fd419cb67191386b4a711",
    measurementId: "G-4G2JP25HHE"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const db = firebase.firestore();
  const storage = firebase.storage();
  export {db,storage, firebase as default};
