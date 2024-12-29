// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAo9bUKKmQjutj_Bo3IuQWmqxBu9gDUGKM",
  authDomain: "acm-srm-chatting-platform.firebaseapp.com",
  projectId: "acm-srm-chatting-platform",
  storageBucket: "acm-srm-chatting-platform.firebasestorage.app",
  messagingSenderId: "432540268566",
  appId: "1:432540268566:web:9b2ea2c25bce84fdad1d37",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const signup = async (username, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await setDoc(doc(db, "users", user.uid), {
      id: user.uid,
      username: username.toLowerCase(),
      password: password,
      email: email,
      name: "",
      avatar: "",
      bio: "Hey their I am using ACM Chatting Aapplication",
      lastseen: Date.now(),
    });
    await setDoc(doc(db, "chats", user.uid), {
      id: user.uid,
      chatData: [],
    });
  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};
const login = async (email, password) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    return res.user;
  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};
export { signup, login };
