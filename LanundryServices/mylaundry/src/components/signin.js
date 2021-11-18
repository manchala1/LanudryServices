import React, { useState } from "react";
import "./mainhome.css";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { getToken, setToken } from "../Utils/AuthOperations";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [colour, setColour] = useState(false);

  const history = useHistory();
  function registersub() {
    history.push("/register");
  }
  function signinsub(e) {
    e.preventDefault();
    console.log("Hello");
    console.log(email, password);
    axios
      .post("http://localhost:5000/signin", {
        email: email,
        password: password,
      })
      .then((response) => {
        {
          const { data } = response;
          setToken(data.token);
          console.log("Token: ", data.token);
          setUser(response.data);
          setToken(response.data.token);
          console.log("token", getToken());
          history.push("/createorder");
        }
        console.log("colour", colour);
      })
      .catch((e) => {
        console.log(e);
        setColour(true);
        console.log("colour", colour);
      });
    if (user) {
      return;
    }
    console.log(user);
  }

  return (
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-6 col-sm-12 py-5 reg">
          <p class="mainh1">Laundry Service</p>
          <p class="doorstep">Doorstep Wash & Dryclean Service</p>
          <p class="haveacc">Don't have an Account?</p>
          <button class="btn regbtn" onClick={registersub}>
            Register
          </button>
        </div>
        <div class="col-lg-6 col-sm-12 py-5 sig">
          <p class="mainh2">Sign in</p>
          <form action="">
            <div class="form-group">
              <input
                type="text"
                class="inputform form-control"
                id="phone"
                placeholder="Mobile/Email"
                name="email"
                // pattern="[7-9]{1}[0-9]{9}"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                class="inputform form-control "
                id="pwd"
                placeholder="Password"
                name="password"
                style={colour ? { color: "red" } : { color: "black" }}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>

            <p class="forgot">Forgot password?</p>
            <div class="text-center">
              <button type="submit" class="btn mainbut" onClick={signinsub}>
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signin;
