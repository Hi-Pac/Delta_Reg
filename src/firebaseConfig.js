import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js';
import { getFirestore, serverTimestamp } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js';

const firebaseConfig = {
  apiKey: 'AIzaSyBGmPBvFrap25W2d-BueVCjHmWJh5vAaiU',
  authDomain: 'reg-time.firebaseapp.com',
  projectId: 'reg-time',
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const getServerTimestamp = () => serverTimestamp();
