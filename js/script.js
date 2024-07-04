// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDU8hsM0VX-xlLrlzYi56OiBFDAjjnEhRM",
  authDomain: "gsmil07-83480.firebaseapp.com",
  databaseURL: "https://gsmil07-83480-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "gsmil07-83480",
  storageBucket: "gsmil07-83480.appspot.com",
  messagingSenderId: "964837400155",
  appId: "1:964837400155:web:2329a19d0e284a8fbca97e",
  measurementId: "G-3M2NJN9RV9"
};

// Initialize Firebase
initializeApp(firebaseConfig);

//function(signUpUser(email, password){
//  const auth = getAuth();
//  console.log(email, passwprd, 2);
//})


$("#signup-button").on("click", function () {
  console.log(100);
  const email = $("#signup-email").val();
  const password = $("#signup-password").val();
  const auth = getAuth();

  createUserWithEmailAndPassword(auth, email, password)
    .then(function (userInfo) {
      //登録成功後の処理
      console.log("ユーザー登録成功", userInfo);
      location.href = "index.html";
      //location.href="index.html";
    })
    .catch(function (error) {
      //失敗したときの処理
      console.log(error);
      $("#message").html(error);
    });
});
/*
function loginUser(email, password){
  const auth = getAuth();

  signInWithEmailAndPassword(auth, email, password)
    .then(function (userInfo) {
      console.log(userInfo);
      location.href = "index.html";
    });

    .catch (function (error) {
    console.log(error);
    $("#message").html(error);
}
*/
$("#login-button").on("click", function () {
  console.log(200);
  const email = $("#login-email").val();
  const password = $("#login-password").val();
  const auth = getAuth();

  signInWithEmailAndPassword(auth, email, password)
    .then(function (userInfo) {
      console.log("ログイン成功", userInfo);
      location.href = "index.html";
    })
    .catch(function (error) {
      console.log(error);
      $("#message").html(error);
    })
});

$("#logout-button").on("click", function () {
  console.log(300);
  const auth = getAuth();

  signOut(auth)
    .then(function () {
      location.href = "login.html";
    })
    .catch(function (error) {
      console.log(error);
      $("#message").html(error);
    });

})