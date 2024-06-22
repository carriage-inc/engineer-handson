import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBQmCZZs_O0-VN4XYKLR2vqDQlxGbyTpMM",
  authDomain: "manatech-3d127.firebaseapp.com",
  projectId: "manatech-3d127",
  storageBucket: "manatech-3d127.appspot.com",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
