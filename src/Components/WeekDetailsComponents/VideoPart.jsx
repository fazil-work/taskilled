import React from 'react'
import messages from '../../Assets/SVGs/messages.svg'
import videoPlayer from '../../Assets/Images/VideoPlayer.png'
import styled from 'styled-components'

export const VideoPart = () => {
  return (
    <VideoPartStyle>
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
    </VideoPartStyle>
  )
}

const VideoPartStyle = styled.div`
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
  @media screen and (max-width:1024px){
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
`