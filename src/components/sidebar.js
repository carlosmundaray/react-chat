import React from "react";

const Sidebar = (props) => {
  const userList = props.connectedUsers;

  console.log("In sidebar userlist:", userList);

  let selectedUser = "";

  const userName_from_click = (e) => {
    selectedUser = e.target.innerText;
    let selectedUserDetails = userList.find(
      (user) => user?.username == selectedUser
    );
    if(selectedUserDetails!=undefined){
      console.log('select',selectedUser);
      console.log("In sidebar the user details:", selectedUserDetails);
      props.selectUser(selectedUserDetails);
    }
  };

  let showUsers = userList.map((user) => {
    return (
      <div className="user" key={user.key}  onClick={(e) => userName_from_click(e)}>
      <div className="pfp nopic">
          <img src="./img/icons8-account-96.png" alt=""/>
      </div>
      <div className="userinfo">
          <div className="name">
              <p>{user?.username}</p>
          </div>
          <div className="message">
              <div className="meicon">
                  <div>
                      <img src="./img/icons8-double-tick-96 (1).png " alt=""/>
                  </div>
                  <div className="arrow">
                      <img src="./img/icons8-expand-arrow-96.png" alt=""/>
                  </div>
              </div>
          </div>
      </div>
      <div className="userdate">
          <p>hier</p>
      </div>
  </div>
    );
  });
  console.log("Userlist in sidebar component:", userList);
  return <div className="users">{showUsers}</div>;
};

export default Sidebar;
