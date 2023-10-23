// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAOiikRoZ8Kb5D6kuiDFoYbfheTTrcoiw",
  authDomain: "name-of-your-product.firebaseapp.com",
  projectId: "name-of-your-product",
  storageBucket: "name-of-your-product.appspot.com",
  messagingSenderId: "681431813280",
  appId: "1:681431813280:web:9a39bb0728e26d1927cdc5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;