import React, { useContext, useEffect, useRef, useState } from "react"
import userInfo from "../Data/user.json"
import logo from "../Assets/SVGs/logo.svg"
import styled from "styled-components"
import { Link, useLocation } from "react-router-dom"
import { ArrowChevron, Notification, Search, User } from "../Assets/SVGs/icons"
import { AppContext } from "../Context/context"

export const Navbar = ({register, width}) => {

  const { setUser } = useContext(AppContext)
  const [ showSearchbar, setShowSearchbar ] = useState(false)
  const [ dropdownOpen, setDropdownOpen ] = useState(false)

  const location = useLocation()

  const dropRef = useRef(null)

  // Closes dropdown if user clicks outside of it
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [dropdownOpen])
  
  // Closes dropdown if the route changes
  useEffect(() => {
    setDropdownOpen(false)
  },[location.pathname])

  // Logs the current user out
  function logout(){
    localStorage.setItem("taskolluser", false)
    setUser(false)
  }

  return (
    <NavbarStyle dropdownOpen={dropdownOpen}>
      <div className="wrapper" style={{width: width ? width + "%" : "84%"}}>
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
            <Link to="/login">Daxil ol</Link>
            <Link to="/register">Qeydiyyat</Link>
            <div className="mobile">
              <span onClick={() => setShowSearchbar(!showSearchbar)}>{Search(.9)}</span>
              <span>{User()}</span>
            </div>
          </div>
          :
          <div className="first">
            <div className="icons">
              <button onClick={() => setShowSearchbar(!showSearchbar)} alt="Search">{Search(.95, "#333")}</button>
              <Link to="/notifications">{Notification(1, "#555")}</Link>
            </div>
            <span></span>
            <div className="dropdownWrapper" ref={dropRef}>
              <div className="dropdown">
                <Link to="/consultant" >
                  <img src={userInfo.image} alt="User profile picture" />
                  <p>{userInfo.fullName}</p>
                </Link>
                <ins onClick={() => setDropdownOpen(!dropdownOpen)}>{ArrowChevron(1)}</ins>
              </div>
              <div>
                {
                  dropdownOpen &&
                  <div className="insideDropdown">
                    <Link to="/consultant">Profil</Link>
                    <Link to="/home">Kurslarım</Link>
                    <Link to="/assignments">Tapşırıqlar</Link>
                    <Link to="/settings">Ayarlar</Link>
                    <button onClick={logout}>Log out</button>
                  </div>
                }
              </div>
            </div>
          </div>
        }
      </div>
      {
        showSearchbar &&
        <div className="searchWrapper">
          <div className="searchBarMobile">
            <span>{Search(.8, "#2e3a59")}</span>
            <input type="text" placeholder="Axtarış..."/>
          </div>
        </div>
      }
    </NavbarStyle>
  );
};

const NavbarStyle = styled.div`
  background-color: #fff;
  .wrapper{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.25rem 0;
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
        transition: all .1s;
        &:hover{
          background-color: #e9ca00;
        }
      }
      .mobile{
        display: none;
      }
    }
    .first {
      display: flex;
      align-items: center;
      /* position: relative; */
      a{
        text-decoration: none;
        color: #000;
      }
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
      .dropdownWrapper{
        position: relative;
        user-select: none;
        transition: all 1s;
        div{
          z-index: 5;
          width: 100%;
          .insideDropdown{
            position: absolute;
            background-color: #fff;
            width: 100%;
            border-radius: 0 0 .75rem .75rem;
            padding: .25rem 0;
            border: 1px solid #aaa;
            border-top: 0;
            button:nth-child(1){
              display: block;
            }
            button{
              width: 90%;

            }
            button,a{
              font-size: 16px;
              display: flex;
              flex-direction: column;
              align-items: center;
              /* width: 70%; */
              border-radius: 0.4rem;
              padding: .5rem 1rem;
              margin: .5rem .75rem;
              background-color: #e8e8e8;
              &:hover{
                background-color: #ffe01b;
              }
            }
          }
        }
        .dropdown{
          display: flex;
          align-items: center;
          border: 1px solid transparent;
          border-bottom: none;
          border: ${props => props.dropdownOpen && "1px solid #aaa"};
          border-bottom: ${props => props.dropdownOpen && "none"};
          border-radius: .75rem .75rem 0 0;
          a{
            border-radius: .75rem;
            transition: all .2s;
            margin: 0;
            padding: 0 .75rem;
            display: flex;
            align-items: center;
            img {
              width: 2.5rem;
              height: 2.5rem;
              border-radius: 100%;
              margin-right: .75rem;
            }
            p{
              min-width: max-content;
            }
            &:hover{
              background-color: ${props => !props.dropdownOpen && "#edf1f7"};
            }
          }
          ins{
            transition: all .2s;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 0.75rem;
            width: 2.5rem;
            height: 3.2rem;
            min-height: max-content;
            cursor: pointer;
            &:hover{
              background-color: ${props => !props.dropdownOpen && "#edf1f7"};
            }
          }
        }
      }
      span{
        border-left: 1px solid #ccc;
        height: 2rem;
        margin: 0 .8rem 0 .8rem;
      }
    }
    .searchBar{
      display: flex;
      align-items: center;
      background-color: #edf1f7;
      padding: .5rem 0rem;
      border-radius: 0.6rem;
      margin: .1rem 0;
      margin-left: 10%;
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
  .searchWrapper{
    display: none;
  }
  @media screen and (max-width: 1024px) {
    .searchWrapper{
      display: block;
      background-color: #fff;
      border-bottom: 1px solid transparent;
      .searchBarMobile{
        display: flex;
        align-items: center;
        background-color: #f2f2f2;
        padding: .5rem 0;
        border-radius: 0.4rem;
        width: 90%;
        margin: 0rem auto;
        margin-bottom: .5rem;
        span{
          padding: 0 .8rem;
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
    .wrapper{
      padding: .8rem 1rem;
      margin-top: .2rem;
      width: 90%;
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
        .dropdownWrapper{
          div{
            .insideDropdown{
              display: none;
            }
          }
          .dropdown{
            a{
              img {
                margin: 0;
              }
              p{
                display: none;
              }
            }
            ins{
              display: none;
            }
          }
        }
        div{
          button:nth-child(1){
            display: inline;
          }
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
  @media screen and (max-width: 768px) {
    .wrapper{
      padding: .8rem 1rem;
      .logo{
        max-height: 1.8rem;
      }
      .first{
        div{
          margin: 0;
          button{
            padding: 0.25rem;
            margin: 0.25rem;
          }
        }
        span{
          display: none;
        }
        .icons{
          margin-right: 0;
        }
      }
      .searchBar{
        display: none;
      }
    }
  }
`;
