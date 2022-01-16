import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import assignments from "../Assets/SVGs/assignments.svg";

const ConsultantAssignments = () => {
  return (
    <AssignmentsStyle>
      <h2>Tapşırıqlar</h2>
      <div>
        <img src={assignments} alt="assignments" />
        <h3>Tapşırıq əlavə et</h3>
        <div>
          <p>Hələ heç bir tapşırıq dərc etməmisiniz.</p>
          <p>Ilk tapşırığınızı əlavə edin</p>
        </div>
        <Link to="/create-assignment">Tapşırıq əlavə et</Link>
      </div>
    </AssignmentsStyle>
  )
}

export default ConsultantAssignments

const AssignmentsStyle = styled.div`
  h2{
    font-weight: 500;
    margin-top: 0;
  }
  div{
    background-color: #fff;
    width: max-content;
    padding: 2rem 1rem 3.5rem 1rem;
    text-align: center;
    border-radius: .6rem;
    h3{
      color: #7561da;
      font-weight: 500;
      margin-bottom: 0;
      font-size: 20px;
    }
    div{
      margin: 0;
      margin-bottom: .5rem;
      padding: 0.8rem 1rem 2.2rem 1rem;
      p{
        margin: 0;
        color: #888;
      }
    }
    a{
      font-family: "Euclid";
      color: #fff;
      font-size: 14px;
      background-color: #7561da;
      border: none;
      text-decoration: none;
      padding: .8rem 2rem;
      border-radius: .6rem;
      transition: all .1s;
      cursor: pointer;
      &:hover{
        background-color: #8f7cf0;
      }
    }
  }
  @media screen and (max-width:800px){
    display: flex;
    flex-direction: column;
    width: 100%;
    div{
      width: 100%;
      padding: 2rem 0rem 3.5rem 0rem;
      h3{
        margin-top: 1.5rem;
      }
      div{
        width: 90%;
        margin: 0 auto;
        padding: 0.8rem 0rem 2.2rem 0rem;
      }
    }
  }
`