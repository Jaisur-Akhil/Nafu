/** @format */

import React from "react";
import Button from "../UI/button/Button";
import Card from "../UI/card/Card";
import Label from "../UI/label/Label";
import { useNavigate } from "react-router-dom";
const Landing = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleRegister = () => {
    navigate("/register");
  };
  return (
    <div>
      <Card>
        {/* <Label label="" />{" "} */}
        <form>
          <Button type="button" id="LoginButton" onClick={handleLogin}>
            Login
          </Button>

          <Button type="button" id="RegisterButton" onClick={handleRegister}>
            Register
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Landing;
