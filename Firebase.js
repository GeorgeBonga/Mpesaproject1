import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

// const firebaseConfig = {
// apiKey = "",
// authDomain ="",
// projectId = "",
// projectBucket ="",
// messageSenderId = "",
// appId = "",

// };
    

let app;

if (firebase.app.length ===0){
    app.firebase.initializeApp(firebaseConfig);
}else{
    app.firebase.app();
}

const db = firebase.firestore();
const auth = firebase.auth();


export default db;
export {auth};