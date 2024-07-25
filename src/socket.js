import { io } from "socket.io-client";
const URL = "https://server-chat-2t5o.onrender.com";

const socket = io(URL, { autoConnect: false });

socket.onAny((event, ...args) => {
  console.log(event, args);
});
export default socket;
