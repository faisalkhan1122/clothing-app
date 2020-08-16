import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDcKI1IUrJcEH-lnJX2sdmEiCdToOTOvRI",
  authDomain: "crwn-db-2eb5a.firebaseapp.com",
  databaseURL: "https://crwn-db-2eb5a.firebaseio.com",
  projectId: "crwn-db-2eb5a",
  storageBucket: "crwn-db-2eb5a.appspot.com",
  messagingSenderId: "380742561096",
  appId: "1:380742561096:web:a02d6ca86bf969df7ad77d",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ params: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
