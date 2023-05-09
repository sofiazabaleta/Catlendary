import { useState } from "react";

export default function Login() {
  const [popupStyle, showPopup] = useState("hide");

  const popup = () => {
    showPopup("login-popup");
    setTimeout(() => {
      showPopup("hide");
    }, 3000);
  };

  return (
    <div className="cover">
      <h1>Login</h1>
      <input type="text" placeholder="username" />
      <input type="password" placeholder="password" />

      <div className="login- btn" onClick={popup}>
        Log in
      </div>
      <p className="text"> Already have an account? sign in </p>
      <div className="signin">
        <div className="email"></div>
      </div>

      <div className="alt-login">
        <h3>Login Failed</h3>
        <p>Username or password incorrect</p>
      </div>
    </div>
  );
}
