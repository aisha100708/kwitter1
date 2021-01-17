
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAXUBv_0xj8NklJyPeYARoz4-8NMbSUI-s",
      authDomain: "kwitter-firebase-4e15f.firebaseapp.com",
      databaseURL: "https://kwitter-firebase-4e15f-default-rtdb.firebaseio.com",
      projectId: "kwitter-firebase-4e15f",
      storageBucket: "kwitter-firebase-4e15f.appspot.com",
      messagingSenderId: "958052502567",
      appId: "1:958052502567:web:918c1a978ea4fee4d11202",
      measurementId: "G-R5WFR6G0NV"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("username_key");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    function addRoom() {
          room_name = document.getElementById("add_room").value;
          localStorage.setItem("roomname_key", room_name);
          firebase.database().ref("/").child(room_name).update({
                purpose: "room_name"
          });
          window.location = "kwitter_page.html";
    }


function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function(childSnapshot) {
                  childKey  = childSnapshot.key;
                  Room_names = childKey;
      //Start code
                  console.log("room names - " + Room_names);
                  row = "<div class='room_name' id='"+Room_names+"' onclick='goToRoomName(this.id)'> #"+Room_names+" </div> <hr>";
                  document.getElementById("output").innerHTML += row;
      //End code
            });
      });
}

getData();

function goToRoomName(last_room) {
      console.log("we are currently on " + last_room);
      localStorage.setItem("roomname_key", last_room);
      window.location = "kwitter_page.html";
}

function logOut() {
      localStorage.removeItem("username_key");
      localStorage.removeItem("roomname_key");
      window.location = "index.html";
      console.log("You have logged out successfully.");
}