import React from 'react'
import styled from 'styled-components'
import userInfo from '../Data/user.json'
import play from "../Assets/SVGs/Play.svg"
import Thumbnail from "../Assets/Images/Thumbnail.png"
import pdfImage from "../Assets/SVGs/pdfImage.svg"
import bookSaved from "../Assets/SVGs/bookSaved.svg"
import tasks from "../Assets/SVGs/tasks.svg"
import lamp from "../Assets/SVGs/lamp.svg"
import notes from "../Assets/SVGs/notes.svg"
import backpack from "../Assets/Images/backpack.png"
import { Link } from 'react-router-dom'
import { CountStars } from '../Components/CountStars'
import { ArrowChevron, Bars, Calendar2, Clock, Language } from '../Assets/SVGs/icons'

const Course = () => {
  return (
    <CourseStyle>
      <FirstDiv/>
      <SecondDiv/>
      <ThirdDiv/>
      <ForthDiv/>
      <FifthDiv/>
    </CourseStyle>
  )
}

export default Course

const CourseStyle = styled.div`
  background-color: #fff;
  margin: 0 auto;
  border: 1px solid #eee;
`


function FirstDiv(){
  return(
    <FirstDivStyle>
      <p className="currentLocation">Home {ArrowChevron(.5)} Design {ArrowChevron(.5)} UX/UI design {ArrowChevron(.5)} <ins>Grow your creative business in design field</ins></p>
      <div className="wrapper">
        <div className='leftside'>
          <h1>Management Skills: New Manager Training in Essential Skills</h1>
          <div className="userInfo">
            <Link to="/consultant">
              <img src={userInfo.image} alt="" />
            </Link>
            <div className='nameAndPoints'>
              <p>{userInfo.fullName}</p>
              <CountStars rating={userInfo.rating}/>
            </div>
          </div>
          <div className="about">
            <h3>Kurs haqqında</h3>
            <p>Ready to grow the creative business of your dreams? Whether you’re itching to go full-time freelance or looking for ways to supercharge your existing biz, it’s time to really make it happen. Join freelancer and creative business expert Kaleigh Moore for a live, two-week crash-course where you’ll learn everything you need to set up (and manage!) a thriving creative business that you love. <br /><br /> As a part of this exclusive learning series, you’ll master the most intimidating elements of running a business, gain actionable pricing strategies & techniques that will allow you to charge more for your work, and ultimately gain more confidence as a business owner so you can spend more time focusing on what you do best—creating. <br /><br /> In this first 3-hour course, Kaleigh will get into the nitty gritty of setting up your business for success including strategies for targeting clients, approaching the value conversation, contracts, invoicing, and everything in between. Plus, Kaleigh will equip you with the tools you need to set and present your rates to clients—and most importantly—how to justify the value proposition behind the work that you do. <a href="/">Davamını oxu...</a></p>
          </div>
        </div>
        <div className='rightside'>
          <div className="thumbnail">
            <img className='play' src={play} alt="Play button" />
            <img className="image" src={Thumbnail} alt="Video thumbnail" />
          </div>
          <div className="details">
            <div className="info">
              <div>
                <span>{Language(.9)}</span>
                <p>Azərbaycanca</p>
              </div>
              <div>
                <span>{Calendar2(1)}</span>
                <div>
                  <p>7 Yanvar, 2021</p>
                  <ins>Son müraciət tarixi 5 Yanvar</ins>
                </div>
              </div>
              <div>
                <span>{Clock(1.1)}</span>
                <div>
                  <p>48 saat</p>
                  <ins>Həftədə 6 saat olmaqla</ins>
                </div>
              </div>
              <div>
                <span>{Bars()}</span>
                <p>Başlanğıc səviyyə</p>
              </div>
            </div>
          </div>
            <hr />
            <div className="submit">
              <div>
                <ins>Ümumi:</ins>
                <h2>21 AZN</h2>
              </div>
            </div>
          <button>Əlavə et</button>
        </div>
      </div>
    </FirstDivStyle>
  )
}

