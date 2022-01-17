import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import weekData from "../Data/weeks.json"
import { Link } from 'react-router-dom'
import { Arrow, ArrowChevron } from '../Assets/SVGs/icons'
import polygon from '../Assets/SVGs/polygon.svg'
import book3 from '../Assets/SVGs/book3.svg'
import note from '../Assets/SVGs/note.svg'
import messages from '../Assets/SVGs/messages.svg'
import videoPlayer from '../Assets/Images/VideoPlayer.png'
import { Navbar } from '../Components/Navbar'

const WeekLing = () => {
  
  const refToClick = useRef(null)
  const [show, setShow] = useState(false)
  
  useEffect(() => {
    refToClick.current.click();
  }, [])
  
  function showOptions(e){
    setShow(!show)
    if(show){
      e.target.parentNode.nextSibling.className = "week dontShow"
      e.target.nextSibling.className = "dropArrow dropOpen"
    }else{
      e.target.parentNode.nextSibling.className = "week"
      e.target.nextSibling.className = "dropArrow"
    }
  }

  return(
    <>
      {Object.entries(weekData).map(([week, materials], index) => {
        return(
          <div key={index}>
            <div className='selectDiv'>
              <div className="touch" onClick={e => showOptions(e)} ref={materials[0].current ? refToClick : null}></div>
              <span className='dropArrow dropOpen'>{ArrowChevron(.8)}</span>
              <h3>{week.length > 35 ? week.substring(0,35).concat("...") : week.substring(0,35)}</h3>
            </div>
            <div className="week dontShow">
              {
                materials.map((material, index) => {
                  return(
                    <div className={material.current ? "material current" : "material"} key={index}>
                      <span>{material.materialFormat === "Video" ? <img src={polygon}/> : material.materialFormat === "Quiz" ? <img src={note}/> : <img src={book3}/>}</span>
                      <ins>{material.materialFormat}</ins>
                      <p>{material.materialName}</p>
                    </div>
                  )
                })
              }
            </div>
          </div>
        )
      })}
    </>
  )
}

const WeekDetails = () => {


  return (
    <>
    <Navbar width={92}/>
    <WeekDetailsStyled>
      <p className="currentLocation">{"Grow your creative business in design field".substring(0,18).concat("...")} {ArrowChevron(.5)} Week 1 {ArrowChevron(.5)} <ins>UX Design Process: Empathize, Define, and Ideate</ins></p>
      <div className="nav">
        <button>Kurslarım</button>
        <div>
          <Link to="/"><ins>{Arrow(.8)}</ins></Link>
          <p>Week 1</p>
          <Link to="/"><ins>{Arrow(.8)}</ins></Link>
        </div>
      </div>
      <div className="wrapper">
        <div className="scroller">
          <WeekLing/>
        </div>
        <div className="rightSide">
          <h2>Introduction to UX research</h2>
          <img src={videoPlayer} alt="" />
          <hr />
          <div className='mark'>
            <button>Mark completed</button>
            <button>Davam et</button>
          </div>
          <div className="comment">
            <div>
              <h3>Comments</h3>
              <p><img src={messages}/> Discuss</p>
            </div>
            <form action="">
              <textarea name="" id="" cols="30" rows="4" placeholder='Write your feedback here...'></textarea>
            </form>
          </div>
        </div>
      </div>
    </WeekDetailsStyled>
    </>
  )
}

export default WeekDetails

