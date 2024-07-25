import React, { useState } from "react";
import Chat from "./chat";
import Sidebar from "./sidebar";

const Room = (props) => {
  const [selectedUser, setSelectedUser] = useState({});
  const [userSelected, setUserSelected] = useState(false); //So that any chat window is not rendered when app is loaded

  console.log("in home", props.connectedUsers);

  const getSelectedUser = (user) => {
    setSelectedUser(user);
    setUserSelected(true);
    console.log("In home, selected user:", user);
  };

  return (
<>
<div className="container">
        <div className="whatsapp">
            <div className="contacts">
                <div className="connav navs">
                    <div className="profile">
                        <img src="./img/109316527.jpg" alt=""/>
                    </div>
                    <div className="tools">
                        <div className="tool">
                            <img src="./img/icons8-people-64.png" alt=""/>
                        </div>
                        <div className="tool">
                            <img src="./img/icons8-loading-50.png" alt=""/>
                        </div>
                        <div className="tool">
                            <img src="./img/icons8-typing-96.png" alt=""/>
                        </div>
                        <div className="tool">
                            <img src="./img/icons8-menu-vertical-50.png" alt=""/>
                        </div>
                        <div className="tool">
                            <a href='#'><img src="./img/close.png" alt=""/></a>
                        </div>                        
                    </div>
                </div>
                <div className="window blue">
                    <div className="winicon">
                        <img src="./img/icons8-notification-off-96.png" alt=""/>
                    </div>
                    <div className="wininfo">
                        <div>
                            <p>Ser notificado de nuevos mensajes</p>
                        </div>
                        <div>
                            <p>Habilitar notificaciones de escritorio</p>
                            <img src="./img/icons8-arrow-96.png" alt=""/>
                        </div>
                    </div>
                    <div className="winclose">
                        <img src="./img/icons8-close-90.png" alt=""/>
                    </div>
                </div>
                <div className="search">
                    <div className="searchBar">
                        <img src="./img/icons8-search-64.png" alt=""/>
                        <img src="./img/icons8-back-96.png" alt=""/>
                        <input type="text" name="" id="" placeholder="Buscar o iniciar una nueva discusión" />
                    </div>
                    <img src="./img/icons8-grip-lines-96.png" alt=""/>
                </div>
                <div className="usersContainer">

                
                          <Sidebar
                            connectedUsers={props.connectedUsers}
                            selectUser={getSelectedUser}
                          />

                    <div className="bottomcon">
                        <p>Tus mensajes personales son <a href="#">cifrados de combate en combate</a></p>
                    </div>
                </div>
            </div>
            {userSelected ? (
          <Chat
            selectedUser={selectedUser}
            connectedUsers={props.connectedUsers}
          />

      ) : (
        <div className="no-render-message">&#160;</div>
      )}
        </div>
    </div>
</>
  );
};

export default Room;
