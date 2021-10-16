import firebase from 'firebase';
var firebaseConfig = {
  apiKey: "AIzaSyBHW0pb-C-4233ZVPZ_MndtHTjh8ICLjCM",
  authDomain: "complaintapp-afab9.firebaseapp.com",
  projectId: "complaintapp-afab9",
  storageBucket: "complaintapp-afab9.appspot.com",
  messagingSenderId: "874401332011",
  appId: "1:874401332011:web:450c63f77896be8bb8636e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.database();