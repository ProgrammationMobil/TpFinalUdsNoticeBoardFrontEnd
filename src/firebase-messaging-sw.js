importScripts('https://www.gstatic.com/firebasejs/10.11.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.11.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyAkBGw4OipOY87dY9xPjmkzf6MKyOLo5_Q",
  authDomain: "notification-push-46fa3.firebaseapp.com",
  projectId: "notification-push-46fa3",
  storageBucket: "notification-push-46fa3.firebasestorage.app",
  messagingSenderId: "351474143695",
  appId: "1:351474143695:web:6d65f0cdaf0c95322a82ba"
});

const messaging = firebase.messaging();
