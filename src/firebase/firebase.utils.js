import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDw4CNTvHaFdoSJI9cOMU9C0cLZVAbl6Wk",
    authDomain: "crwn-db-53b80.firebaseapp.com",
    databaseURL: "https://crwn-db-53b80.firebaseio.com",
    projectId: "crwn-db-53b80",
    storageBucket: "",
    messagingSenderId: "515367089601",
    appId: "1:515367089601:web:d5cb9bef7a14022e"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;