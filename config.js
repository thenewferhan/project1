import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    

        apiKey: "AIzaSyBAThYRNap4EAHxVGAXod4KXPIdglP8IFc",
      
        authDomain: "teamvoting-23dd2.firebaseapp.com",
      
        projectId: "teamvoting-23dd2",
      
        storageBucket: "teamvoting-23dd2.appspot.com",
      
        messagingSenderId: "914183225551",
      
        appId: "1:914183225551:web:8824066f2144f2f75977ba"
      
      
      
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();