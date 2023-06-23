import React, { useEffect, useState } from "react";
import { Home } from "./Home";
import confetti from "canvas-confetti";
import '../styles/game.css'

export const Finished = ({ score }) => {
  const [cliked, setCliked] = useState(false);

  const handleClick = () => {
    setCliked(true);
  };

  useEffect(() => {
    confetti();
  }, []);

  return (
    <div>
      {cliked ? (
        <Home />
      ) : (
        <div>
          <h2 className="mb-5">Finished quest</h2>
          <h2>Your final score {score}</h2>
          <button className="btn btn-primary mt-5 animatedcolor" onClick={handleClick}>
            <h2>Retry?</h2>
          </button>
        </div>
      )}
    </div>
  );
};
