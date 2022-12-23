/** @format */
//names - check props name , spellings - typo error, name error
import React, { useState, useEffect } from "react";
import Error from "../UI/error/Error";

import axios from "axios";
import Button from "../UI/button/Button";
import Input from "../UI/input/Input";
import Label from "../UI/label/Label";
import Card from "../UI/card/Card.js";
import { Link, useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [username, setUsername] = useState("");
  // const [mobile, setMobile] = useState("");
  // const [error, setError] = useState("");/

  const [users, setUsers] = useState({
    username: "",
    emailid: "",
    password: "",
    mobile: "",
  });

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(users);
    }
  }, [formErrors]);

  // user --> data. un , pass , m , e,
  //error,seterror //label error?{<lable/>}
  // const validation = () => {
  //   let fields = users;
  //   let error = {};
  //   let formIsValid = true;

  //   if (!fields["username"]) {
  //     formIsValid = false;
  //     error["username"] = "*Please enter username*";
  //   }
  //   if (!fields["username"].length < 2) {
  //     formIsValid = false;
  //     error["username"] = "*Insufficient length*";
  //   }
  // };
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const regex_mobile = /^[0-9\b]+$/;
    const passTry = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).*$/;
    if (!values.username) {
      errors.username = "Username is required!";
    } else if (values.username.length < 2 || values.username.length > 20) {
      errors.username =
        "Username must be more than 2 and less than 20 characters";
    }
    if (!values.emailid) {
      errors.emailid = "Email is required!";
    } else if (!regex.test(values.emailid)) {
      errors.emailid = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 20) {
      errors.password = "Password cannot exceed more than 10 characters";
    } else if (!passTry.test(values.password)) {
      errors.password =
        "Password must contain Lowercase, Uppercase, Num & special char";
    }

    if (!values.mobile) {
      errors.mobile = "Mobile is required!";
    } else if (!regex_mobile.test(values.mobile)) {
      errors.mobile = "Mobile must be numbers";
    } else if (values.mobile.length != 10) {
      errors.mobile = "Mobile must be 10 digits number";
    }
    return errors;
  };
  const formHandler = async (e) => {
    e.preventDefault();
    setFormErrors(validate(users));
    setIsSubmit(true);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      try {
        navigate("/login");
        await axios.post("http://localhost:3001/register", users);
      } catch (err) {
        console.log(err);
      }
    }
  };
  let handleChange = (e) => {
    setUsers((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <Card>
      <Label label="Sign Up" />{" "}
      <form onSubmit={formHandler}>
        <Input
          id="username"
          name="username"
          value={users.username}
          placeholder="  UserName"
          onChange={handleChange}
        />
        <label style={{ color: "red", fontSize: "8px" }}>
          {formErrors.username}
        </label>
        {/* <p></p> */}
        {/* <Label label={formErrors.username} />{" "} */}
        {/* <Error error={formErrors} /> */}
        <Input
          id="emailid"
          name="emailid"
          value={users.emailid}
          placeholder="  Email ID"
          onChange={handleChange}
        />
        <label style={{ color: "red", fontSize: "8px" }}>
          {formErrors.emailid}
        </label>
        <Input
          id="password"
          name="password"
          value={users.password}
          placeholder="  Password"
          type="password"
          onChange={handleChange}
        />
        {/* <label>{formErrors.password}</label> */}
        <label style={{ color: "red", fontSize: "8px" }}>
          {formErrors.password}
        </label>
        <Input
          id="mobile"
          name="mobile"
          value={users.mobile}
          placeholder="  Mobile Number"
          onChange={handleChange}
        />
        {/* <label>{formErrors.mobile}</label> */}
        <label style={{ color: "red", fontSize: "8px" }}>
          {formErrors.mobile}
        </label>
        <Button type="submit">Register</Button>
        <label style={{ fontSize: "10px", color: "grey" }}>
          Already have an account ?{" "}
          <a href="http://localhost:3000/login">Login now</a>
        </label>
      </form>
    </Card>
  );
};

export default Register;
