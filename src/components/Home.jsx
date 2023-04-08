import React, { useEffect } from 'react'
import { Game } from './Game'
import { FetchQuestions } from './FetchQuestions'
import { useState } from 'react'
import '../styles/home.css'

export const Home = () => {
  
  const [okActive, setOkActive] = useState(false)
  const [data, setData] = useState({})


    const handleGame = () => {
      setOkActive(true)
    }
    
    const dataF = async () => {
    const datafetch = await FetchQuestions()
    setData(datafetch);
    };


    useEffect(() => {
    
      dataF();
      
    }, [])
    
   
   
  
    return (
      <div className='container text-center homeCont'>
        {!okActive ? (
          <div className='animate__animated animate__heartBeat'>
            <h1>Welcome to trivia</h1>
            <h3 className='mt-3'>Ready to play?</h3>
            <button className='btn btn-primary mt-5 ' onClick={handleGame}>Im ready</button>
          </div>
        ) : (
          <Game data={data} />
        )}
      </div>
    );
}
