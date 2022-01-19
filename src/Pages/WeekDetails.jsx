import styled from 'styled-components'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from '../Components/Navbar'
import { Arrow, ArrowChevron } from '../Assets/SVGs/icons'
import { CourseMaterials } from '../Components/CourseDetails/CourseMaterials'
import { VideoPart } from '../Components/CourseDetails/VideoPart'
import { QuizPart } from '../Components/CourseDetails/QuizPart'
import { ResourcePart } from '../Components/CourseDetails/ResourcesPart'
import { ReadingPart } from '../Components/CourseDetails/ReadingPart'

const WeekDetails = () => {

  const [showPart, setShowPart] = useState("video")

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
          <CourseMaterials showPart={showPart} setShowPart={setShowPart}/>
          <div className="rightSide">
            {
              showPart === "video" || showPart === "video2"?
              <VideoPart/>
              : showPart === "quiz" ?
              <QuizPart/>
              : showPart === "resource" ?
              <ResourcePart/>
              :
              <ReadingPart/>
            }
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
    }
  }
`