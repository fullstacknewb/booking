import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCdKgafKL0Gbbf1wyA3Dv251MMqtK4kWOQ",
    authDomain: "nextjs-1e84c.firebaseapp.com",
    projectId: "nextjs-1e84c",
    storageBucket: "nextjs-1e84c.appspot.com",
    messagingSenderId: "104431127519",
    appId: "1:104431127519:web:a52dd325699f8cdf30926a"
  };

const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);
  