const FirstDivStyle = styled.div`
  width: 84%;
  margin: 0 auto;
  padding: 0.5rem auto 5rem auto;
  .currentLocation{
    color: #888;
    font-size: 15px;
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
  .wrapper{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0rem;
    margin-top: 2.5rem;
    margin-bottom: 5rem;
    .leftside{
      h1{
        font-size: 36px;
        font-weight: 500;
        margin-bottom: 1.2rem;
      }
      .userInfo{
        display: flex;
        align-items: center;
        img{
          width: 2.2rem;
          height: 2.2rem;
          border-radius: 100%;
          margin-right: .8rem;
        }
        .nameAndPoints{
          p{
            margin: 0;
            margin-top: .2rem;
            margin-bottom: -.2rem;
            font-size: 16px;
            font-weight: 400;
          }
          .stars{
            display: flex;
            align-items: center;
            transform: scale(.7);
            margin-left: -1.3rem;
            p{
              margin: 0 .1rem;
            }
          }
        }
      }
      .about{
        h3{
          font-weight: 500;
          font-size: 17px;
          margin: 1.5rem 0;
        }
        p{
          font-size: 17px;
          line-height: 1.6rem;
          a{
            text-decoration: none;
            color: #2f80ed;
          }
        }
      }
    }
    .rightside{
      display: flex;
      flex-direction: column;
      .thumbnail{
        display: flex;
        justify-content: right;
        position: relative;
        margin-top: .8rem;
        .play{
          position: absolute;
          left: 56%;
          top: 44%;
          z-index: 2;
        }
        .image{
          margin: 0;
          margin-right: -1rem;
          height: 390px;
          filter: brightness(.9);
        }
      }
      .details{
        margin: 0 auto;
        margin-top: .8rem;
        .info{
          justify-content: space-between;
          div{
            display: flex;
            align-items: center;
            margin: 1.2rem 0;
            margin-left: -1rem;
            div{
              margin: 0rem;
              margin-left: 1.5rem;
              display: block;
              ins{
                font-size: 15px;
                text-decoration: none;
                color: #888;
              }
              p{
                margin: 0;
              }
            }
            span{
              display: flex;
              justify-content: center;
              align-items: center;
              border: 2px solid #eee;
              border-radius: 100%;
              width: 2rem;
              height: 2rem;
              padding: .2rem;
            }
            p{
              font-size: 17px;
              margin: 0;
              margin-left: 1.5rem;
            }
          }
        }
      }
      hr{
        display: flex;
        width: 60%;
        border: none;
        margin: 1.7rem auto;
        margin-right: 5rem;
        border-bottom: 1px solid #eee;
      }
      .submit{
        div{
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 1rem 0 3rem 0;
          margin-left: -8rem;
          ins{
            text-decoration: none;
            color: #888;
            font-size: 17px;
            margin-left: 0;
          }
          h2{
            font-size: 21px;
            font-weight: 500;
            margin: 0;
            margin-left: 1rem;
            margin-top: -.2rem;
          }
        }
      }
      button{
        display: flex;
        justify-content: center;
        padding: 1rem;
        font-size: 16px;
        width: 65%;
        margin: 0 auto;
        margin-right: 3rem;
        background: #ffe01b;
        border: none;
        border-radius: .5rem;
        font-weight: 500;
        font-family: "Euclid";
        transition: .1s all;
        &:hover{
          cursor: pointer;
          background: #ebcb00; 
        }
      }
    }
  }
  @media screen and (max-width:1024px){
    width: 90%;
    margin: 0 auto;
    padding: 0.5rem auto 5rem auto;
    .currentLocation{
      display: none;
    }
    .wrapper{
      grid-template-columns: 1fr;
      margin-top: 0rem;
      margin-bottom: 5rem;
      .leftside{
        h1{
          font-size: 18px;
          font-weight: 500;
          margin-bottom: 1.2rem;
        }
        .about{
          display: none;
        }
      }
      .rightside{
        .thumbnail{
          display: flex;
          justify-content: center;
          position: relative;
          margin-top: 1rem;
          .play{
            position: absolute;
            left: 44%;
            top: 44%;
            z-index: 2;
          }
          .image{
            margin: 0;
            width: 100%;
            height: min-content;
            filter: brightness(.9);
            object-fit: contain;
            transform: scale(1.06 );
          }
        }
        .details{
          width: 100%;
          margin-top: 1rem;
          background-color: #f8f8f8;
          border-radius: 0.5rem;
          .info{
            div{
              display: flex;
              align-items: center;
              margin: 1.2rem 0;
              margin-left: 1rem;
              div{
                margin: 0rem;
                margin-left: 1.5rem;
                display: block;
                ins{
                  font-size: 15px;
                  text-decoration: none;
                  color: #888;
                }
                p{
                  margin: 0;
                }
              }
              span{
                display: flex;
                justify-content: center;
                align-items: center;
                border: 2px solid #e8e8e8;
                border-radius: 100%;
                width: 2rem;
                height: 2rem;
                padding: .2rem;
              }
              p{
                font-size: 17px;
                margin: 0;
                margin-left: 1.5rem;
              }
            }
          }
        }
        hr{
          width: 100%;
          margin: 1.5rem 0;
        }
        .submit{
          div{
            justify-content: left;
            margin: 1rem 0 2.5rem 0;
          }
        }
        button{
          width: 100%;
        }
      }
    }
  }
`


