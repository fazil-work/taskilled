import React from "react";
import userInfo from "../Data/user.json";
import logo from "../Assets/SVGs/logo.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Notification, Search, User } from "../Assets/SVGs/icons";

export const Navbar = ({register, searchbar}) => {
  return (
    <NavbarStyle >
      <div className="wrapper">
        <Link to="/">
          <img className="logo" src={logo} alt="Logo" />
        </Link>
        <div className="searchBar">
          <span>{Search(.8, "#2e3a59")}</span>
          <input type="text" placeholder="Axtarış..."/>
        </div>
        {
          register ?
          <div className="register">
            <a href="">Daxil ol</a>
            <a href="">Qeydiyyat</a>
            <div className="mobile">
              <span>{Search(.9)}</span>
              <span>{User()}</span>
            </div>
          </div>
          :
          <div className="first">
            <div>
              <button alt="Search">{Search(.9, "#333")}</button>
              <Link to="/notifications">{Notification(1, "#555")}</Link>
              {/* <button alt="Notification">{Notification(1, "#555")}</button> */}
            </div>
            <span></span>
            <Link to="/consultant"><img src={userInfo.image} alt="User profile picture" /></Link>
          </div>
        }
      </div>
    </NavbarStyle>
  );
};

const NavbarStyle = styled.div`
  background-color: #fff;
  .wrapper{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;
    margin: 0 auto;
    width: 84%;
    .logo{
      transform: scale(1.05);
    }
    .register{
      a{
        text-decoration: none;
        color: #000;
        margin-left: 2rem;
        font-weight: 400;
      }
      a:nth-child(2){
        background-color: #ffe01b;
        padding: .7rem 1.4rem;
        border-radius: 0.5rem;
      }
      .mobile{
        display: none;
      }
    }
    .first {
      display: flex;
      align-items: center;
      div {
        button:nth-child(1){
          display: none;
        }
        a,button {
          cursor: pointer;
          background: none;
          border: none;
          transition: all 0.1s;
          margin: 0 .5rem;
        }
      }
      span{
        border-left: 1px solid #ccc;
        height: 2rem;
        margin: 0 1.6rem 0 .8rem;
      }
      img {
        width: 3rem;
        height: 3rem;
        border-radius: 100%;
      }
    }
    .searchBar{
      display: flex;
      align-items: center;
      background-color: #edf1f7;
      padding: .5rem 0rem;
      border-radius: 0.6rem;
      margin: .6rem 0;
      span{
        padding: .3rem 1.5rem 0.1rem 1.2rem;
      }
      input{
        font-family: "Euclid";
        background: none;
        border: none;
        outline: none;
        font-size: 15px;
        width: 22rem;
        ::placeholder{
          color: #8f9bb3;
          opacity: 1;
        }
        :-ms-input-placeholder{
          color: #8f9bb3;
        }
        ::-ms-input-placeholder{
          color: #8f9bb3;
        }
      }
    }
  }
  @media screen and (max-width: 1024px) {
    .wrapper{
      padding: .8rem 1rem;
      .logo{
        max-height: 1.8rem;
      }
      .register{
        a{
          text-decoration: none;
          color: #000;
          margin-left: 1rem;
          font-weight: 400;
        }
        a{
          display: none;
        }
        .mobile{
          display: block;
          span{
            margin-left: 1.5rem;
          }
        }
      }
      .first{
        div{
          margin: 0 .8rem;
          button:nth-child(1){
            /* display: inline; */
          }
          button{
            padding: 0.25rem;
            margin: 0.25rem;
          }
        }
        img{
          width: 2.5rem;
          height: 2.5rem;
        }
        span{
          display: none;
        }
      }
      .searchBar{
        /* display: none; */
      }
    }
  }
  @media screen and (max-width: 768px) {
    .wrapper{
      padding: .8rem 1rem;
      .logo{
        max-height: 1.8rem;
      }
      .first{
        div{
          margin: 0 .8rem;
          button:nth-child(1){
            display: inline;
          }
          button{
            padding: 0.25rem;
            margin: 0.25rem;
          }
        }
        img{
          width: 2.5rem;
          height: 2.5rem;
        }
        span{
          display: none;
        }
      }
      .searchBar{
        display: none;
      }
    }
  }
`;
