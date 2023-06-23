import React, { useEffect, useState } from "react";
import "../styles/button.css";
import { Finished } from "./Finished";

export const RandomButton = ({ answear, desbloq, scoreFinal }) => {
  const [quest, setQuest] = useState();
  const [isDisabled, setDisabled] = useState(false);
  const [count, setCount] = useState(0);
  const [click, setClick] = useState(false);
  const [correct, setCorrect] = useState();
  const [colorbutton, setColorbutton] = useState("btn btn-primary mx-2 my-2 adaptContainer");

  useEffect(() => {
    randomizeAnswers();
    setDisabled(false);
    setCorrect(answear.correctAnswer);
    setClick(false);
    setColorbutton("btn btn-primary mx-2 my-2 adaptContainer ");
    setCount(count + 1);
  }, [answear]);

  const randomizeAnswers = () => {
    const currentQuestion = answear;
    const allAnswers = currentQuestion.incorrectAnswers.concat(
      currentQuestion.correctAnswer
    );
    const randomQuest = allAnswers.sort(() => Math.random() - 0.5);
    setQuest(randomQuest);
  };

  function handleAnswerSelection(answer) {
    const correct = answear.correctAnswer;

    setClick(true);
    desbloq();

    if (answer === correct) {
      setDisabled(true);
      setColorbutton("btn btn-success mx-2 my-2 adaptContainer");
      scoreFinal();
    } else {
      setDisabled(true);
      setColorbutton("btn btn-danger mx-2 my-2 adaptContainer");
    }
  }

  //arreglar el boton en movil
  return (
    <div>
      <div className="container-fluid mb-5 text-center">
        <ul>
          {quest &&
            quest.map((answer, index) => (
              <button
                className={colorbutton}
                onClick={() => handleAnswerSelection(answer)}
                key={index}
                disabled={isDisabled}
              >
                {answer}
              </button>
            ))}
        </ul>
        <div className="mt-5">{count}/10</div>
      </div>

      {click ? (
        <div>
          <h3 className="animate__animated animate__fadeIn animate__slow">
            {correct}
          </h3>
        </div>
      ) : null}
    </div>
  );
};
