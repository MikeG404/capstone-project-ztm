// There is many micro-libraries inside Firebase

// Setup Firebaas App to work with, it's the main instance
import { initializeApp } from "firebase/app";
// I would like to use google to connect with my app, that's what the provider gives to me
import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth } from "firebase/auth";
// This is the method to create and modifify the doc and the instance
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

// I need the credential
const firebaseConfig = {
    apiKey: "AIzaSyDyqvuItHxBTxufydukSPxBqjhovDlmZho",
    authDomain: "crown-clothing-db-7278c.firebaseapp.com",
    projectId: "crown-clothing-db-7278c",
    storageBucket: "crown-clothing-db-7278c.firebasestorage.app",
    messagingSenderId: "261089858962",
    appId: "1:261089858962:web:1f44c6dc035d0668b8dd4b",
    measurementId: "G-YGYETK7RWK"
};

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
    userAuth,
    additionnalInformation = {}
) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionnalInformation
            });
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }

    return userDocRef;
}

export const signUpWithEmailAndPassword = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password);
}