function SecondDiv(){
  return(
    <SecondDivStyle>
      <div className="wrapper">
        <div className='pdfDiv'>
          <h1>Sillabus</h1>
          <button><img src={pdfImage} alt="" /> PDF broşuru yüklə</button>
        </div>
        <div className='sillabus'>
          <ul>
            <li>
              <div>
                <h3>UX Fundamentals & Design Research</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor fuga vero nulla laboriosam id veritatis sapiente adipisci ea repellat aperiam corrupti cumque molestias dolorem officia nemo, sit obcaecati. Eaque nihil quos fuga hic itaque voluptate? Nobis hic, aperiam ullam dolorum provident quae reiciendis necessitatibus obcaecati exercitationem. Voluptatem voluptatibus dolorum ad deserunt modi consectetur nam illo? <a href="">Hamısını oxu...</a> </p>
              </div>
            </li>
            <li>
              <div>
              <h3>Concept to Low-Fidelity Prototyping</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor fuga vero nulla laboriosam id veritatis sapiente adipisci ea repellat aperiam corrupti cumque molestias dolorem officia nemo, sit obcaecati. Eaque nihil quos fuga hic itaque voluptate? Nobis hic, aperiam ullam dolorum provident quae reiciendis necessitatibus obcaecati exercitationem. Voluptatem voluptatibus dolorum ad deserunt modi consectetur nam illo? <a href="">Hamısını oxu...</a> </p>
              </div>
            </li>
            <li>
              <div>
              <h3>CAPSTONE - UX Portfolio Design</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor fuga vero nulla laboriosam id veritatis sapiente adipisci ea repellat aperiam corrupti cumque molestias dolorem officia nemo, sit obcaecati. Eaque nihil quos fuga hic itaque voluptate? Nobis hic, aperiam ullam dolorum provident quae reiciendis necessitatibus obcaecati exercitationem. Voluptatem voluptatibus dolorum ad deserunt modi consectetur nam illo? <a href="">Hamısını oxu...</a> </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </SecondDivStyle>
  )
}

const SecondDivStyle = styled.div`
  background-color: #f7eefd;
  padding-bottom: 3.5rem;
  .wrapper{
    width: 84%;
    margin: 0 auto;
    .pdfDiv{
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 3rem 0 0rem 0;
      padding: 1.5rem 0;
      h1{
        font-weight: 500;
        font-size: 36px;
        color: #4f4f4f;
        margin-bottom: 0.5rem;
      }
      button{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem 1.6rem 1rem 1.4rem;
        font-size: 15px;
        background: #fff;
        border: none;
        border-radius: .4rem;
        font-weight: 500;
        font-family: "Euclid";
        transition: .1s all;
        margin-bottom: -2rem;
        &:hover{
          cursor: pointer;
          background: #aaa; 
        }
        img{
          margin: 0;
          margin-right: 1rem;
        }
      }
    }
    .sillabus{
      background-color: #fff;
      padding: 2rem 12rem 2rem 2rem;
      border-radius: 0.5rem;
      box-shadow: 0 0 15px 5px #00000011;
      a{
        text-decoration: none;
        color: #2f80ed;
      }
      h3{
        font-size: 20px;
        font-weight: 500;
        margin-bottom: 1.3rem;
      }
      p{
        line-height: 1.6;
        font-size: 17px;
        margin-bottom: 2rem;
      }
      li:nth-child(1){
        &::before{
          margin-top: 1.2rem;
          background-color: #ddd;
        }
      }
      li:nth-child(3){
        &::before{
          margin-bottom: 1rem;
          background-color: #ddd;
        }
      }
      li{
        list-style: none;
        display: flex;
        &::before{
          content: "";
          padding: 0.02rem;
          margin: 0 4rem 0 0;
          margin-left: -2rem;
          background-color: #ddd;
        }
        div{
          h3{
            &::before{
              content: "";
              display: flex;
              flex-direction: column;
              width: 12px;
              height: 12px;
              border-radius: 100%;
              margin-left: -4.37rem;
              margin-bottom: -1.2rem;
              background-color: #20bece;
            }
          }
        }
      }
    }
  }
`


