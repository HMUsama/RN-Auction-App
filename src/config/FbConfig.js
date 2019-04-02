import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var config = {
  apiKey: "AIzaSyCovnnOVEJ0zb4njFTFcO_HX5GvsU06btI",
  authDomain: "auction-app-b3d7e.firebaseapp.com",
  databaseURL: "https://auction-app-b3d7e.firebaseio.com",
  projectId: "auction-app-b3d7e",
  storageBucket: "auction-app-b3d7e.appspot.com",
  messagingSenderId: "323854891948"
  };
  firebase.initializeApp(config);

  export default firebase;
