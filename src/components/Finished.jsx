import React, { useState } from "react";
import { Home } from "./Home";
export const Finished = ({score}) => {
  const [cliked, setCliked] = useState(false);

  const handleClick = () => {
    setCliked(true);
  };

  
  
  return (
    <div>
      {cliked ? (
        <Home />
      ) : (
        <div>
            <h2 className="mb-5">Finished quest</h2>
            <h2>Your final score {score}</h2>
            <button className="btn btn-primary" onClick={handleClick}>
            <h1>Retry?</h1>
          </button>
        </div>
      )}
    </div>
  );
};
