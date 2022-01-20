import React, { useState } from "react"
import styled from "styled-components"
import { QuizFinished } from "./QuizFinished"
import { Quiz } from "./Quiz"

export const QuizContainer = () => {

  const [ finished, setFinished ] = useState(false)
  
  return (
    <QuizPartStyle>
      <h2>Quiz</h2>
      <div className="quiz">
        {
          finished ? <QuizFinished/> : <Quiz setFinished={setFinished}/>
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
  @media screen and (max-width:1024px){
    justify-content: center;
    width: 100%;
    margin: 0;
    margin-bottom: 10rem;
    h2{
      margin: 1.5rem 0;
      font-size: 24px;
      color: #424242;
    }
    .quiz{
      width: 100%;
      margin: 0 auto;
      h2{
        font-weight: 400;
        font-size: 20px;
        margin: 1rem 0 1.7rem 0;
      }
      h3{
        margin-bottom: 2rem;
        font-size: 16px;
      }
      ins{
        font-size: 14px;
      }
      .answerIs{
        margin: 2.5rem 0;
      }
    }
  }
`