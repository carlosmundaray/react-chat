import React, { useState } from "react";
import socket from "../socket";
const Chat= (props) => {
  let selectedUser = {
    ...props.selectedUser,
    messages: [],
  };

  const [messages, setMessages] = useState([]);
  console.log("Selected user object chat compo:", selectedUser);
  let messageContent = "";
  let ref; //Reference to the input field so that it gets cleared every time we submit
  const getContent = (e) => {
    messageContent = e.target.value;
    ref = e;
  };

  const onMessage = (e, content) => {
    e.preventDefault();
    console.log("Message is:", content);
    ref.target.value = "";
    console.log('userIDpp',props.selectedUser.userID);
    if (props.selectedUser.userID) {
      console.log('userID',props?.selectedUser?.userID);
      if(props?.selectedUser?.userID){
        socket.emit("private message", {
          content,
          to: props?.selectedUser?.userID,
        });
        setMessages((messages) => [
          ...messages,
          { toUser: props?.selectedUser?.username, content, fromSelf: true },
        ]);
      }
      console.log("Message object", messages);
    }
  };

  const showMessages = messages.map((message, index) => {

    console.log('hi',message);


    if (
      message.fromSelf === true &&
      message.toUser === props.selectedUser.username
    )
      return (
        <div className="senderContainer" key={index}>
        <div className="sender mepop">
            <div className="thereply">
                <p>{message.content}</p>
                <div className="time">
                    <p>4:20 PM</p>
                </div>
                <div className="arrowhover arrowG">
                    <img src="./img/icons8-expand-arrow-96.png" alt=""/>
                </div>
                <div className="react rightr">
                    <img src="./img/icons8-happy-96.png" alt=""/>
                </div>
            </div>
        </div>
    </div>
      );
    if (
      message.fromSelf === false &&
      message.fromUser === props.selectedUser.username
    )
      return (
        <div className="receiverContainer arrowm" key={index}>
        <div className="reciver mepop">
            <div className="thereply">
                <p>{message.content}</p>
                <div className="time">
                    <p>4:20 PM</p>
                </div>
                <div className="arrowhover arrowW">
                    <img src="./img/icons8-expand-arrow-96.png" alt=""/>
                </div>
                <div className="react leftr">
                    <img src="./img/icons8-happy-96.png" alt=""/>
                </div>
            </div>
        </div>
    </div>
      );
  });

  socket.on("private message", ({ content, from }) => {

    let newMessages = {};
    let data=props.connectedUsers;

    data.forEach(function(elemento, indice) {
      const user = elemento;
      if (user.userID == from) {
        console.log("Iteration:", elemento);
        newMessages = {
          fromUser: user.username,
          content,
          fromSelf: false,
        };
        const messagesList = [...messages, newMessages];
        setMessages(messagesList);
      }  
    });
  });

  console.log(showMessages);
  console.log("In chatwindow selected user:", props.selectedUser);
  return (
    <div className="conversation">
    <div className="convenav navs">
        <div className="conveuser">
            <div className="profile">
                <img src="./img/icons8-account-96.png" alt=""/>
            </div>
            <div className="profileInformation">
                <h4>{props?.selectedUser?.username}</h4>
                <p>en ligne hier à 10:56 AM</p>
            </div>
        </div>
        <div className="tools">
            <div className="tool">
                <img src="./img/icons8-search-64.png" alt=""/>
            </div>
            <div className="tool">
                <img src="./img/icons8-menu-vertical-50.png" alt=""/>
            </div>
        </div>
    </div>
    <div className="convemessages">
        <div className="dateofm middle">
            <p>2022/11/03</p>
        </div>
        <div className="middle">
            <p><img src="./img/missed-video-call_118917.png" alt=""/> {props?.selectedUser?.userID}</p>
        </div>

        {showMessages}

    </div>
    <form className='form' onSubmit={(e) => onMessage(e, messageContent)}>
    <div className="convebottom">
        <div className="tools">
            <div className="tool">
                <img src="./img/icons8-smiling-90.png" alt=""/>
            </div>
            <div className="tool">
                <img src="./img/icons8-attach-100.png" alt=""/>
            </div>
        </div>
            <input 
            type="text" 
            placeholder='Escribe un mensaje' 
            classNameName="chat-text-area"
            onChange={(e) => getContent(e)}
            
            />
        <div className="tool">
            <img src="./img/icons8-microphone-96.png" alt=""/>
        </div>
    </div>
    </form>
</div>

  );
};

export default Chat;
