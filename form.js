import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
import { getDatabase, ref} from "https://www.gstatic.com/firebasejs/9.9.0/firebase-database.js";

// Your web app's Firebase configuration
const config = {
    apiKey: "AIzaSyBm5y85X7Zd5iZp1DJRROP2Z86S9yLn5I8",
    authDomain: "portfolio-form-6868f.firebaseapp.com",
    databaseURL: "https://portfolio-form-6868f-default-rtdb.firebaseio.com",
    projectId: "portfolio-form-6868f",
    storageBucket: "portfolio-form-6868f.appspot.com",
    messagingSenderId: "230909981099",
    appId: "1:230909981099:web:eda10e25731b71654aa2ee"
};
// Initialize Firebase
const app = initializeApp(config);
// Initialize Database content
const database = getDatabase(app)
const dbRef = ref(database);