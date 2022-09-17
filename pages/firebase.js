import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDbOn1ocqopXyQna3JDRfYzfry7k0jtlqA",
  authDomain: "new-project-aa84e.firebaseapp.com",
  databaseURL: "https://new-project-aa84e-default-rtdb.firebaseio.com",
  projectId: "new-project-aa84e",
  storageBucket: "new-project-aa84e.appspot.com",
  messagingSenderId: "633715937666",
  appId: "1:633715937666:web:22e18a7000b5feb8303f9b",
  measurementId: "G-7BGJGY5ZDQ"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };