import React from "react";

const Login = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const fetched_userName = e.target[0].value;
    props.submit(fetched_userName);
  };
  return (
    <>

    <div className="container">
      <div className="whatsapp">
<div class="login">
<div class="login-screen">
    <div class="app-title">
        <h1>Welcome</h1>
    </div>
    <form onSubmit={(event) => handleSubmit(event)}>
    <div class="login-form">
        <div class="control-group">
        <input type="text" class="login-field"  placeholder="Enter username" id="login-name" />
        <label class="login-field-icon fui-user" for="login-name"></label>
        </div>
        <input type="submit" className="btn" value="Ingresar" />
    </div>
    </form>
</div>
</div>
</div>
</div>


</>

  );
};

export default Login;
