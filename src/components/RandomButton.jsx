 import React, { useEffect, useState } from 'react'
 import '../styles/button.css'


 
 export const RandomButton = ({answear}) => {
   
   
    const [quest, setQuest] = useState()
    const [isDisabled, setDisabled] = useState(false);
    const [count, setCount] = useState(0)
    const [click,setClick] = useState(false)
    const [correct, setCorrect] = useState()
    
    
    useEffect(() => {
      
      randomizeAnswers()
      setDisabled(false)
      setCorrect(answear.correctAnswer)
      setClick(false)
    }, [answear])
    
    

    const randomizeAnswers = () => {
      const currentQuestion = answear;
      const allAnswers = currentQuestion.incorrectAnswers.concat(
        currentQuestion.correctAnswer
      );
      const randomQuest = allAnswers.sort(() => Math.random() - 0.5);
      setQuest(randomQuest);
    }
      
    function handleAnswerSelection(answer) {
    
        const correct = answear.correctAnswer;
        
       
        setClick(true);
        if (answer === correct) {
          setDisabled(true), 
          setCount(count + 1)
        } else {
          setDisabled(true),
          setCount(count + 1)
        }
      }

   
    return (
      <div>
        <div className="container text-center">
          <ul>
            {quest &&
              quest.map((answer, index) => (
                <button
                  className="btn btn-primary mx-2 my-2"
                  onClick={() => handleAnswerSelection(answer)}
                  key={index}
                  disabled={isDisabled}
                >
                  {answer}
                </button>
              ))}
          </ul>
          {count}/10
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
 }
 
 
 