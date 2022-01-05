import { Link } from "react-router-dom"
import styled from "styled-components"
import { Arrow } from "../Assets/SVGs/icons"
import NotificationBig from "../Assets/SVGs/notificationBig.svg"

export const Notifications = () => {
  return (
    <NotiStyle>
      <Link to="/courses">
        <span>{Arrow(.9)}</span>
        <p>Kurslara geri dön</p>
      </Link>
      <div>
        <img src={NotificationBig} alt="" />
        <h2>Hələ heç bir ismarıcınız yoxdur</h2>
      </div>
    </NotiStyle>
  )
}

const NotiStyle = styled.div`
  background-color: #fff;
  border-top: 2px solid #eee;
  a{
    display: flex;
    margin: 1rem 7.5rem;
    align-items: center;
    text-decoration: none;
    color: #000;
    p{
      margin: 0 1rem;
      text-decoration: none;
      color: #000;
      font-weight: 500;
    }
    span{
      transform: rotate(180deg);
    }
  }
  div{
    padding-top: 5rem;
    text-align: center;
    width: 100%;
    h2{
      margin: 1rem;
    }
    img{
      width: 20%;
    }
  }
  h2{
    font-weight: 500;
    color: #aaa;
  }
  @media screen and (max-width:800px){
    a{
      display: flex;
      margin: 1rem 1.5rem;
      align-items: center;
      text-decoration: none;
      color: #000;
      p{
        margin: 0 1rem;
        text-decoration: none;
        color: #000;
        font-weight: 500;
      }
      span{
        transform: rotate(180deg);
      }
    }
    div{
    img{
      width: 50%;
    }
  }
  }
`