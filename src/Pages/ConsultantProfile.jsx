import React from "react";
import styled from "styled-components";
import userInfo from "../Data/user.json";
import { CertificationList } from "../Components/CertificationList";
import { ArrowChevron, Facebook, Instagram, Star, Twitter } from "../Assets/SVGs/icons";

const ConsultantProfile = () => {
  return (
    <ProfileStyle>
      <div className="wrapper">
        <p className="currentLocation">Home {ArrowChevron(.5)} Design {ArrowChevron(.5)} {userInfo.occupation} {ArrowChevron(.5)} <ins>{userInfo.fullName}</ins></p>
        <div className="userInfo">
          <img src={userInfo.image} alt="" />
          <div>
            <h1>{userInfo.fullName}</h1>
            <div className="occuPoints">
              <h3>{userInfo.occupation}</h3>
              <span></span>
              <h3 className="points">{Star(1, "#f2c94c")} {userInfo.rating}</h3>
            </div>
          </div>
        </div>
        <div className="about">
          <div className="bioAndCerts">
            <div className="bio">
              <h2>Biography</h2>
              <p>{userInfo.aboutExtended}</p>
            </div>
            <hr />
            <h2>Certifications</h2>
            <CertificationList/>
          </div>
          <div className="links">
            <a href="">{Facebook()} <ins>Facebook</ins></a>
            <a href="">{Instagram()} <ins>Instagram</ins></a>
            <a href="">{Twitter()} <ins>Twitter</ins></a>
          </div>
        </div>
      </div>
    </ProfileStyle>
  )
}

export default ConsultantProfile

const ProfileStyle = styled.div`
  background-color: #fff;
  margin: 0 auto;
  border: 1px solid transparent;
  .wrapper{
    width: 84%;
    margin: 0 auto;
    padding: 0.5rem auto 5rem auto;
    .currentLocation{
      color: #888;
      svg{
        margin: .3rem;
        margin-bottom: .1rem;
        transform: rotate(-90deg);
      }
      ins{
        text-decoration: none;
        color: #000;
        font-weight: 500;
      }
    }
    .userInfo{
      display: flex;
      justify-content: center;
      margin: 3rem 0 5rem 0;
      img{
        width: 7rem;
        height: 7rem;
        border-radius: 100%;
        margin-right: 2rem;
      }
      h1{
        margin-bottom: 0;
        font-weight: 500;
      }
      .occuPoints{
        display: flex;
        align-items: center;
        h3{
          font-weight: 500;
          margin: 0.5rem 0;
        }
        span{
          border-left: 1px solid #ccc;
          height: 1.6rem;
          margin: .2rem 0 0 1rem;
        }
        .points{
          margin-left: 1rem;
          display: flex;
          align-items: center;
          svg{
            margin-right: .5rem;
          }
        }
      }
    }
    .about{
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 2rem;
      img{

        object-fit: cover;
      }
      hr{
        margin: 2rem 0;
        border: none;
          border-bottom: 2px solid #eee;
      }
      .bioAndCerts{
        h2{
          font-weight: 500;
        }

        .bio{
          p{
            width: 90%;
          }
        }
      }
      .links{
        display: flex;
        justify-content: space-around;
        margin-top: 2rem;
        a{
          display: flex;
          border: 1px solid #ddd;
          height: max-content;
          padding: 1rem 1.5rem;
          border-radius: 0.5rem;
          align-items: center;
          text-decoration: none;
          color: #000;
          font-weight: 500;
          ins{
            margin-left: 1rem;
            text-decoration: none;
          }
        }
      }
    }
  }
  @media screen and (max-width: 1200px){
    .wrapper{
      .about{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 2rem;
        .links{
          display: block;
          margin-top: 1rem;
          a{
            font-size: 14px;
            padding: .75rem 1rem;
            margin: .5rem;
          }
        }
      }
    }
  }
  @media screen and (max-width: 800px){
    .wrapper{
      padding: 0.5rem 1rem 0rem 1rem;
      .currentLocation{
        text-align: center;
      }
      .userInfo{
        flex-direction: column;
        margin: 3rem auto;
        h1{
          width: max-content;
        }
        img{
          margin: 0rem auto;
        }
        div{
          margin: 0 auto;
        }
        .occuPoints{
          display: flex;
          width: max-content;
          justify-content: center;
          text-align: center;
        }
        margin: 3rem 0 2rem 0;
      }
      .about{
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 1rem;
        img{
    
          object-fit: cover;
        }
        hr{
          margin: 2rem 0;
          border: none;
            border-bottom: 2px solid #eee;
        }
        .bioAndCerts{
          order: 2;
          h2{
            font-weight: 500;
          }
    
          .bio{
            p{
              width: 90%;
            }
          }
        }
        .certificationInfo{
          display: block;
        }
        .links{
          display: flex;
          flex-direction: row;
          justify-content: center;
          flex-wrap: wrap;
          margin: 0 auto;
          a{
            font-size: 14px;
            padding: 0.5rem .75rem;
            margin: .5rem;
          }
        }
      }
    }
  }
`