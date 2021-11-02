import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyASzGKx90j7MtYD9X87oJso6C0zRs48LNo",
  authDomain: "workshop2-e499a.firebaseapp.com",
  projectId: "workshop2-e499a",
  storageBucket: "workshop2-e499a.appspot.com",
  messagingSenderId: "818278627186",
  appId: "1:818278627186:web:32227dee161aa2ff9ccfeb"
};

firebase.initializeApp(firebaseConfig);

export { firebase };