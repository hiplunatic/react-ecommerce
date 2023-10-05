// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider 
} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3NDZhNPZbkfRrJmPBgPAopnVhsuHnuAU",
  authDomain: "crwn-clothing-8e221.firebaseapp.com",
  projectId: "crwn-clothing-8e221",
  storageBucket: "crwn-clothing-8e221.appspot.com",
  messagingSenderId: "1081608280555",
  appId: "1:1081608280555:web:50f9b4af25f24685afe1ae"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);