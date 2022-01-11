import React from "react"
import styled from "styled-components"
import courses from "../Data/courses.json"
import { Card } from "../Components/Card"
import { Filter } from "../Assets/SVGs/icons"


export const Home = () => {
  return (
    <HomeStyle>
      <div className="pick">
        <div className="wrapperCategories">
          <div className="categories">
            <button>Hamısı</button>
            <button>Proqramlaşdırma</button>
            <button>İngilis dili</button>
            <button>Oxu və yazı</button>
            <button>Daha çox</button>
          </div>
        </div>
        <div className="wrapperFilter">
          <div className="filter">
            <button><ins>{Filter(.8, "#4f4f4f")}</ins> <ins>Filter</ins></button>
          </div>
        </div>
      </div>
      <div className="wrapperCourses">
        <div className="courses">
          {
            Object.keys(courses).map((i) => {
              return(
                <Card key={courses[i].id} course={courses[i]}/>
              )
            })
          }
        </div>
        <button className="more">Daha çox</button>
      </div>
    </HomeStyle>
  )
}

const HomeStyle = styled.div`
  button{
    background: none;
    border: none;
    padding: .3rem .3rem;
    border-radius: 0.5rem;
    font-family: "Euclid";
    cursor: pointer;
    transition: all .1s;
    &:hover{
      background-color: #ddd;
    }
  }
  .wrapperCourses{
    background-color: #f8f8f8;
    margin: 1rem 0;
    .courses{
      width: 84%;
      margin: 0rem auto;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
    .more{
      display: flex;
      margin: 3rem auto;
      padding: 1rem 3rem;
      font-weight: 500;
      background-color: #ffe01b;
      &:hover{
        background-color: #f8d700;
      }
    }
  }
  .pick{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 8rem;
    padding-top: 2rem;
    background-color: #fff;
    border-top: 1px solid #f5f5f5;
    *{
      font-size: 17px;
    }
    .categories{
      button{
        padding: .6rem .9rem;
        margin-right: 2rem;
        color: #4f4f4f;
      }
      button:nth-child(1){
        background-color: #f3f3f3;
      }
    }
    .filter{
      button{
        display: flex;
        align-items: center;
        border: 1px solid #eee;
        color: #4f4f4f;
        ins{
          margin: 0 .35rem;
          text-decoration: none;
        }
        ins:nth-child(1){
          margin-top: .1rem;
        }
      }
    }
  }
  @media screen and (max-width:1024px){
    button{
      background: none;
      border: none;
      padding: .5rem;
      border-radius: 0.5rem;
      font-family: "Euclid";
      cursor: pointer;
      transition: all .1s;
      &:hover{
        background-color: #ddd;
      }
    }
    .wrapperCourses{
      background-color: #f8f8f8;
      .courses{
        width: 84%;
        margin: 0rem auto;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
      }
      .more{
        display: flex;
        margin: 3rem auto;
        padding: 1rem 3rem;
        font-weight: 500;
        background-color: #ffe01b;
        &:hover{
          background-color: #f8d700;
        }
      }
    }
    .pick{
      display: block;
      justify-content: space-between;
      align-items: center;
      padding: 0rem;
      background: none;
      border: none;
      *{
        font-size: 17px;
      }
      /* width: 100%; */
      .wrapperCategories{
        width: 100%;
        background: #fff;
        .categories{
          display: flex;
          width: 92%;
          margin: 0 0 0 auto;
          /* max-width: 350px; */
          overflow: scroll;
          padding: .5rem 0 .8rem 0;
          ::-webkit-scrollbar {
            display: none;
          }
          -ms-overflow-style: none;
          scrollbar-width: none;
          button{
            padding: .5rem .8rem;
            margin-right: .8rem;
            min-width: max-content;
            color: #4f4f4f;
          }
          button:nth-child(1){
            background-color: #f3f3f3;
          }
        }
      }
      .wrapperFilter{
        width: 92%;
        margin: 0 0 0 auto;
        .filter{
          margin: .8rem 0;
          /* background-color: #f8f8f8; */
          button{
            display: flex;
            align-items: center;
            border: none;
            color: #4f4f4f;
            background-color: #fff;
            ins{
              margin: 0 .35rem;
              text-decoration: none;
            }
            ins:nth-child(1){
              margin-top: .1rem;
            }
          }
        }
      }
    }
  }
`