function ThirdDiv(){
  return(
    <ThirdDivStyle>
      <div className="wrapper">
        <div className="info">
          <h1>Tədris prossesinin təşkili</h1>
          <p>Qəbul prosesimiz aşağıdakı addımlardan ibarətdir. Biz təkcə tələbələri qəbul etmirik. Karyeranızı bizimlə birgə dəyişmək üçün istəkli olmağınız kifayətdir.</p>
        </div>
        <div className="parts">
          <div>
            <img src={bookSaved} alt="" />
            <h2>Dərsləri dinləmək</h2>  
            <p>Lorem ipsum dolor sit amet consectetur adip</p>
          </div>
          <div>
            <img src={tasks} alt="" />
            <h2>Tapşırıqların icrası</h2>
            <p>Lorem ipsum dolor sit amet consectetur adip</p>
          </div>
          <div>
            <img src={lamp} alt="" />
            <h2>Mentor dəstəyi</h2>
            <p>Lorem ipsum dolor sit amet consectetur adip</p>
          </div>
          <div>
            <img src={notes} alt="" />
            <h2>Quiz</h2>
            <p>Lorem ipsum dolor sit amet consectetur adip</p>
          </div>
        </div>
      </div>
    </ThirdDivStyle>
  )
}

const ThirdDivStyle = styled.div`
  width: 84%;
  margin: 5rem auto;
  .wrapper{
    .info{
      text-align: center;
      width: 55%;
      margin: 0 auto;
      h1{
        font-weight: 500;
        font-size: 36px;
      }
      p{
        color: #828282;
        font-size: 17px;
        font-weight: 500;
        line-height: 1.5;
      }
    }
    .parts{
      margin: 5.8rem auto;
      display: flex;
      justify-content: space-between;
      div{
        align-items: center;
        text-align: center;
        margin: 0 .7rem;
        padding: 2rem 0;
        border-radius: 0.5rem;
        h2{
          font-weight: 500;
          color: #424242;
          font-size: 22px;
          margin: 2rem 0;
        }
        p{
          font-size: 17px;
          line-height: 1.5;
        }
      }
      div:nth-child(2){
        box-shadow: 0 0 20px 5px #00000011;
      }
    }
  }
`


