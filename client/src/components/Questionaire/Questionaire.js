import { lightGreen } from '@material-ui/core/colors';
import React from 'react';
// import { Button } from '@material-ui/core/';



const Questionaire = ({ handleAnswer, data: { question, correct_answer, incorrect_answers },
}) => {
  const shuffledAnswers = [correct_answer, ... incorrect_answers].sort(() => Math.random() - 0.5);
  return (
    <div> 
    <h2 dangerouslySetInnerHTML = {{__html:question}}/>
        <div>
          {shuffledAnswers.map((answer)=> (
            <button 
            onClick={() => handleAnswer
            (answer)} > 
            {answer}
            </button>

          ))}
          

        </div>
        </div>
)};

export default Questionaire;