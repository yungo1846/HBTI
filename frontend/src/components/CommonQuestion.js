import React, { useState } from "react";
import "./CommonQuestion.scss";

const CommonQuestion = ({ handleSubmit }) => {
  const [gender, setGender] = useState("");
  const [age, setAge] = useState(0);

  function mouseOver(e) {
    if (e.target.style["background-color"] !== "rgb(98, 28, 148)") {
      e.target.style = "background: #b088f9; color: white;";
    }
  }
  function mouseLeave(e) {
    if (e.target.style["background-color"] !== "rgb(98, 28, 148)") {
      e.target.style = "background: #f7f7f7";
    }
  }

  const onClickGender = (e) => {
    document.getElementById("male-box").childNodes[0].style = "background: #f7f7f7";
    document.getElementById("female-box").childNodes[0].style = "background: #f7f7f7";
    e.target.style = "background: rgb(98, 28, 148); color: white;";
    setGender(e.target.attributes.name.value);
  };

  const onChangeAge = (e) => {
    setAge(e.target.value);
  };

  const handleClick = () => {
    if (gender !== "" && age !== 0) {
      handleSubmit(gender, age);
    } else {
      alert("비어있는 정보를 입력해주세요.");
    }
  };

  return (
    <>
      <div id="common-question-container">
        <div className="question-box">
          <div id="gender-container">
            <div
              className="gender-box"
              id="male-box"
              onClick={onClickGender}
              onMouseOver={mouseOver}
              onMouseLeave={mouseLeave}
            >
              <span name="male">남성</span>
            </div>
            <div
              className="gender-box"
              id="female-box"
              onClick={onClickGender}
              onMouseOver={mouseOver}
              onMouseLeave={mouseLeave}
              name="female"
            >
              <span name="female">여성</span>
            </div>
          </div>
        </div>
        <div className="question-box" id="age-box">
          <label htmlFor="age">나이</label>
          <input
            type="text"
            size="2"
            maxLength="2"
            placeholder="ex) 25"
            name="age"
            onChange={onChangeAge}
          />
        </div>
        <div
          id="next-button"
          onClick={handleClick}
          onMouseOver={mouseOver}
          onMouseLeave={mouseLeave}
        >
          다음으로
        </div>
      </div>
    </>
  );
};

export default CommonQuestion;
