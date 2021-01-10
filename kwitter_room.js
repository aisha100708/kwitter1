
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
    document.getElementById("user_name").innerHTML = "Welcome " + user_name;
    function addRoom() {
          room_name = document.getElementById("add_room").value;
          localStorage.setItem("roomname_key", room_name);
          firebase.database().ref("/").child(room_name).update({
                purpose: "room_name"
          });
          window.location = "kwitter_page.html";
    }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
