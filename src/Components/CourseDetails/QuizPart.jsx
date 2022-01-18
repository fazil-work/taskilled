import React, { useEffect, useState } from "react"
import styled from "styled-components"
import questions from "../../Data/questions.json"
import quiz from "../../Assets/SVGs/quiz.svg"
import taskDone from "../../Assets/SVGs/taskDone.svg"

export const QuizPart = () => {

  const [ currentQuestion, setCurrentQuestion ] = useState(0)
  const [ optionChosen, setOptionChosen ] = useState("")
  const [ answerIs, setAnswerIs ] = useState(null)
  const [ answered, setAnswered ] = useState(false)
  const [ chosenOptionTarget, setChosenOptionTarget ] = useState("")
  const [ finished, setFinished ] = useState(false)

  useEffect( () => {
    if(answered){
      document.getElementById("" + (questions[currentQuestion].answer).toUpperCase() + "").className = "success"
    }
      return () => {
      if(document.getElementById("" + (questions[currentQuestion].answer).toUpperCase() + "")){
        document.getElementById("" + (questions[currentQuestion].answer).toUpperCase() + "").className = "l"
      }
    }
  }, [answered])

  useEffect( () => {
    if(chosenOptionTarget && !answered){
      if(chosenOptionTarget.target.nodeName === "P" || chosenOptionTarget.target.nodeName === "INS"){
        
          chosenOptionTarget.target.parentNode.children[0].innerHTML === optionChosen
          ?
            chosenOptionTarget.target.parentNode.className = "chosen"
          : 
            chosenOptionTarget.target.parentNode.className = ""
        }
      else{
        chosenOptionTarget.target.children[0].innerHTML === optionChosen 
        ? 
          chosenOptionTarget.target.className = "chosen" 
        : 
          chosenOptionTarget.target.className = ""
      }
    }

    return (() => {
      if(chosenOptionTarget){
        if(chosenOptionTarget.target.nodeName === "P" || chosenOptionTarget.target.nodeName === "INS"){
          chosenOptionTarget.target.parentNode.className = ""
        }else{
          chosenOptionTarget.target.className = ""
        }
      }
    })
  }, [chosenOptionTarget])

  
  function chooseAnswer(element, chosenOption){
    if(answered === false){
      setOptionChosen(chosenOption)
      setChosenOptionTarget(element)
    }
  }

  function confirm(){

    if(optionChosen !== null){ 
      
      setAnswered(true)

      if(questions[currentQuestion].answer === optionChosen.toLowerCase()){

        setAnswerIs("correct")

        if(chosenOptionTarget.target.nodeName === "P" || chosenOptionTarget.target.nodeName === "INS"){
          chosenOptionTarget.target.parentNode.className = "success"
        }else{
          chosenOptionTarget.target.className = "success"
        }

      }else{

        setAnswerIs("false")

        if(chosenOptionTarget.target.nodeName === "P" || chosenOptionTarget.target.nodeName === "INS"){
          chosenOptionTarget.target.parentNode.className = "fail"
        }else{
          chosenOptionTarget.target.className = "fail"
        }

        if(chosenOptionTarget.target.nodeName === "P" || chosenOptionTarget.target.nodeName === "INS"){
          chosenOptionTarget.target.parentNode.className = "fail"
        }else{
          chosenOptionTarget.target.className = "fail"
        }
      }
    }
  }

  function nextQuestion(){
    currentQuestion + 1 > questions.length === false && setCurrentQuestion(currentQuestion + 1)
    setOptionChosen(null)
    setAnswerIs(null)
    setAnswered(false)
    setChosenOptionTarget(null)
  }

  function finishQuiz(){
    setFinished(true)
  }

  return (
    <QuizPartStyle>
      <h2>Quiz</h2>
      <div className="quiz">
      {
        finished ?
        <div className="quizFinished">
          <img src={quiz} alt="" />
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo maiores dolores ad?</h2>
          <h1>100%</h1>
          <div>
            <button>Davam et</button>
            <button>Retake quiz</button>
          </div>
        </div>
        :
        <>
          <h2>Question  {questions[currentQuestion].id}/{questions.length}</h2>
          <h3>{questions[currentQuestion].question}</h3>
          <ins>Yalnız bir cavab seçin.</ins>
          <div className="options">
            {
              ["A", "B", "C", "D", "E"].map((variant, index) => (

                <div onClick={(e) => chooseAnswer(e, variant)} id={variant} key={index}>
                  <ins>{variant}</ins>
                  <p>{questions[currentQuestion][variant.toLowerCase()]} <img src={taskDone} className="" alt="" /></p>
                </div> 

              ))
            }
          </div>
          {
            answered &&
            <div className="answerIs">
              {
              answerIs === "correct" ?  
                <h3 className="correct">Bu cavab doğrudur!</h3>
                :
                <h3 className="wrong">Bu cavab doğru deyil!</h3>
              }
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida dis ipsum amet, id auctor. Viverra ante porttitor odio congue sit sit viverra.</p>
            </div>
          }
          <div className='mark'>
            {
              answered ?
              <div>
                {
                  (currentQuestion + 2) > questions.length === false ?
                  <button onClick={() => nextQuestion()}>Sonrakı</button>
                  :
                  <button onClick={() => finishQuiz()}>Testi bitir</button>
                }
              </div>
              :
              <button onClick={() => confirm()}>Təsdiqlə</button>
            }
          </div>
        </>
      }
      </div>
    </QuizPartStyle>
  )
}

const QuizPartStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 94%;
  margin-left: auto;
  margin-bottom: 10rem;
  h2{
    margin: 0;
    font-size: 26px;
    color: #424242;
  }
  h2,h3{
    font-weight: 500;
  }
  ins{
    text-decoration: none;
  }
  .quiz{
    width: 75%;
    margin: 0 auto;
    h2{
      font-weight: 400;
      font-size: 22px;
      margin: 1.7rem 0;
    }
    h3{
      margin-bottom: 2rem;
      font-size: 20px;
    }
    ins{
      font-size: 14px;
      color: #888;
      font-weight: 500;
    }
    .options{
      margin-top: 1.1rem;
      width: 100%;
      transition: all .1s;
      div{
        display: flex;
        align-items: center;
        margin: .8rem 0;
        max-height: 3rem;
        height: 3rem;
        cursor: pointer;
        transition: all .1s;
        ins{
          display: flex;
          align-items: center;
          justify-content: center;
          width: 3.5rem;
          height: 3rem;
          border: 2px solid #f2f2f2;
          border-right: none;
          background-color: #faf9ff;
          font-size: 17px;
          border-radius: 1.1rem 0 0 1.1rem;
        }
        p{
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-left: 1.2rem;
          border-radius: 0 1.1rem 1.1rem 0;
          height: 100%;
          width: 100%;
          border: 2px solid #f2f2f2;
          border-left: none;
          img{
            padding-right: 1rem;
            display: none;
          }
        }
      }
      .chosen{
        ins{
          background-color: #cfc3fb;
          border: 2px solid #cfc3fb;
          border-right: none;
          color: #fff;
        }
        p{
          border: 2px solid #cfc3fb;
          border-left: none;
        }
      }
      .success{
        img{
          display: block;
        }
        ins{
          background-color: #50c493;
          border: 2px solid #50c493;
          border-right: none;
          color: #fff;
        }
        p{
          border: 2px solid #50c493;
          border-left: none;
        }
      }
      .fail{
        ins{
          background-color: #fdeeee;
          border: 2px solid #eb5757;
          border-right: none;
          color: #000;
        }
        p{
          border: 2px solid #eb5757;
          border-left: none;
        }
      }
    }
    .answerIs{
      border: 1px solid #ccc;
      border-radius: 0.2rem;
      margin: 2.5rem 0 6rem 0;
      padding: 1.5rem 3rem 1rem 1.5rem;
      h3{
        font-size: 15px;
        margin: 0;
      }
      .correct{
        color: #50c493;
      }
      .wrong{
        color: #eb5757;
      }
    }
    .mark{
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin: 3rem 0 5rem 0;
      button{
        border: 1px solid #ffe01b;
        background-color: #ffe01b;
        border-radius: 0.5rem;
        margin: 0;
        font-size: 14px;
        padding: 1rem 4rem;
        min-width: max-content;
        font-weight: 500;
        font-size: 17px;
        cursor: pointer;
        transition: all .1s;
        &:hover{
          background-color: #eccd00;
          border-color: #eccd00;
        }
      }
    }
    .quizFinished{
      text-align: center;
      img{
        transform: scale(1.05);
      }
      h2{
        width: 80%;
        margin: 1.5rem auto 0rem auto;
        font-size: 22px;
      }
      h1{
        margin-top: 2rem;
        margin-bottom: 1.4rem;
        font-size: 3.2rem;
        color: #00b887;
        font-weight: 500;
      }
      div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        button:nth-child(1){
          padding: 1.1rem 4rem;
          border-radius: 0.5rem;
          background-color: #ffe01b;
          color: #000;
          &:hover{
            background-color: #eccd00;
          }
        }
        button{
          font-weight: 500;
          color: #888;
          background: none;
          font-size: 17px;
          margin: 1rem auto;
          max-width: max-content;
          border: none;
          cursor: pointer;
          transition: all .1s;
        }
      }
    }
  }
`