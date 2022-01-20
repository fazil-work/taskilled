import React, { useEffect, useRef, useState } from "react"
import questions from "../../../Data/questions.json"
import taskDone from "../../../Assets/SVGs/taskDone.svg"

export const Quiz = ({setFinished}) => {
  const [ currentQuestion, setCurrentQuestion ] = useState(0)
  const [ optionChosen, setOptionChosen ] = useState("")
  const [ answerIs, setAnswerIs ] = useState(null)
  const [ answered, setAnswered ] = useState(false)
  const [ chosenOptionTarget, setChosenOptionTarget ] = useState("")

  const optionsRef = useRef("")

  useEffect( () => {
    let correctOption = optionsRef.current.children[(questions[currentQuestion].answer).toUpperCase()]
    
    answered && (correctOption.className = "success")

    return () => {
      correctOption && (correctOption.className = "")
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

  return(
    <>
      <h2>Question  {questions[currentQuestion].id}/{questions.length}</h2>
      <h3>{questions[currentQuestion].question}</h3>
      <ins>Yalnız bir cavab seçin.</ins>
      <div className="options" ref={optionsRef}>
        {
          ["A", "B", "C", "D", "E"].map((variant, index) => {

            return(
              <div onClick={(e) => chooseAnswer(e, variant)} id={variant} key={index}>
                <ins>{variant}</ins>
                <p>{questions[currentQuestion][variant.toLowerCase()]} <img src={taskDone} className="" alt="" /></p>
              </div> 
            )
          })
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
  )
};
