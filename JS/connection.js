// Import the functions you need from the SDKs you need
import * as app from "https://www.gstatic.com/firebasejs/8.2.9/firebase-app.js";
import * as database from "https://www.gstatic.com/firebasejs/8.2.9/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
function connectFireBase(){
    const firebaseConfig = {
        apiKey: "AIzaSyAEdDlX2nv5MX6UP5u1BXfQzeLDrtwoOys",
        authDomain: "phonedemo-af6db.firebaseapp.com",
        databaseURL:"https://phonedemo-af6db-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "phonedemo-af6db",
        storageBucket: "phonedemo-af6db.appspot.com",
        messagingSenderId: "95315513615",
        appId: "1:95315513615:web:900cfda806c4d68f95ae7a",
        measurementId: "G-QEXH3RMYKR",
      };
      // Initialize Firebase
      let app = firebase.initializeApp(firebaseConfig);
      
      let db = firebase.database();

      return db;
}

export {connectFireBase};

// function writeDeveloperData(id, name) {
//     db.ref('phonedata' + id).set({
//     name: name,
//   });
// }

// // writeDeveloperData("Xiaomi", "Redmi13")

 //   db.ref("phonedata").on("value", function(snapshot){
        // let v = snapshot.val();
        // console.log(1);
        // console.log(snapshot.val());
        // for(let x in snapshot.val()){
            // console.log(1);
            // console.log(snapshot.val()[x]);
            // console.log(2);
        // }
    // })