import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "./components/home.js";
import App from "./app";
ReactDOM.render(
  // <Home/>,
    <BrowserRouter>
      <App/>,
      {/* <Home/> */}
    </BrowserRouter>,
    document.getElementById("root")
  );
  
