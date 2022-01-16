import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Calendar } from "../Components/Calendar/Calendar";
import { ArrowChevron, BookSaved, Chart, Eye1, Gallery2, Receipt, Star, Text, User, Video } from "../Assets/SVGs/icons";

const CreateAssignment = () => {
  return (
    <AssignmentStyle>
      <div className="header">
        <h3>Tapşırıq təyin et</h3>
        <Link to="/assignments">Çıxış</Link>
      </div>
      <div className="container">
        <div className="dropbox">
          <h2>Start creating your assignment</h2>
          <div className="examples">
            <div>
              <span>{Gallery2(1, "#6380ae")}</span>
              <p>Image</p>
              <ins>(png, jpg, jpeg)</ins>
            </div>
            <div>
              <span>{Video(1, "#6380ae")}</span>
              <p>Video</p>
              <ins>(Max size 2MB)</ins>
            </div>
            <div>
              <span>{BookSaved(1, "#6380ae")}</span>
              <p>Reading</p>
              <ins>(1000 symbols)</ins>
            </div>
            <div>
              <span>{Receipt(1, "#6380ae")}</span>
              <p>Quiz</p>
              <ins>(20 questions)</ins>
            </div>
          </div>
        </div>
        <div className="assignmentInfo">
          <div className="toolbox">
            <h3>Toolbox</h3>
            <p>Drag tools to the box and create assignment</p>
            <div className="components">
              <div draggable>
                <span style={{backgroundColor:"#f7dac8"}}>{Text()}</span>
                <p>Text</p>
              </div>
              <div draggable>
                <span style={{backgroundColor:"#e2f6cf"}}>{Gallery2()}</span>
                <p>Image</p>
              </div>
              <div draggable>
                <span style={{backgroundColor:"#e7e1fd"}}>{Video()}</span>
                <p>Video</p>
              </div>
              <div draggable>
                <span style={{backgroundColor:"#fbe8f9"}}>{Receipt()}</span>
                <p>Quiz</p>
              </div>
              <div draggable>
                <span style={{backgroundColor:"#cce1f6"}}>{Chart()}</span>
                <p>Chart</p>
              </div>
              <div draggable>
                <span style={{backgroundColor:"#e2f6cf"}}>{Star()}</span>
                <p>Rate</p>
              </div>
              <div draggable>
                <span style={{backgroundColor:"#e7e1fd"}}>{Eye1()}</span>
                <p>Simulation</p>
              </div>
              <div draggable>
                <span style={{backgroundColor:"#fbe8f9"}}>{User()}</span>
                <p>Teamwork</p>
              </div>
            </div>
          </div>
          <div className="inputs">
            <input type="text" placeholder="Tapşırığın başlığı"/>
            <div className="selectdiv">
              <label>
                  <select name="occupation">
                    <option label="" value="">Qrupu seç</option>
                    <option label="" value="Back-end Developer">Qrup 1</option>
                  </select>
                  <span>{ArrowChevron(0.9)}</span>
              </label>
            </div>
            <div className="selectdiv">
              <label>
                  <select name="occupation">
                    <option defaultValue label="" value="">Həftəni seç</option>
                    <option label="" value="Back-end Developer">Qrup 1</option>
                    <option label="" value="Back-end Developer">Qrup 2</option>
                    <option label="" value="Back-end Developer">Qrup 3</option>
                    <option label="" value="Back-end Developer">Qrup 4</option>
                  </select>
                  <span>{ArrowChevron(0.9)}</span>
              </label>
            </div>
          </div>
          <div className="deadline">
            <h4>Choose a deadline date</h4>
            <Calendar/>
            <input type="date" name="" id="" className="inputMobile" />
          </div>
          <div className="submit">
            <button>Paylaş</button>
          </div>
        </div>
      </div>
    </AssignmentStyle>
  )
}

export default CreateAssignment

