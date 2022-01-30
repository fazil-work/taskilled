import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Calendar } from "../Components/Calendar/Calendar";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { ArrowChevron, BookSaved, Chart, Close, Eye1, Gallery2, Receipt, Star, Text, User, Video } from "../Assets/SVGs/icons";

let draggableItems = [ {"Text":["#f7dac8", Text(), 1]}, {"Image":["#e2f6cf", Gallery2(), 2]}, {"Video":["#e7e1fd", Video(), 3]}, {"Quiz":["#fbe8f9", Receipt(), 4]}, {"Chart":["#cce1f6", Chart(), 5]}, {"Rate":["#e2f6cf", Star(), 6]}, {"Simulation":["#e7e1fd", Eye1(), 7]}, {"Teamwork":["#fbe8f9",User(), "8"]}]

function ToolBox({props}){

  const {textAdded, imageAdded, videoAdded} = props;

  function ItemX({title, icon, id, backgroundColor}){
    
    const [{ isDragging }, drag] = useDrag(() => ({
      type: "div",
      item: { id: id },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }));

    return(
      <div key={id} ref={drag} id={id}>
        <span style={{backgroundColor: isDragging ? "transparent" : (textAdded === id) ? "transparent" : (imageAdded === id) ? "transparent" : (videoAdded === id) ? "transparent" : backgroundColor, border: isDragging ? "1px dashed #aaa" : (textAdded === id) ? "1px dashed #aaa" : (imageAdded === id) ? "1px dashed #aaa" : (videoAdded === id) ? "1px dashed #aaa" : "1px solid transparent", filter: isDragging && "opacity(.8)"}}>{icon}</span>
        <p>{title}</p>
      </div>
    )
  }

  return(
    <div className="toolbox">
      <h3>Toolbox</h3>
      <p>Drag tools to the box and create assignment</p>
      <div className="components">
        {
          draggableItems.map((item) => {
            return(
              Object.keys(item).map((key) => {
                return(
                  <ItemX key={key} title={key} icon={item[key][1]} id={item[key][2]} backgroundColor={item[key][0]}/>
                )
              })
            )
          })
        }
      </div>
    </div>
  )
}

const Board = ({props}) => {

  const {textAdded, setTextAdded, imageAdded, setImageAdded, videoAdded, setVideoAdded} = props;

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "div",
    drop: (item) => addItemtoBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addItemtoBoard = (id) => {
    if(id === 1){
      setTextAdded(1);
    }
    if(id === 2){
      setImageAdded(2);
    }
    if(id === 3){
      setVideoAdded(3);
    }
  };

  const Xac = () => {
    return (
      <div>
        <div>
          {
            textAdded && 
            <div className="containerItem">
              <h2>Text</h2>
              <div className="inside">
                <textarea name="" id="description" cols="30" rows="6" placeholder="Course description.."></textarea>
                <span onClick={() => setTextAdded(null)}>{Close()}</span>
              </div>
            </div>
          }
          {
            imageAdded && 
            <div className="containerItem">
              <h2>Image</h2>
              <div className="inside">
                <input id="image" type="file" name="" />
                <span onClick={() => setImageAdded(null)}>{Close()}</span>
              </div>
            </div>
          }
          {
            videoAdded && 
            <div className="containerItem">
              <h2>Video</h2>
              <div className="inside">
                <input id="video" type="file" name="" />
                <span onClick={() => setVideoAdded(null)}>{Close()}</span>
              </div>
            </div>
          }
        </div>
      </div>
    )
  }

  return(
    <div className="dropbox" ref={drop} style={{backgroundColor: isOver ? "#f8f8f8":"transparent", opacity:isOver&&"0.7"}}>
      {
        (textAdded || imageAdded || videoAdded)  ?
          <div className="boardOccupied">
            <Xac/>
          </div>
        :
        <>
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
        </>
      }
    </div>
  )
}

