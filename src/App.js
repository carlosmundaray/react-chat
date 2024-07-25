import React, { useState } from "react";
import Room from "./components/room";
import Login from "./components/login";
import './App.css';
import socket from "./socket";

function App() {
  const [userName, setUserName] = useState("");
  const [usersList, addUsers] = useState([]);
  const [messages, setMessages] = useState([]);

  const getUsername = (fetched_userName) => {
    setUserName(fetched_userName);

    socket.auth = { fetched_userName };
    socket.connect();
  };

  socket.on("users", (users) => {
    users.forEach((user) => {
      user.self = user?.userID === socket?.id;
    });
    users = users.sort((a, b) => {
      if (a.self) return -1;
      if (b.self) return 1;
      if (a.username < b.username) return -1;
      return a.username > b.username ? 1 : 0;
    });
    console.log('app.js',users );
    addUsers(users);
  });

  socket.on("user connected", (user) => {
    addUsers([...usersList, user]);
  });

  return (
    <div className="App">
      {!userName ? (
        <Login submit={(event) => getUsername(event)} />
      ) : (
        <Room user={userName} connectedUsers={usersList} />
      )}
    </div>
  );
}

export default App;
