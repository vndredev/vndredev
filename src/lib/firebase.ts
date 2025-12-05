import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDHioTMTGtS-B_KOI7R3qDaFsHLryh5y5Y",
  authDomain: "vndredev-website.firebaseapp.com",
  projectId: "vndredev-website",
  storageBucket: "vndredev-website.firebasestorage.app",
  messagingSenderId: "482730037778",
  appId: "1:482730037778:web:2c744f2e73a8a0505c3ecb",
  measurementId: "G-Q500MN9PQ8"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
