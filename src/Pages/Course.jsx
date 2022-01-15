import React from 'react'
import styled from 'styled-components'
import userInfo from '../Data/user.json'
import { ArrowChevron, Bars, Calendar2, Clock, Language } from '../Assets/SVGs/icons'
import { CountStars } from '../Components/CountStars'
import play from "../Assets/SVGs/Play.svg"
import Thumbnail from "../Assets/Images/Thumbnail.png"

export const Course = () => {
  return (
    <CourseStyle>
      <div className="wrapper">
        <p className="currentLocation">Home {ArrowChevron(.5)} Design {ArrowChevron(.5)} UX/UI design {ArrowChevron(.5)} <ins>Grow your creative business in design field</ins></p>
        <div className='first'>
          <div className='leftside'>
            <h1>Management Skills: New Manager Training in Essential Skills</h1>
            <div className="userInfo">
              <img src={userInfo.image} alt="" />
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
                  <span>{Calendar2(.9)}</span>
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
              <hr />
              <div className="submit">

              </div>
            </div>
          </div>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </CourseStyle>
  )
}

const CourseStyle = styled.div`
  background-color: #fff;
  margin: 0 auto;
  border: 1px solid #eee;
  .wrapper{
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
    .first{
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 1.8rem;
      margin-top: 2.5rem;
      .leftside{
        h1{
          font-size: 36px;
          font-weight: 500;
        }
        .userInfo{
          display: flex;
          align-items: center;
          margin: 1rem 0 1rem 0;
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
            font-size: 18px;
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
          margin-top: 1rem;
          .info{
            justify-content: space-between;
            div{
              display: flex;
              align-items: center;
              margin: 1.3rem 0;
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
          hr{
            width: 160%;
            border: none;
            margin: 1.5rem 0;
            margin-left: -1rem;
            border-bottom: 1px solid #eee;
          }
          .submit{
            
          }
        }
      }
    }
  }
`