//YOUR FIREBASE LINKS
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
    room_name = localStorage.getItem("roomname_key");
    document.getElementById("welcome").innerHTML = "Welcome to room " + room_name + "!";
console.log(room_name);

function send() {
      msg = document.getElementById("type_msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });
      document.getElementById("type_msg").value = "";
}

function getData() {
      firebase.database().ref("/"+room_name).on('value', function(snapshot) { 
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function(childSnapshot) {
            childKey  = childSnapshot.key;
            childData = childSnapshot.val();
            if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
message = message_data ['message'];
username = message_data ['name'];
likes = message_data ['like'];
name_tag = "<h3>" + username + "<img src='tick.png' class='user_tick'> </h3>";
msg_tag = "<h4 class = 'message_h4'>" + message + "</h4>";
like_tag = "<button class='btn btn-warning' id='"+firebase_message_id+"' value='"+likes+"' onclick='updateLikes(this.id)'>";
span_with_like_tag = "<span class='glyphicon glyphicon-thumbs-up'> like: " + likes + "</span> </button>";
row = name_tag + msg_tag + like_tag + span_with_like_tag;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function updateLikes(message_id) {
      console.log(message_id);
      new_likes = document.getElementById(message_id).value;
      no_of_likes = Number(new_likes) + 1;
      firebase.database().ref(room_name).child(message_id).update({
            like: no_of_likes
      });
}

function logOut() {
      localStorage.removeItem("username_key");
      localStorage.removeItem("roomname_key");
      window.location = "index.html";
      console.log("You have logged out successfully.");
}