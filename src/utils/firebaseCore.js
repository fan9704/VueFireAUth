import { getAuth, GithubAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import { API_KEY } from "./env";

const firebaseConfig = {
    apiKey: "AIzaSyApi1UE5zrhK2FVfGyKE70nAsxTLmw9Xj8",
    authDomain: "vuefireauth-94879.firebaseapp.com",
    projectId: "vuefireauth-94879",
    storageBucket: "vuefireauth-94879.appspot.com",
    messagingSenderId: "941502028048",
    appId: "1:941502028048:web:3275c25e3331b85c9fad95",
    measurementId: "G-7CM1RSK215"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const githubProvider = new GithubAuthProvider();

export { auth, githubProvider }