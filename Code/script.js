import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-analytics.js";
import { getDatabase,ref,set,child,push,update,onValue } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-database.js";
  
const firebaseConfig =
{
  apiKey: "AIzaSyCLUsdPUonXrCFBwFcxzxyEVtSjU-fBebg",
  authDomain: "iosolde-project-16-04-01.firebaseapp.com",
  databaseURL: "https://iosolde-project-16-04-ALT1-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "iosolde-project-16-04-01",
  storageBucket: "iosolde-project-16-04-ALT1.appspot.com",
  messagingSenderId: "750590606689",
  appId: "1:750590606689:web:f30cc2bee05df5db129920",
  measurementId: "G-ZS0XKHPV5T"  
};

const app = initializeApp(firebaseConfig);


window.onload = function ()
{
  document.getElementById("testing").onclick = function ()
  {
      const db = getDatabase();
      const dbRef = ref(db, '/artists/');
      onValue(dbRef, (snapshot) => {
          //const data = JSON.parse(JSON.stringify(snapshot.val()));
          const data = snapshot.val();

          for (key in data) {
            if (!json.hasOwnProperty(key)) continue;
            console.log(key);
            console.log(json[key].email);
            document.getElementById("replace").innerHTML += json[key].email;
          }
      });
  };
}