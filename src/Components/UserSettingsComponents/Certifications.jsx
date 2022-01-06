import React from "react";
import styled from "styled-components";
import userInfo from "../../Data/user.json";
import FileUploader from "../FileUploader";
import { Close } from "../../Assets/SVGs/icons";
import { ButtonStyle, FormStyle } from "./EditUserInfo";
import { useState } from "react";

export const Certifications = () => {

  const [chosenFile, setChosenFile] = useState("");

  function stringReducer(){
    return chosenFile.name.length > 14 ? chosenFile.name.substring(0,14).concat("...") : chosenFile.name
  }

  return (
    <CertificationStyle>
      <div className="container">
        <h3 >Sertifikatlar</h3>
        <FormStyle>
          <div className="certificationUploader">
            <input type="text" placeholder="Sertifikatın adı" />
            <div className="fileSection">
              <div className="labelAndUploader">
                <p>Sertifikatın şəkli</p>
                <FileUploader chooseFile={setChosenFile}>
                  <p>Fayl Seç</p>
                </FileUploader>
              </div>
              <div className="fileName">
                <ins>{chosenFile ? stringReducer() : "filename.jpg"}</ins>
                <span type="submit" onClick={() => setChosenFile()}>{Close()}</span>
              </div>
            </div>
          </div>
          <ButtonStyle type="submit">Yadda saxla</ButtonStyle>
        </FormStyle>

        <hr />
        <div className="certificationList">
          {userInfo.certifications.map((certification) => {
            let { name, img, link } = certification;
            return (
              <div key={name}>
                <div className="certificationInfo">
                  <div>
                    <img src={img} alt="Certification picture"/>
                  </div>
                  <div>
                    <p>{name}</p>
                    <a href={link}>{link}</a>
                  </div>
                </div>
                <hr />
              </div>
            );
          })}
        </div>
      </div>
    </CertificationStyle>
  );
};

const CertificationStyle = styled.div`
  h2,h3{
    font-size: 1.3rem;
    margin: .5rem 0 1.5rem 0;
    font-weight: 500;
  }
  .container{
    padding: 2rem 2rem 3rem 2rem;
    background-color: #fff;
    border-radius: .5rem;
    /* border: 1px solid #eee; */
    input[type="text"] {
      padding: 1.1rem;
      border: 2px solid #bdbdbd;
      background-color: #fff;
    }
    button{
      margin: 3rem auto;
    }
    .certificationUploader {
      display: grid;
      grid-template-columns: 1fr 1.25fr;
      align-items: center;
      .fileSection{
        display: grid;
        grid-template-columns: 1fr 1fr;
        .labelAndUploader{
          display: block;
          margin-top: -1.8rem;
          p{
            text-align: left;
            min-width: max-content;
            margin: 0;
            margin-bottom: .5rem;
          }
          .fileUploader{
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 2px solid #bdbdbd;
            background-color: #f8f8f8;
            padding: 1rem 0;
            max-width: 200px;
            min-width: max-content;
            border-radius: 0.5rem;
            p{
              padding: 0 1rem;
              margin: 0rem;
            }
          }
        }
        .fileName{
          display: flex;
          margin: 1rem 0;
          justify-content: space-between;
          span{
            cursor: pointer;
          }
        }
      }
    }
    hr {
      width: 100%;
      margin: 1rem 0;
      background: none;
      border: none;
      border-top: 1px solid #ddd;
    }
    .certificationList {
      hr {
        width: 80%;
      }
      .certificationInfo {
        display: flex;
        align-items: center;
        width: 75%;
        font-weight: 500;
        img {
          height: 100px;
          min-width: 200px;
          margin-right: 2rem;
          object-fit: cover;
        }
        a {
          color: #2f80ed;
          text-decoration: none;
        }
      }
    }
  }
  @media screen and (max-width: 800px) {
    .container{
      padding: 2rem 1.5rem;
      button{
        margin: 1rem auto 3rem auto;
      }
      .certificationUploader {
        grid-template-columns: 1fr;
        grid-gap: 2rem;
        margin: 0;
        padding: 0;
        input{
          margin: 0;
          padding-right: 0;
        }
        .fileSection{
          display: block;
          .labelAndUploader{
            p{
              text-align: left;
              margin: 1rem 0;
            }
            .fileUploader{
              cursor: pointer;
              display: flex;
              justify-content: center;
              border: 2px solid #bdbdbd;
              background-color: #f8f8f8;
              padding: 1rem 0;
              max-width: 200px;
              border-radius: 0.5rem;
              min-width: 100%;
              margin: 0 auto;
              p{
                margin: 0rem;
              }
              button{
                width: 100%;
              }
              span{
                margin: 0;
                display: none;
              }
            }
          }
          .fileName{
            display: flex;
            margin: 1rem 0;
            justify-content: space-between;
          }
        }
      }
      .certificationList{
        hr{
          width: 100%;
        }
        .certificationInfo {
          display: flex;
          align-items: center;
          width: 90%;
          font-weight: 500;
          img {
            height: 100px;
            min-width: 200px;
            margin-right: 0rem;
            object-fit: cover;
          }
        }
        .certificationInfo{
          display: block;
        }
      }
    }
  }
`