/** @format */

import "./App.css";
import Label from "./component/UI/label/Label";
import Card from "./component/UI/card/Card";
import Landing from "./component/pages/Landing";
import Login from "./component/pages/Login";
import Register from "./component/pages/Register";
import Main from "./component/pages/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
        <div className="App">
    <BrowserRouter>
      {" "}
      <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/main" element={<Main />} />
          {/* <Landing />
          <Login />
          <Register />
          <Main /> */}
      </Routes>
    </BrowserRouter>
        </div>
  );
}

export default App;
