import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";

const Home = () => {
  document.querySelector("title").innerText = "HBTI Home";
  function mouseOver(e) {
    e.target.style = "background: #b088f9; color: white;";
  }
  function mouseLeave(e) {
    e.target.style = "background: #f7f7f7; border-color: #b088f9;  color: black";
  }
  return (
    <>
      <div id="home-container">
        <h2 id="home-title">헬스 능력 테스트</h2>
        <h3 id="home-subtitle">당신의 헬스 유형과 능력은 과연?</h3>
        <img id="home-main-image" alt="home main" src="image/main.png" />
        <Link
          to={"/hbti-test"}
          className="home-button"
          id="button1"
          onMouseOver={mouseOver}
          onMouseLeave={mouseLeave}
        >
          헬BTI 알아보기 (20문항)
        </Link>
        <Link
          to={"/helchang-ability-test"}
          className="home-button"
          id="button2"
          onMouseOver={mouseOver}
          onMouseLeave={mouseLeave}
        >
          헬창력 알아보기 (20문항)
        </Link>
      </div>
      <div id="footer">
        <div id="email">문의: hectar2021@gmail.com</div>
      </div>
    </>
  );
};

export default Home;
