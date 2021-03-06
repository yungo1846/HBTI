import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import html2canvas from "html2canvas";
import HelchangTestResults from "../results/HelchangTestResults";
import { backEndUrl } from "../common/Urls";

const HelchangTestResult = ({ submittedList, userInfos }) => {
  function mouseOver(e) {
    e.target.style = "background: #b088f9; color: white;";
  }
  function mouseLeave(e) {
    e.target.style = "background: #f7f7f7; border-color: #b088f9;  color: black";
  }

  let totalScore = 0;
  for (let i = 0; i < submittedList.length; i++) {
    totalScore += submittedList[i];
  }

  function onCapture() {
    const newLogo = document.createElement("div");
    newLogo.id = "logo";
    newLogo.innerHTML = `<img src="/image/logo.png" alt="logo" />`;
    document.getElementById("result-box").insertAdjacentElement("afterbegin", newLogo);
    function setTimer(callback) {
      setTimeout(function () {
        window.scrollTo(0, 0);
        console.log("timer");
        callback();
      }, 500);
    }
    setTimer(function () {
      html2canvas(document.getElementById("result-box"))
        .then((canvas) => {
          saveAs(canvas.toDataURL("image/png", 1), "hbti-result.png");
          console.log("yes");
        })
        .then(document.getElementById("result-box").removeChild(newLogo));
    });
  }

  function saveAs(uri, filename) {
    let link = document.createElement("a");
    if (typeof link.download === "string") {
      link.href = uri;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(uri);
    }
  }

  let imageSrc;
  let character;
  let description;
  for (let i = 0; i < HelchangTestResults.length; i++) {
    for (let j = 0; j < HelchangTestResults[i].score.length; j++) {
      if (HelchangTestResults[i].score[j] === totalScore) {
        imageSrc = HelchangTestResults[i].image;
        character = HelchangTestResults[i].character;
        description = HelchangTestResults[i].description;
      }
    }
  }

  let questions = {};
  for (let i = 0; i < submittedList.length; i++) {
    questions[`q${i + 1}`] = submittedList[i];
  }

  axios.post(`${backEndUrl}/helchang-ability/create/`, {
    user: "익명",
    result: character,
    totalScore: totalScore,
    ...userInfos,
    ...questions,
  });

  return (
    <div id="result-container">
      <div id="result-box">
        <div id="helchang-question">나의 헬창력은</div>
        <div id="helchang-score">
          <span>3대 </span>
          {totalScore}kg
        </div>
        <img src={imageSrc} alt="helchang-type" id="helchang-image" />
        <div id="helchang-character">{character}</div>
        <div id="helchang-description">&nbsp;{description}</div>
      </div>
      <div id="alert-info">인앱 브라우저에서 접속 시 캡쳐기능이 동작하지 않습니다.</div>
      <div
        className="home-button"
        onClick={onCapture}
        onMouseOver={mouseOver}
        onMouseLeave={mouseLeave}
      >
        결과 캡쳐하기
      </div>
      <Link
        to={"/hbti-test"}
        className="home-button"
        id="button1"
        onMouseOver={mouseOver}
        onMouseLeave={mouseLeave}
        onTouchStart={mouseOver}
        onTouchEnd={mouseLeave}
      >
        헬BTI 알아보기
      </Link>
    </div>
  );
};

export default HelchangTestResult;