function ForthDiv(){
  return(
    <ForthDivStyle>
      <div className="wrapper">
        <h1>Peşəkarlardan öyrən!</h1>
        <div className="staff">
          <div style={{borderTopColor: "#bb81ea"}}>
            <img src={userInfo.image} alt="" />
            <h3>{userInfo.fullName}</h3>
            <ins>{userInfo.occupation}</ins>
            <p>Lorem ipsum dolor sit amet cons, adipisicing elit. Sapiente perferendis velit nulla dolorum, aliquid commodi officiis facilis fugiat recusandae enim architecto, delectus quibusdam, minus voluptate molestiae ad consequuntur. Inventore voluptates eos rem vitae obcaecati nobis eveniet!</p>
          </div>
          <div style={{borderTopColor: "#0bb0dd"}}>
            <img src={userInfo.image} alt="" />
            <h3>{userInfo.fullName}</h3>
            <ins>{userInfo.occupation}</ins>
            <p>Lorem ipsum dolor sit amet cons, adipisicing elit. Sapiente perferendis velit nulla dolorum, aliquid commodi officiis facilis fugiat recusandae enim architecto, delectus quibusdam, minus voluptate molestiae ad consequuntur. Inventore voluptates eos rem vitae obcaecati nobis eveniet!</p>
          </div>
          <div style={{borderTopColor: "#f9ad13"}}>
            <img src={userInfo.image} alt="" />
            <h3>{userInfo.fullName}</h3>
            <ins>{userInfo.occupation}</ins>
            <p>Lorem ipsum dolor sit amet cons, adipisicing elit. Sapiente perferendis velit nulla dolorum, aliquid commodi officiis facilis fugiat recusandae enim architecto, delectus quibusdam, minus voluptate molestiae ad consequuntur. Inventore voluptates eos rem vitae obcaecati nobis eveniet!</p>
          </div>
          <div style={{borderTopColor: "#0ac7b6"}}>
            <img src={userInfo.image} alt="" />
            <h3>{userInfo.fullName}</h3>
            <ins>{userInfo.occupation}</ins>
            <p>Lorem ipsum dolor sit amet cons, adipisicing elit. Sapiente perferendis velit nulla dolorum, aliquid commodi officiis facilis fugiat recusandae enim architecto, delectus quibusdam, minus voluptate molestiae ad consequuntur. Inventore voluptates eos rem vitae obcaecati nobis eveniet!</p>
          </div>
        </div>
      </div>
    </ForthDivStyle>
  )
}

const ForthDivStyle = styled.div`
  width: 86%;
  margin: 9.6rem auto 6rem auto;
  .wrapper{
    h1{
      font-weight: 500;
      text-align: center;
    }
    .staff{
      display: flex;
      /* flex-wrap: wrap; */
      margin: 4rem 0;
      div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        border-top: 5px solid violet;
        border-radius: 0.5rem;
        border-top-left-radius: .6rem;
        border-top-right-radius: .6rem;
        box-shadow: 0 0 25px 5px #00000011;
        margin: 1rem;
        img{
          display: flex;
          margin: 0 auto;
          width: 6rem;
          height: 6rem;
          border-radius: 100%;
          margin-top: -1rem;
          border: 2px solid #fff;
        }
        h3,ins,p{
          text-decoration: none;
          text-align: center;
          padding: 0 1.3rem;
        }
        h3{
          margin-top: 1.3rem;
          margin-bottom: .6rem;
          font-weight: 500;
          font-size: 22px;
        }
        ins{
          margin: 0;
          color: #828282;
        }
        p{
          font-size: 15px;
          line-height: 1.4rem;
          margin: 2rem 0 2rem 0;
        }
      }
    }
  }
`


function FifthDiv(){
  return(
    <FifthDivStyle>
      <div className="wrapper">
        <div className="info">
          <h1>Start Learning <br />With the best Platform</h1>
          <h3>Interested in this course?</h3>
          <div>
            <button>Əlavə et</button>
            <button>Sillabusu yüklə</button>
          </div>
        </div>
        <img src={backpack} alt="" />
      </div>
    </FifthDivStyle>
  )
}

const FifthDivStyle = styled.div`
  width: 84%;
  margin: 0 auto;
  margin-bottom: 9.8rem;
  .wrapper{
    display: flex;
    /* align-items: center; */
    justify-content: space-between;
    background-color: #6a5ae0;
    border-radius: 3.5rem;
    .info{
      color: #fff;
      margin-top: 3rem;
      margin-left: 7rem;
      h1{
        font-size: 34px;
        font-weight: 500;
        margin-bottom: 1rem;
      }
      h3{
        color: #e0e0e0;
        font-size: 20px;
        font-weight: 500;
        margin-top: 0;
      }
      div{
        display: flex;
        margin-top: 3.3rem;
        button:nth-child(1){
          background: #ffe01b;
          &:hover{
            background: #ebcb00; 
          } 
        }
        button{
          padding: 1rem 0;
          font-size: 15px;
          min-width: max-content;
          width: 180px;
          margin: 0 auto;
          margin-right: 1.5rem;
          background: #fff;
          border: none;
          border-radius: .5rem;
          font-weight: 500;
          font-family: "Euclid";
          cursor: pointer;
          transition: .1s all;
          &:hover{
            background: #aaa; 
          }
        }
      }
    }
  }
`