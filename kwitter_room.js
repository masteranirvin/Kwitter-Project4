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
document.getElementById("user_name").innerHTML="Welcome "+user_name+ " ! ";

function addRoom(){
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
  });
  localStorage.setItem("room_name",room_name);
  window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
   console.log("Room Name - " + Room_names);
   row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
   document.getElementById("output").innerHTML+=row;

  //End code
  });});}
getData();

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}

