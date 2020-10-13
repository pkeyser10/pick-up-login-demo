import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const app = firebase.initializeApp({

  apiKey: "AIzaSyBFNnrXE_VA5q18CZ9nGJ98tKmSfqOptyw",
  authDomain: "react-chat-c2899.firebaseapp.com",
  databaseURL: "https://react-chat-c2899.firebaseio.com",
  projectId: "react-chat-c2899",
  storageBucket: "react-chat-c2899.appspot.com",
  messagingSenderId: "508474465603",
  appId: "1:508474465603:web:9d8ae89812028d122ea3f6"

});

export const auth = app.auth();
export const firestore = app.firestore();
export default app;