const AssignmentStyle = styled.div`
  background-color: #fff;
  a{
    text-decoration: none;
    color: #000;
  }
  h2,h3,h4{
    font-weight: 500;
    margin: 0;
  }
  .header{
    display: flex;
    justify-content: space-between;
    background-color: #c5e4a4;
    padding: 1rem 7rem;
  }
  .container{
    padding: 5rem 7rem;
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 10rem;
    .dropbox{
      background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='16' ry='16' stroke='%23aaa' stroke-width='5' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
      border-radius: 1rem;
      height: 35rem;
      h2{
        text-align: center;
        margin-top: 5rem;
        color: #888;
      }
      .examples{
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        width: 60%;
        margin: 0 auto;
        margin-top: 4rem;
        div{
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
          margin: 0 auto;
          margin-bottom: 3.5rem;
          p{
            margin: 0;
            font-weight: 500;
          }
          ins{
            color: #555;
            text-decoration: none;
          }
          span{
            display: flex;
            width: max-content;
            align-items: center;
            border-radius: 100%;
            background-color: #cce1f6;
            margin: 0 auto;
            margin-bottom: 1.5rem;
            padding: 1rem;
          }
        }
      }
    }
    .assignmentInfo{
      .toolbox{
        h3{
          margin: 0;
        }
        p{
          margin-top: .8rem;
          color: #888;
          font-weight: 500;
        }
        .components{
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          margin-top: 2rem;
          border-radius: 0.5rem;
          padding: 2rem 0;
          padding-bottom: 0;
          border: 1px solid #ddd;
          div{
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: center;
            margin: 0 auto;
            margin-bottom: 2rem;
            padding: 0;
            cursor: grab;
            p{
              margin: 0;
              font-weight: 500;
              color: #000;
            }
            ins{
              color: #555;
              text-decoration: none;
            }
            span{
              display: flex;
              width: 1.5rem;
              height: 1.5rem;
              justify-content: center;
              align-items: center;
              border-radius: 100%;
              background-color: #cce1f6;
              margin: 0 auto;
              margin-bottom: 1.2rem;
              padding: 1rem;
            }
          }
        }
      }
      .inputs{
        display: flex;
        flex-direction: column;
        margin: 2rem 0;
        input,select{
          font-family: "Euclid";
          padding: 1.2rem 1.5rem;
          margin: .7rem 0;
          border-radius: 0.4rem;
          border: none;
          background-color: #f2f2f2;
          font-size: 15px;
          color: #777;
          appearance: none;
        }
        .selectdiv {
          position: relative;
          display: flex;
          width: 100%;
          label{
            width: 100%;
            span{
              right: 1.6rem;
              top: .95rem;
              height: 34px;
              padding: 15px 0px 0px 8px;
              position: absolute;
              pointer-events: none;
            }
          }
          select{
            width: 100%;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            & ::-ms-expand {
              display: none;
            }
          }
        }
      }
      .deadline{
        .react-calendar{
          border: 1px solid #eee;
          padding: 1.5rem;
          border-radius: .5rem;
          margin: 1rem 0;
          span{
            font-weight: 500;
          }
          button{
            background: none;
            border: none;
          }
          .react-calendar__navigation  {
            display: flex;
            text-align: center;
            button:nth-child(1){
              display: none;
            }
            button:nth-child(2){
              font-size: 1.5rem;
            }
            button:nth-child(4){
              font-size: 1.5rem;
            }
            button:nth-child(5){
              display: none;
            }
            span{
              font-size: 16px;
            }
          }
          .react-calendar__navigation {
            button{
              /* display: none; */
            }
          }
        }
        .inputMobile{
          display: none;
        }
      }
      .submit{
        display: flex;
        justify-content: end;
        button{
          font-family: "Euclid";
          padding: .8rem 4rem;
          border: none;
          border-radius: 0.5rem;
          font-weight: 500;
          background-color: #ffe01b;
          cursor: pointer;
          transition: .1s all;
          &:hover{
            background-color: #aaa;
          }
        }
      }
    }
  }
  @media screen and (max-width:1024px){
    .header{
      display: flex;
      justify-content: space-between;
      background-color: #c5e4a4;
      padding: 1rem;
    }
    .container{
      padding: 2rem 0;
      margin: 1rem;
      grid-template-columns: 1fr;
      grid-gap: 3rem;
      .dropbox{
        padding-bottom: 2rem;
      }
      .assignmentInfo{
        margin-bottom: 2rem;
      }
    }
    border-bottom: 1px solid transparent;
  }
    @media screen and (max-width: 360px) {
    .container{
      .assignmentInfo{  
        .deadline{
          display: flex;
          flex-direction: column;
          /* align-items: center; */
          /* justify-content: center; */
          .calendar{
            display: none;
          }
          .inputMobile {
            margin: 1rem 0 3rem 0;
            display: block;
          }
        }
      }
      button{
        margin: 0 auto;
      }
    }
  }
`