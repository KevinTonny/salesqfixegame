import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyA_jTmOp4JD7b2bpFEHoYxj3nsKIxeDhds",
  authDomain: "ecommerce-example-ee1cf.firebaseapp.com",
  projectId: "ecommerce-example-ee1cf",
  storageBucket: "ecommerce-example-ee1cf.appspot.com",
  messagingSenderId: "723591209356",
  appId: "1:723591209356:web:fa618fadc357d61b0db6a9",
  measurementId: "G-G6MNRBMQDJ"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app , "gs://ecommerce-example-ee1cf.appspot.com");
