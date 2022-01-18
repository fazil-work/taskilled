import React from "react"
import styled from "styled-components"
import cloudDownload from "../../Assets/SVGs/cloudDownload.svg"

export const ResourcePart = () => {
  return (
    <ResourcePartStyle>
      <h2>Your Workbook(Phase 1)</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate massa, placerat risus faucibus at libero, morbi. Lectus egestas a elit pharetra est, eget. Diam sed risus porttitor quis euismod tristique. A enim sed faucibus massa vel eget et arcu libero.</p>
      <div className="pdfPart">
        <div>
          <div className="pdfName">
            <h3>Workbook 1</h3>
            <ins>Finding-patterns-in-nature.pdf</ins>
          </div>
          <ins>218MB</ins>
        </div>
        <button><img src={cloudDownload} /> <ins>Faylı yüklə</ins></button>
      </div>
      <div className='mark'>
        <button>Mark completed</button>
        <button>Davam et</button>
      </div>
    </ResourcePartStyle>
  )
}

const ResourcePartStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 94%;
  margin-left: auto;
  margin-bottom: 10rem;
  h2{
    font-weight: 500;
    color: #555;
  }
  p{
    color: #888;
    width: 90%;
    font-size: 21px;
    margin-top: 1rem;
    line-height: 1.4;
  }
  .pdfPart{
    border: 2px solid #eee;
    border-radius: 0.3rem;
    display: flex;
    justify-content: space-between;
    padding: 2rem 2rem;
    align-items: center;
    margin: 1.5rem 0;
    ins{
      color: #888;
      text-decoration: none;
      font-weight: 500;
    }
    .pdfName{
      display: flex;
      align-items: center;
      h3{
        font-weight: 400;
        margin-top: 0rem;
        margin-bottom: .8rem;
        font-size: 21px;
        &::after{
          content: "-";
          margin: 0 .5rem;
        }
      }
      ins{
        font-size: 21px;
        margin-top: -.7rem;
        display: flex;
        color: #000;
      }
    }
    button{
      display: flex;
      align-items: center;
      border: none;
      background-color: #b6a5f5;
      border-radius: 0.5rem;
      padding: 1.2rem 1.8rem 1.2rem 1.5rem;
      font-size: 17px;
      cursor: pointer;
      transition: all .1s;
      img{
        padding-right: 1.2rem;
      }
      ins{
        color: #fff;
      }
      &:hover{
        background-color: #9784dd;
      }
    }
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
  @media screen and (max-width:1024px){
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;
    margin-left: auto;
    margin-bottom: 10rem;
    h2{
      font-weight: 500;
      color: #555;
      font-size: 20px;
    }
    p{
      color: #888;
      width: 100%;
      font-size: 16px;
      margin-top: 1rem;
      line-height: 1.4;
    }
    .pdfPart{
      border: 2px solid #eee;
      border-radius: 0.3rem;
      display: flex;
      justify-content: space-between;
      padding: .8rem;
      align-items: center;
      margin: 1.5rem 0 .5rem 0;
        .pdfName{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-right: 1rem;
        h3{
          font-weight: 400;
          margin-top: 0rem;
          margin-bottom: .8rem;
          font-size: 16px;
          &::after{
            content: "";
            margin: 0;
          }
        }
        ins{
          font-size: 16px;
          margin-top: -.7rem;
          display: flex;
          color: #000;
        }
      }
      ins{
        font-size: 12px;
      }
      button{
        display: flex;
        align-items: center;
        border: none;
        background-color: #b6a5f5;
        padding: .8rem 2rem;
        img{
          padding: 0;
        }
        ins{
          display: none;
        }
        &:hover{
          background-color: #9784dd;
        }
      }
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
  }
`