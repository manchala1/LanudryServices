import React, { useState } from "react";
import axios from "axios";
import "./registercard.css";
import { useHistory } from "react-router-dom";

function Registercard() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  function signinsub() {
    history.push("/");
  }
  function createRegister() {
    axios
      .post("http://localhost:5000/register", {
        name: name,
        email: email,
        phone: phone,
        state: state,
        district: district,
        address: address,
        pincode: pincode,
        password: password,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
    history.push("/");
  }

  return (
    <div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-4 col-sm-12 py-5 reg">
            <p class="mainhh1">Laundry Service</p>
            <p class="doorstep1">Doorstep Wash & Dryclean Service</p>
            <p class="haveacc1">Already Have Account</p>
            <button class="btn regbtn1" onClick={signinsub}>
              Sign In
            </button>
          </div>
          <div class="col-lg-8 col-sm-12 py-5 sig">
            <p class="mainh2">Register</p>
            <form action="">
              <div class="row">
                <div class="col-lg-6 col-sm-12">
                  <div class="form-group">
                    <input
                      type="text"
                      class="inputform form-control"
                      placeholder="Name"
                      name="name"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-12">
                  <div class="form-group">
                    <input
                      type="email"
                      class="inputform form-control"
                      placeholder="Email"
                      name="email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-12">
                  <div class="form-group">
                    <input
                      type="text"
                      class="inputform form-control"
                      placeholder="Phone"
                      name="phone"
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-12">
                  <div class="form-group">
                    <input
                      type="text"
                      class="inputform form-control"
                      id="pwd"
                      placeholder="State"
                      name="state"
                      onChange={(e) => setState(e.target.value)}
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-12">
                  <div class="form-group">
                    <input
                      type="text"
                      class="inputform form-control"
                      placeholder="District"
                      name="district"
                      onChange={(e) => setDistrict(e.target.value)}
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-12">
                  <div class="form-group">
                    <input
                      type="text"
                      class="inputform form-control"
                      placeholder="Address"
                      name="pwd"
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-12">
                  <div class="form-group">
                    <input
                      type="text"
                      class="inputform form-control"
                      placeholder="Pincode"
                      name="pincode"
                      onChange={(e) => setPincode(e.target.value)}
                    />
                  </div>
                </div>
                <div class="col-lg-6 col-sm-12">
                  <div class="form-group">
                    <input
                      type="password"
                      class="inputform form-control"
                      placeholder="Password"
                      name="pwd"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <p class="forgot">
                <input
                  type="checkbox"
                  class="form-check-input registercheck"
                  id="check1"
                  name="option1"
                  value="something"
                />
                I agree to Terms & conditions receiving marketing and
                promotional materials
              </p>
              <div class="text-center">
                <button
                  type="submit"
                  class="btn mainbut"
                  onClick={createRegister}
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registercard;
