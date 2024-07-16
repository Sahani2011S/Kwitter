const firebaseConfig = {
      apiKey: "AIzaSyBM8HrJ_cM-7dQEzsHJb1HthuFwOHZuFgE",
      authDomain: "kwitter-99d10.firebaseapp.com",
      databaseURL: "https://kwitter-99d10-default-rtdb.firebaseio.com",
      projectId: "kwitter-99d10",
      storageBucket: "kwitter-99d10.appspot.com",
      messagingSenderId: "250519237435",
      appId: "1:250519237435:web:bd6ac51631d79e4a3c3d1e"
    };
    firebase.initializeApp(firebaseConfig);
    var user_name = localStorage.getItem("username");
    var room_name = localStorage.getItem("clicked_room_name");
function getData()
{ firebase.database().ref("/"+room_name).on('value', function(snapshot)
      { document.getElementById("output").innerHTML = "";
            snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
                  childData = childSnapshot.val();
                  if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         my_name = message_data['name'];
         my_message = message_data['msg'];
         var name_with_tag = "<h4>" +my_name+ ": "+my_message+"</h4>";
         var row = name_with_tag;
         document.getElementById("output").innerHTML += row;
      } });  }); }
getData();
function logout() {
      window.location = "index.html";
      localStorage.removeItem("username");
      localStorage.removeItem("clicked_room_name");
}
function send() {
      messages = document.getElementById ("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            msg: messages
      });
      document.getElementById("msg").value = "";
}