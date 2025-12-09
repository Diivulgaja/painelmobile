importScripts("https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyDI4Vt_wWDoorQjroBSMav-yCGlhtoiHjY",
  authDomain: "doce-e-ser-de1f6.firebaseapp.com",
  projectId: "doce-e-ser-de1f6",
  messagingSenderId: "1021515521250",
  appId: "1:1021515521250:web:c07acb32b18bec05d512bb"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("BG message:", payload);

  const notificationTitle = payload.notification?.title || "Novo pedido";
  const notificationOptions = {
    body: payload.notification?.body || "Você recebeu um novo pedido!",
    icon: "/icon-192.png"
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
