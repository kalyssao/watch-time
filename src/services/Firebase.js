import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

require('dotenv').config()

var config = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectID: 'watch-time-2cc8a',
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_ID,
    appId: process.env.REACT_APP_APP_ID
}

class Firebase {
    constructor() {
        firebase.initializeApp(config)

        this.auth = firebase.auth()
    }

    doCreateUserWithEmailAndPassword = (email, password) => 
    this.auth.createUserWithEmailAndPassword(email, password)

    doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password)

    doSignOut = () => this.auth.signOut()

    doPasswordReset = (email) => this.auth.sendPasswordResetEmail(email)

    doPasswordUpdate = (password) => this.auth.updatePassword(password)
}

firebase.firestore()

export default firebase