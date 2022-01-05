import { Link } from "react-router-dom"
import { Arrow } from "../Assets/SVGs/icons"
import styled from "styled-components"
import intro from "../Assets/SVGs/xx.svg"
import achievement from "../Assets/SVGs/achievement.svg"
import book2 from "../Assets/SVGs/book2.svg"
import puzzle from "../Assets/SVGs/puzzle.svg"
import robots from "../Assets/SVGs/robots.svg"
import figures3 from "../Assets/SVGs/figures3.svg"

export const Home = () => {
  return (
    <HomeStyle>
      <div className="first">
        <div className="bg">
          <img src={intro} alt="" />
        </div>
        <div className="intro">
          <div className="move">
            <h1>Biliyi praktika edərək öyrən</h1>
            <p>Build skills with courses. Learning is a lasting investment. Get started on your goals today. Continue using the buttons below</p>
            <div className="links">
              <Link to="/">
                <div>
                  <img src={book2} alt="" />
                  <p>Təlim programı</p>
                </div>
              </Link>
              <Link to="/">
                <div>
                  <img src={achievement} alt="" />
                  <p>Təlim programı</p>
                </div>
              </Link>
              <Link to="/">
                <div className="steam">
                  <img src={puzzle} alt="" />
                  <p>STEAM labarotoriya</p>
                </div>
                <span>{Arrow(.8, "#7561da")}</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="empty"></div>
      </div>
      <div className="second">
        <div className="bg">
          <div className="bgx">
            <img src={robots} alt="" />
          </div>
          <div className="bgx">
            <img src={figures3} alt="" />
          </div>
        </div>
      </div>
      <div className="third"></div>
      <div className="forth"></div>
      <div className="newsletter"></div>
    </HomeStyle>
  )
}

const HomeStyle = styled.div`
  background-color: #fff;
  .first{
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 0;
    margin: 0 auto;
    width: 80%;
    height: auto;
    margin-bottom: 10rem;
    .intro{
      width: 55%;
      margin: 0 auto;
      margin-top: 6rem;
      .move{
        .links{
          margin-top: 3rem;
        }
        a{
          display: flex;
          align-items: center;
          background-color: #fff;
          margin: 1rem 0;
          max-width: 400px;
          border-radius: 0.5rem;
          padding: .7rem .7rem;
          text-decoration: none;
          color: #000;
          font-weight: 500;
          justify-content: space-between;
          div{
            display: flex;
            align-items: center;
          }
          span{
            margin: 0 1rem;
            margin-top: .2rem;
          }
          p{
            margin: 0 1.5rem;
          }
        }
      }
    }
    .bg{
      position: absolute;
      max-width: 80%;
      top: 15%;
      z-index: 0;
      transform: scale(1.05);
      img{
        max-width: 100%;
        height: auto;
      }
    }
  }
  .second{
    width: 80%;
    height: auto;
    margin: 0 auto;
    .bg{
      display: grid;
      grid-template-columns: 1fr 1fr;
      .bgx{
        img{
          max-width: 100%;
          height: auto;
        }
      }
    }
  }
`