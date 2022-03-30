import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAbL0xQrUHOkmpd68FgmOX_KnKrXhaDB2A",
    authDomain: "is303-proj3-bec26.firebaseapp.com",
    projectId: "is303-proj3-bec26",
    storageBucket: "is303-proj3-bec26.appspot.com",
    messagingSenderId: "89306812065",
    appId: "1:89306812065:web:7970fe6a297d8b54032ae0"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);