const WeekDetailsStyled = styled.div`
  background-color: #fff;
  border: 1px solid #fff;
  border-top: 1px solid #eee;
  .currentLocation{
    color: #888;
    font-size: 15px;
    width: 92%;
    margin: 1rem auto;
    svg{
      margin: .3rem;
      margin-bottom: .1rem;
      transform: rotate(-90deg);
    }
    ins{
      text-decoration: none;
      color: #000;
      font-weight: 400;
    }
  }
  .nav{
    display: flex;
    justify-content: space-between;
    width: 92%;
    margin: 1.8rem auto 1rem auto;
    button{
      border: none;
      background-color: #b6a5f5;
      color: #f8f8f8;
      font-size: 14px;
      border-radius: .5rem;
      height: max-content;
      font-weight: 500;
      padding: .85rem 3.8rem;
      cursor: pointer;
      transition: all .1s;
      &:hover{
        background-color: #917fcf;
      }
    }
    div{
      display: flex;
      align-items: center;
      margin-right: -1rem;
      margin-top: -1.2rem;
      p{
        font-weight: 500;
        margin: 1rem 0;
        margin-top: .8rem;
      }
      a:nth-child(1){
        transform: rotate(180deg);
        margin-top: -.4rem;
      }
      a{
        padding: 1rem;
      }
    }
  }
  .wrapper{
    width: 92%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 2.4fr;
    grid-gap: 1.5rem;
    margin-top: 1.2rem;
    .scroller{
      max-height: 600px;
      overflow-y: scroll;
      margin-top: -.8rem;
      position: relative;
      cursor: default;
      .dontShow{
        display: none;
      }
      h3{
        margin: 1rem;
        margin-bottom: 1.7rem;
        font-size: 17px;
        font-weight: 500;
        padding: .2rem 0;
      }
      .dropArrow{
        display: flex;
        margin-top: .6rem;
        right: 1.8rem;
        position: absolute;
        transition: .2s all;
        z-index: 0;
      }
      .dropOpen{
        transform: rotate(-90deg);
      }
      .selectDiv{
        position: relative;
        cursor: pointer;
        .touch{
          overflow-x: hidden;
          position: absolute;
          width: 90%;
          border: 1px solid transparent;
          padding: 1rem;
          z-index: 1;
        }
        &:hover{
          *{
            color: #888;
          }
        }
      }
      .week{
        .material:last-child{
          margin-bottom: 2.5rem;
        }
        .material{
          max-width: max-content;
          display: flex;
          align-items: center;
          border-left: 7px solid transparent;
          padding: 0.4rem 2rem 0.4rem 1rem;
          border-radius: .55rem;
          cursor: pointer;
          transition: all .1s;
          span{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 1rem;
            height: 1rem;
            padding: .2rem;
            border-radius: 50%;
            border: 1px solid #555;
          } 
          ins{
            text-decoration: none;
            font-weight: 500;
            margin: 0 .5rem 0 1rem;
            min-width: max-content;
            font-size: 14px;
            &::after{
              content: " :";
            }
          }
          p{
            min-width: max-content;
            font-size: 14px;
            color: #4f4f4f;
          }
        }
        .current{
          background-color: #f2f8ff;
          border-left: 7px solid #2a72cc;
        }
      }
      ::-webkit-scrollbar {
        width: 5px;
        margin-top: 1rem;
      }
      
      ::-webkit-scrollbar-track {
        margin-top: 1rem;
        border-radius: 1rem;
        background: rgba(126, 126, 126, 0);
      }
      
      ::-webkit-scrollbar-thumb {
        border-radius: 1rem;
        background: rgba(126, 126, 126, 0.5);
      }
      
      ::-webkit-scrollbar-thumb:hover {
        background: rgba(126, 126, 126, 1);
      }
    }
    .rightSide{
      h2{
        font-weight: 500;
        margin-left: 3.2rem;
        font-size: 25px;
        margin-top: .5rem;
        margin-bottom: 2rem;
        color: #424242;
      }
      img{
        display: flex;
        justify-content: flex-end;
        margin-left: auto;
        width: 95%;
      }
      .mark{
        display: flex;
        justify-content: center;
        margin: 3rem 0;
        margin-left: 2rem;
        button:nth-child(2){
          background-color: #ffe01b;
          &:hover{
            background-color: #eccd00;
            border-color: #eccd00;
          }
        }
        button{
          margin: 0 1rem;
          font-size: 17px;
          font-weight: 500;
          padding: 1rem 2.2rem;
          min-width: 200px;
          background: none;
          border: 2px solid #ffe01b;
          border-radius: .5rem;
          cursor: pointer;
          transition: all .1s;
          &:hover{
            background-color: #eee;
            border-color: #eee;
          }
        }
      }
      .comment{
        margin-left: 2.7rem;
        margin-bottom: 6rem;
        div{
          display: flex;
          justify-content: space-between;
          margin-bottom: .7rem;
          h3{
            font-weight: 500;
            font-size: 21px;
          }
          p{
            display: flex;
            align-items: center;
            font-weight: 500;
            font-size: 17px;
            img{
              margin-top: .25rem;
              padding-right: 1rem;
            }
          }
        }
        form{
          display: flex;
            width: 100%;
          textarea{
            width: 100%;
            font-size: 17px;
            padding: 1.5rem 0 .5rem 1.5rem;
            border-radius: 0.5rem;
            border: 1px solid #ccc;
          }
        }
      }
    }
    hr{
      display: none;
    }
  }
  @media screen and (max-width:1024px){
    background-color: #fff;
    border: 1px solid #fff;
    border-top: 1px solid #eee;
    .currentLocation{
      display: none;
    }
    .nav{
      display: none;
    }
    .wrapper{
      width: 90%;
      margin: 0 auto;
      grid-template-columns: 1fr;
      grid-gap: 0;
      .scroller{
        display: none;
      }
      .rightSide{
        display: flex;
        width: 100%;
        flex-direction: column;
        h2{
          margin-left: 0rem;
          margin-top: 2rem;
          margin-bottom: 2rem;
        }
        img{
          display: flex;
          justify-content: center;
          margin: 0;
          width: 100%;
        }
        hr{
          display: flex;
          margin: 3rem 0 1rem 0;
          width: 100%;
          border: none;
          border-bottom: 2px solid #eee;
        }
        .mark{
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          margin: 3rem 0 5rem 0;
          order: 2;
          button:nth-child(2){
            background-color: #ffe01b;
            &:hover{
              background-color: #eccd00;
              border-color: #eccd00;
            }
          }
          button{
            display: flex;
            justify-content: space-between;
            margin: 0;
            font-size: 14px;
            padding: .5rem 1.2rem;
            min-width: max-content;
            cursor: pointer;
            transition: all .1s;
            &:hover{
              background-color: #eee;
              border-color: #eee;
            }
          }
        }
        .comment{
          display: flex;
          flex-direction: column;
          justify-content: center;
          width: 100%;
          margin: 0 auto;
          div{
            display: flex;
            justify-content: space-between;
            margin-bottom: .7rem;
            h3{
              font-weight: 500;
              font-size: 21px;
            }
            p{
              display: flex;
              align-items: center;
              font-weight: 500;
              font-size: 17px;
            }
          }
          form{
            display: flex;
            width: 100%;
            textarea{
              display: flex;
              font-size: 17px;
              padding: 1.5rem 0rem .5rem 1.5rem;
              border-radius: 0.5rem;
              border: 1px solid #ccc;
            }
          }
        }
      }
    }
  }

`