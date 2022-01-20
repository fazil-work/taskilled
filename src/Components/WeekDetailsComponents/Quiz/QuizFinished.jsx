import React from 'react';
import quiz from "../../../Assets/SVGs/quiz.svg"

export const QuizFinished = () => {
  return(
    <div>
      <div className="quizFinished">
        <img src={quiz} alt="" />
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo maiores dolores ad?</h2>
        <h1>100%</h1>
        <div>
          <button>Davam et</button>
          <button>Retake quiz</button>
        </div>
      </div>
    </div>
  );
};