const CreateAssignment = () => {

  const [textAdded, setTextAdded] = useState(null);
  const [imageAdded, setImageAdded] = useState(null);
  const [videoAdded, setVideoAdded] = useState(null);
  const [chosenDateGlobalState, setChosenDateGlobalState] = useState(null);
  const [creationFinished, setCreationFinished] = useState(true);

  useEffect(() => {
    setCreationFinished(false);
    setTextAdded(null);
    setImageAdded(null);
    setVideoAdded(null);
    setChosenDateGlobalState(null);
  },[])

  const submitAssignment = (e) => {
    e.preventDefault();

    let bodyFormData = new FormData();
    bodyFormData.append('user', 8);
    bodyFormData.append('title', e?.target?.title?.value);
    bodyFormData.append('image', e?.target?.image?.files[0] || "");
    bodyFormData.append('video', e?.target?.video?.files[0] || "");
    bodyFormData.append('reading_record', e?.target?.reading_record?.files[0] || "");
    bodyFormData.append('quiz_file', e?.target?.quiz_file?.files[0] || "");
    bodyFormData.append('group', 1 || e?.target?.group?.value);
    bodyFormData.append('week', 1 || e?.target?.week?.value);

    for (let pair of bodyFormData.entries()) {
      console.log(pair[0]+ ', ' + pair[1]); 
    }

    axios.post("http://3.68.156.86:8000/api/v1/core/create-assigment/", bodyFormData,)
    .then(response => {
      console.log(response);
      if(response.status === 201){
        setCreationFinished(true);
        window.scroll(0,0);
      }
    })
    
  }

  return (
    <AssignmentStyle>
      {
        creationFinished &&
        <div className="creationFinished">
          <div className="containerModule">
            <h2>You have successfully created an assignment</h2>
            <Link to="/">Go to home</Link>
            <button onClick={() => window.location.reload()}>Create another</button>
          </div>
        </div>
      }
      <DndProvider backend={HTML5Backend}>
        <div className="header">
          <h3>Tapşırıq təyin et</h3>
          <Link to="/assignments">Çıxış</Link>
        </div>
        <form onSubmit={(e) => submitAssignment(e)} method="post">
        <div className="container">
          <Board props={{textAdded, setTextAdded, imageAdded, setImageAdded, videoAdded, setVideoAdded}}/>
          <div className="assignmentInfo">
            <ToolBox props={{textAdded, setTextAdded, imageAdded, setImageAdded, videoAdded, setVideoAdded}}/>
            <div className="inputs">
              <input type="text" id="title" required placeholder="Tapşırığın başlığı"/>
              <div className="selectdiv">
                <div>
                  <select name="group" id="group" required>
                    <option disabled selected hidden label="" value="0" id="">Qrupu seç</option>
                    <option label="" id="1">1</option>
                  </select>
                  <span>{ArrowChevron(0.9)}</span>
                </div>
              </div>
              <div className="selectdiv">
                <div>
                  <select name="week" id="week" required>
                    <option disabled selected hidden label="" value="0" id="">Həftəni seç</option>
                    <option label="" id="1">1</option>
                    <option label="" id="2">2</option>
                    <option label="" id="3">3</option>
                    <option label="" id="4">4</option>
                  </select>
                  <span>{ArrowChevron(0.9)}</span>
                </div>
              </div>
            </div>
              <div className="deadline">
                <h4>Choose a deadline date</h4>
                <Calendar props={{setChosenDateGlobalState}}/>
                <input type="date" name="" id="" className="inputMobile" />
              </div>
              <div className="submit">
                <button>Paylaş</button>
              </div>
            </div>
          </div>
        </form>
      </DndProvider>
    </AssignmentStyle>
  )
}

export default CreateAssignment

const AssignmentStyle = styled.div`
  position: relative;
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
    border: 1px;
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
      .boardOccupied{
        padding: 2rem;
        width: 90%;
        margin: 0 auto;
        .containerItem{
          display: flex;
          flex-direction: column;
          h2{
            padding: 0;
            margin: 0;
            margin-right: auto;
            margin-bottom: .5rem;
            color: #000;
            font-size: 20px;
          }
          .inside{
            display: flex;
            align-items: center;
            position: relative;
            margin-bottom: 1rem;
            height: 100%;
            span{
              display: flex;
              margin-left: 1rem;
              padding: .75rem;
              background-color: #eee;
              border-radius: 0.2rem;
              cursor: pointer;
              transition: all .1s;
              border: 1px solid #eee;
              &:hover{
                background-color: #f8f8f8;
                border: 1px solid #aaa;
              }
            }
          }
          textarea,input{
            width: 100%;
            background-color: #eee;
            border-radius: 0.2rem;
            padding: .75rem;  
            border: none;
          }
          input{
            cursor: pointer;
            &:hover{
              background-color: #f2f2f2;
            }
          }
        }
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
          div{
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
  .creationFinished {
    z-index: 100;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #000000bb;
    .containerModule{
      display: flex;
      background-color: #eee;
      flex-direction: column;
      align-items: center;
      padding: 5rem;
      border-radius: 0.5rem;
      max-width: 600px;
      margin: 0 auto;
      margin-top: 12%;
      text-align: center;
      a{
        margin: 2rem;
        background-color: #c5e4a4;
        padding: 0.75rem 2rem;
        border-radius: 0.5rem;
        transition: 0.1s all;
        &:hover {
          background-color: #a5d878;
        }
      }
      button {
        border: none;
        font-weight: 500;
        cursor: pointer;
        &:hover {
          color: #555;
        }
      }
    }
  }
`