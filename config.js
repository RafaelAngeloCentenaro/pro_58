import firebase from 'firebase';

  var firebaseConfig = {
    //cole seu SDK aqui
    
      apiKey: "AIzaSyAvfzgsIs1CCKtLntMs6T4O-ZDkqGE4KGs",
      authDomain: "pro58-20e5d.firebaseapp.com",
      projectId: "pro58-20e5d",
      storageBucket: "pro58-20e5d.appspot.com",
      messagingSenderId: "343765842191",
      appId: "1:343765842191:web:260faadfb5e187971ae67a"
   


    
  };

  // Inicialize o Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase.database();