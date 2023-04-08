import React, { useEffect, useState } from 'react'
import { Questions } from './Questions';
import { RandomButton } from './RandomButton';
import '../styles/game.css'
import { Finished } from './Finished';
import { CorrectAns } from './CorrectAns';


export const Game = ({data}) => {

  
  const [currentIndex, setCurrentIndex] = useState(0);

 

  function handleNextQuestion() {
    setCurrentIndex(currentIndex + 1);
  }


  if (currentIndex >= data.length) {
    return (
      <>
        <Finished/>
      </>
    );
  }
 
  return (
    <div className='animate__animated animate__flipInY'>
      <div className="container text-center gameCont mt-5">
        <Questions question={data[currentIndex].question} key={data.id} />
        <div className="mt-5 col-6">
          <RandomButton answear={data[currentIndex]} key={data.id} />
        </div>
      </div>
      <div className="container text-center">
        <button
          onClick={handleNextQuestion}
          className="mt-5 btn btn-primary nextButton"
        >
          Next
        </button>
      </div>
    </div>
  );
}
