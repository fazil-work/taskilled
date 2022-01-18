import React, { useEffect, useRef, useState } from "react";
import { ArrowChevron } from '../../Assets/SVGs/icons'
import weeksData from "../../Data/weeks";
import materials from "../../Data/materials";
import polygon from "../../Assets/SVGs/polygon.svg";
import book3 from "../../Assets/SVGs/book3.svg";
import note from "../../Assets/SVGs/note.svg";
import resources from "../../Assets/SVGs/resources.svg";
import styled from "styled-components";

export const CourseMaterials = ({ setShowPart, showPart}) => {
  const refToClick = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    refToClick.current.click();
  }, []);

  function showOptions(e) {
    setShow(!show);
    if (show) {
      e.target.parentNode.nextSibling.className = "week dontShow";
      e.target.nextSibling.className = "dropArrow dropOpen";
    } else {
      e.target.parentNode.nextSibling.className = "week";
      e.target.nextSibling.className = "dropArrow";
    }
  }

  return (
    <CourseMaterialsStyle>
      {weeksData.map((week, index) => {
        return (
          <div key={index}>
            <div className="selectDiv">
              <div
                className="touch"
                onClick={(e) => showOptions(e)}
                ref={week.current ? refToClick : null}
              ></div>
              <span className="dropArrow dropOpen">{ArrowChevron(0.8)}</span>
              <h3>
                {week.title.length > 35
                  ? week.title.substring(0, 35).concat("...")
                  : week.title.substring(0, 35)}
              </h3>
            </div>
            <div className="week dontShow">
              {materials.map((material, index) => {
                return (
                  <div
                    onClick={() =>setShowPart(material?.id.toLowerCase())}
                    className={material.id.toLowerCase() === showPart ? "material current" : "material"}
                    key={index}
                  >
                    <span>
                      {material.materialFormat === "Video" ? (
                        <img src={polygon} />
                      ) : material.materialFormat === "Quiz" ? (
                        <img src={note} />
                      ) : material.materialFormat === "Reading" ? (
                        <img src={book3} />
                      ) : (
                        <img src={resources} />
                      )}
                    </span>
                    <ins>{material.materialFormat}</ins>
                    <p>{material.materialName}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </CourseMaterialsStyle>
  );
};

const CourseMaterialsStyle = styled.div`
  max-height: 600px;
  overflow-y: scroll;
  margin-top: -.8rem;
  position: relative;
  cursor: default;
  .dontShow{
    display: none;
  }
  h3{
    margin: 1rem;
    margin-bottom: 1.7rem;
    font-size: 17px;
    font-weight: 500;
    padding: .2rem 0;
  }
  .dropArrow{
    display: flex;
    margin-top: .6rem;
    right: 1.8rem;
    position: absolute;
    transition: .2s all;
    z-index: 0;
  }
  .dropOpen{
    transform: rotate(-90deg);
  }
  .selectDiv{
    position: relative;
    cursor: pointer;
    .touch{
      overflow-x: hidden;
      position: absolute;
      width: 90%;
      border: 1px solid transparent;
      padding: 1rem;
      z-index: 1;
    }
    &:hover{
      *{
        color: #888;
      }
    }
  }
  .week{
    .material:last-child{
      margin-bottom: 2.5rem;
    }
    .material{
      max-width: max-content;
      display: flex;
      align-items: center;
      border-left: 7px solid transparent;
      padding: 0.4rem 2rem 0.4rem 1rem;
      border-radius: .55rem;
      cursor: pointer;
      transition: all .1s;
      span{
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 1rem;
        min-height: 1rem;
        padding: .2rem;
        border-radius: 50%;
        border: 1px solid #555;
      } 
      ins{
        text-decoration: none;
        font-weight: 500;
        margin: 0 .5rem 0 1rem;
        min-width: max-content;
        font-size: 14px;
        &::after{
          content: " :";
        }
      }
      p{
        min-width: max-content;
        font-size: 14px;
        color: #4f4f4f;
      }
    }
    .current{
      background-color: #f2f8ff;
      border-left: 7px solid #2a72cc;
    }
  }
  ::-webkit-scrollbar {
    width: 5px;
    margin-top: 1rem;
  }
  
  ::-webkit-scrollbar-track {
    margin-top: 1rem;
    border-radius: 1rem;
    background: rgba(126, 126, 126, 0);
  }
  
  ::-webkit-scrollbar-thumb {
    border-radius: 1rem;
    background: rgba(126, 126, 126, 0.5);
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(126, 126, 126, 1);
  }
  @media screen and (max-width:1024px){
    display: none;
  }
`