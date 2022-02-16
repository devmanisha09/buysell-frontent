//firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.1/firebase-messaging.js');

try{
  var firebaseConfig = {
    apiKey: "000000000000000000000000000000000000000",
    authDomain: "flutter-buy-and-sell.firebaseapp.com",
    databaseURL: "https://flutter-buy-and-sell.firebaseio.com",
    projectId: "flutter-buy-and-sell",
    storageBucket: "flutter-buy-and-sell.appspot.com",
    messagingSenderId: "000000000000",
    appId: "1:000000000000:web:0000000000000000000000",
    measurementId: "G-0000000000"            
};
  let messaging = null
  if (firebase.messaging.isSupported()) {
    firebase.initializeApp(firebaseConfig)
    messaging = firebase.messaging()
  } else {
    console.log('no-support :(')
  }
    messaging.setBackgroundMessageHandler(function(payload) {
      console.log('[firebase-messaging-sw.js] Received background message ', payload);
      if(payload.data.flag == 'fe_broadcast') {
        const notificationTitle = payload.notification.title || '';
        const notificationOptions = {
            body: payload.notification.body || '',
            icon: '/fbs_ico.ico',
        };
    
        return self.registration.showNotification(notificationTitle,
            notificationOptions);
      }
    });
    self.addEventListener('notificationclick', function(event) {
      event.notification.close();
      let url = event.notification.click_action;
      event.waitUntil(self.clients.openWindow(url));
    });


  }
  

catch(err){
  console.log(err);
}
