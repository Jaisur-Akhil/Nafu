/** @format */

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "../UI/button/Button";
import Input from "../UI/input/Input";
import Label from "../UI/label/Label";
import Card from "../UI/card/Card";
import "./Login.css";
const Login = () => {
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mess, setMess] = useState("");
  const navigate = useNavigate();
  let LoginClick = (e) => {
    e.preventDefault();
    console.log("Button Pressed", email, password);
    let login = users.map((user) => {
      if (user.emailid == email && user.password == password) {
        navigate("/main");
      } else {
        setMess("Invalid Email/Password");
      }

      // user.emailid === email;
      console.log(user.emailid);
    });
  };

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const res = await axios.get("http://localhost:3001/");
        setUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllUsers();
  }, []);
  console.log(users);

  return (
    <Card>
      <div>
        <Label label="Sign In" />{" "}
      </div>
      <form>
        <Input
          id="emailid"
          value={email}
          type="email"
          placeholder="  Email ID"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Input
          id="Password"
          type="password"
          value={password}
          placeholder="  Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <label style={{ color: "red", fontSize: "8px" }}>{mess}</label>

        <Button type="submit" onClick={LoginClick}>
          Login
        </Button>
      </form>
      <div>
        <label style={{ marginTop: "5px" }} className="label">
          <span style={{ color: "grey" }}>Not a member ?</span>{" "}
        </label>
        <a href="http://localhost:3000/register" className="a">
          Register now
        </a>
      </div>
    </Card>
  );
};

export default Login;
