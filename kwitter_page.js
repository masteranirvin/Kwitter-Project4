var firebaseConfig = {
    apiKey: "AIzaSyCfD07X9-ahvcyByhogHb-6yD7I6abzAMg",
    authDomain: "kwitter-bd45a.firebaseapp.com",
    databaseURL: "https://kwitter-bd45a-default-rtdb.firebaseio.com",
    projectId: "kwitter-bd45a",
    storageBucket: "kwitter-bd45a.appspot.com",
    messagingSenderId: "163135709669",
    appId: "1:163135709669:web:d70e0090ce3a08b9bd0f0c"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");

  function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
    document.getElementById("msg").value= "";
  }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;


//End code
    } });  }); }
getData();
