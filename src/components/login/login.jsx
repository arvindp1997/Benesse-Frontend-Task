import React from "react";
import { useState } from "react";
import loginImg from "../../login.svg";
import Button from "@mui/material/Button";
import Quiz from "../quiz/quiz";

export function Login(props) {
  const [showQuiz, setShowQuiz] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const validation = () => {
    return userName?.trim() === "" || password?.trim() === "";
  };

  const handleSubmit = () => {
    console.log("username entered: ", userName);
    // console.log('password entered: ', password);
    //After onsubmit user credentials will be checked by comparing from db 
    // if present- then logged in successfully 
    //else throw error - enter correct user credentials
    setShowQuiz(true);
  };

  return (
    <div className="base-container" ref={props.containerRef}>
      {!showQuiz && (
        <>
          <div className="header">Login</div>
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
              Login
            </Button>
          </div>
        </>
      )}
      {showQuiz && <Quiz />}
    </div>
  );
}
