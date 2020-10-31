import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBuXWC4F1XxBo0JMB0KZg3O0in5TDCgOM8",
    authDomain: "crown-db-6cbba.firebaseapp.com",
    databaseURL: "https://crown-db-6cbba.firebaseio.com",
    projectId: "crown-db-6cbba",
    storageBucket: "crown-db-6cbba.appspot.com",
    messagingSenderId: "945675621271",
    appId: "1:945675621271:web:0d0ce768308a18113d2ad2",
    measurementId: "G-WVQNKVQK10"
  };


  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt : 'select_account'});

  export const SignInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;