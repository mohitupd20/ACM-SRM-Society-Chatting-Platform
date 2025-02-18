// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import { signOut } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { getDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAL7iZAZIWmnlOFSoti772jWPq_iwaGBps",
  authDomain: "acm-chatting.firebaseapp.com",
  projectId: "acm-chatting",
  storageBucket: "acm-chatting.firebasestorage.app",
  messagingSenderId: "957591617542",
  appId: "1:957591617542:web:8e6e0826efa7f40454c387",
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
      bio: "Hey their, I am using ACM Chatting Application",
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
const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};
export { signup, login, logout, auth, db };
