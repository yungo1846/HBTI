import React, { useState } from "react";
import HelchangTestQuestions from "../questions/HelchangtestQuestions";
import HelchangTestComponent from "../components/HelchangTestComponent";
import HelchangTestResult from "../components/HelchangTestResult";
import CommonQuestion from "../components/CommonQuestion";

const HelchangTest = () => {
  document.querySelector("title").innerText = "Helchang Test";
  const [currentQuestionId, setCurrentQuestionId] = useState(1);
  const [submittedList, setSubmittedList] = useState([]);
  const [userInfos, setUserInfos] = useState({});

  const onClickPrev = () => {
    setSubmittedList(submittedList.slice(0, submittedList.length - 1));
    setCurrentQuestionId(currentQuestionId - 1);
  };

  const onClickNext = (answer) => {
    if (answer === "plus") {
      const newList = submittedList.concat(25);
      setSubmittedList(newList);
    } else {
      const newList = submittedList.concat(0);
      setSubmittedList(newList);
    }
    setCurrentQuestionId(currentQuestionId + 1);
  };

  const handleSubmit = (gender, age) => {
    setUserInfos({ gender: gender, age: age });
  };

  const $currentPercentageBar = document.getElementById("current-percentage-bar");
  if ($currentPercentageBar !== null) {
    $currentPercentageBar.style = `width: ${Math.floor(
      ((currentQuestionId - 1) / HelchangTestQuestions.length) * 100
    )}%`;
    $currentPercentageBar.innerText = `${Math.floor(
      ((currentQuestionId - 1) / HelchangTestQuestions.length) * 100
    )}%`;
  }

  return (
    <>
      {Object.keys(userInfos).length === 0 ? (
        <CommonQuestion handleSubmit={handleSubmit} />
      ) : (
        <>
          {HelchangTestQuestions.length !== currentQuestionId - 1 && (
            <div id="common-test-container">
              <>
                <div id="fake-div"></div>
                <HelchangTestComponent
                  questionId={currentQuestionId}
                  question={HelchangTestQuestions[currentQuestionId - 1]}
                  onClickNext={onClickNext}
                  onClickPrev={onClickPrev}
                />
              </>
            </div>
          )}
          {HelchangTestQuestions.length === currentQuestionId - 1 && (
            <div id="common-result-container">
              <HelchangTestResult submittedList={submittedList} userInfos={userInfos} />
            </div>
          )}
        </>
      )}
    </>
  );
};

export default HelchangTest;
