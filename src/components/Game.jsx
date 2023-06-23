import React, { useEffect, useState } from 'react'
import { Questions } from './Questions';
import { RandomButton } from './RandomButton';
import '../styles/game.css'
import { Finished } from './Finished';



export const Game = ({data}) => {

  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [bloqueo, setBloqueo] = useState(true)
  const [score, setScore] = useState(0)

  const scoreFinal = () => {
    setScore(score+1)
  }


  const desblo = () => {
    setBloqueo(false)
  };

  useEffect(() => {
    setBloqueo(true)
  }, [currentIndex])

  function handleNextQuestion() {
    setCurrentIndex(currentIndex + 1);
  }

  if (currentIndex >= data.length) {
    return (
      <>
        <Finished score={score} />
      </>
    );
  }
 
  return (
    <div className='container-fluid animate__animated animate__flipInY'>
      
      <div className="text-center mt-5">
        <Questions question={data[currentIndex].question} key={data.id} />
      </div>
        
        <div className="mt-5">
          <RandomButton answear={data[currentIndex]} key={data.id} desbloq={desblo} scoreFinal={scoreFinal}/>
        </div>
        
        <button
          onClick={handleNextQuestion}
          className="btn btn-primary nextButton mt-4"
          disabled={bloqueo}
        >
          Next
        </button>

    
    </div>
  );
}
