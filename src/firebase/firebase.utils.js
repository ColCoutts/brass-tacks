import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCUyhU01XL89RrK1CGza-vz1BrsHEawGHE',
  authDomain: 'brass-tacks-db.firebaseapp.com',
  databaseURL: 'https://brass-tacks-db.firebaseio.com',
  projectId: 'brass-tacks-db',
  storageBucket: 'brass-tacks-db.appspot.com',
  messagingSenderId: '844086741335',
  appId: '1:844086741335:web:7aa53922e5f1ec52bc9612',
  measurementId: 'G-1Y79BD1474'
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
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
