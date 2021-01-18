import React from "react";
import { Link, Route } from "react-router-dom";
import Home from "./pages/Home";
import HBTItest from "./pages/HBTItest";
import HelchangTest from "./pages/HelchangTest";
import "./App.scss";

const App = () => {
  return (
    <div id="main-container">
      <Link to={"/"} id="logo">
        <img src="/image/logo.png" alt="logo" />
      </Link>
      <div className="content">
        <Route path="/" exact={true} component={Home} />
        <Route path="/hbti-test" component={HBTItest} />
        <Route path="/helchang-ability-test" component={HelchangTest} />
      </div>
    </div>
  );
};
export default App;
