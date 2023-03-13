
import React from "react";
import { useState } from "react";
import loginImg from "../../login.svg";
import Button from "@mui/material/Button";

export function Register(props) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  const validateEmail = (value) => {
    if (value && value.match(isValidEmail)) {
      return false;
    } else {
      return true;
    }
  };
  const handleSubmit = () => {
    console.log("username entered: ", userName);
    // console.log('password entered: ', password);
    console.log("email entered: ", email);
    //Post API will be called for user registration
    setUserName("");
    setPassword("");
    setEmail("");
    alert('User Registered successfully')

  };
  const validation = () => {
    return (
      userName?.trim() === "" ||
      password?.trim() === "" ||
      email?.trim() === "" ||
      validateEmail(email)
    );
  };
  return (
    <div className="base-container" ref={props.containerRef}>
      <div className="header">Register</div>
      <div className="content">
        <div className="image">
          <img src={loginImg} />
        </div>
        <div className="form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              name="username"
              placeholder="username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              valuename="email"
              placeholder="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              placeholder="password"
            />
          </div>
        </div>
      </div>
      <div className="footer">
        <Button
          variant="contained"
          onClick={handleSubmit}
          disabled={validation()}
        >
          {" "}
          Register
        </Button>
      </div>
    </div>
  );
}
