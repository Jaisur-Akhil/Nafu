/** @format */

import React, { useState } from "react";
import Button from "../UI/button/Button";
import Input from "../UI/input/Input";
import Label from "../UI/label/Label";
// import Nav from "../UI/nav/Nav";
import Card from "../UI/card/Card";
const Main = () => {
  const [input, setInput] = useState("");

  const handleB = (e) => {
    setInput(e.target.value);
  };
  return (
    <>
      {/* <Nav /> */}

      <Card>
        <Label label="Calm Your Anxiety by Wristing About It" />
        <Input
          id="mainInput"
          value={input}
          onChange={handleB}
          placeholder="   Write a Quote"
        />

        <div
          style={{
            fontSize: "40px",
            color: "White",
            marginTop: "20px",
            color: "rgba(253,187,45,1)",
          }}>
          {input}
        </div>
      </Card>
    </>
  );
};

export default Main;
