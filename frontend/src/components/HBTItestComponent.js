import React from "react";

const HBTItestComponent = ({ questionId, question, onClickPrev, onClickNext }) => {
  function mouseOver(e) {
    e.target.style = "background: #b088f9; color: white;";
  }
  function mouseLeave(e) {
    e.target.style = "background: #f7f7f7";
  }
  function onClickAnswer1(e) {
    e.target.style = "background: #f7f7f7";
    onClickNext(question.answer1.type);
  }
  function onClickAnswer2(e) {
    e.target.style = "background: #f7f7f7";
    onClickNext(question.answer2.type);
  }
  function mouseOverPrevBtn(e) {
    e.target.style = "text-shadow: 1px 1px;";
  }
  function mouseLeavePrevBtn(e) {
    e.target.style = "text-shadow: 0px 0px;";
  }

  return (
    <div id="question-container">
      <div id="question-header">
        <div id="question-number">{`Q${question.id}`}</div>
      </div>
      <div id="question">{`${question.question}`}</div>
      <div
        className="answer-button"
        onClick={onClickAnswer1}
        onMouseOver={mouseOver}
        onMouseLeave={mouseLeave}
      >
        <span>{`${question.answer1.answer}`}</span>
      </div>
      <div
        className="answer-button"
        onClick={onClickAnswer2}
        onMouseOver={mouseOver}
        onMouseLeave={mouseLeave}
      >
        <span>{`${question.answer2.answer}`}</span>
      </div>
      {questionId !== 1 && (
        <div id="previous-button">
          <span
            onClick={onClickPrev}
            onMouseOver={mouseOverPrevBtn}
            onMouseLeave={mouseLeavePrevBtn}
          >
            이전
          </span>
        </div>
      )}
      <div id="total-percentage-bar">
        <div id="current-percentage-bar" style={{ width: `0%` }}></div>
      </div>
    </div>
  );
};

export default HBTItestComponent;
