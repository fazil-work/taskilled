import styled from "styled-components";
import userInfo from "../../Data/user.json"
import FileUploader from "../FileUploader";
import { ArrowChevron, Edit } from "../../Assets/SVGs/icons"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  occupation: yup.string().required(),
  email: yup.string().email().required(),
  linkedinURL: yup.string(),
  behanceURL: yup.string(),
  bio: yup.string(),
}).required();

export const EditUserInfo = () => {
  
  const submitForm = (data) => {
    console.log(data);
  }

  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });

  return (
    <EditInfoStyle>
      <h2>Ayarlar</h2>
      <div className="container">
        <div className="user">
          <div className="userImage">
            <img src={userInfo.image} alt="Change user profile picture"/>
            <FileUploader>
              <div className="editPhoto">
                {Edit(.8)}
              </div>
            </FileUploader>
          </div>
          <div className="userInfo">
            <div>
              <h2>{userInfo.fullName}</h2>
              <p>{userInfo.occupation}</p>
            </div>
            <p className="about">{userInfo.about}</p>
          </div>
        </div>

        <FormStyle onSubmit={handleSubmit(submitForm)} method="post">
          <h2>Şəxsi məlumatlarım</h2>
          <div>
            <input name="firstName" {...register("firstName")} placeholder="Ad" defaultValue={userInfo?.name}/>
            <input name="lastName" {...register("lastName")} placeholder="Soyad" defaultValue={userInfo?.surname}/>
          </div>
          <p className="error">{errors.firstName?.message}</p>
          <p className="error">{errors.lastName?.message}</p>
          <div>
            <div class="selectdiv ">
              <label>
                  <select name="occupation" {...register("occupation")}>
                    <option label="" value="">Peşə</option>
                    <option selected label="" value="UX Designer">UX Designer</option>
                  </select>
                  <span>{ArrowChevron(0.9)}</span>
              </label>
            </div>
            <input name="email" {...register("email")} placeholder="E-mail ünvanı" defaultValue={userInfo?.email}/>
          </div>
          <p className="error">{errors.occupation?.message}</p>
          <p className="error">{errors.email?.message}</p>
          <div>
            <input name="linkedinURL" {...register("linkedinURL")} placeholder="Linkedin URL"/>
            <input name="behanceURL" {...register("behanceURL")} placeholder="Behance URL"/>
          </div>
          <h2>Bioqrafiya</h2>
          <div className="bio">
            <textarea name="bio" {...register("bio")} placeholder="Özün haqda məlumat.." defaultValue={userInfo?.about}></textarea>
          </div>
          <ButtonStyle type="submit">Yadda saxla</ButtonStyle>
        </FormStyle>
      </div>
    </EditInfoStyle>
  )
}

const EditInfoStyle = styled.div`
  h2{
   margin-top: 0; 
  }
  h2,h3{
    font-weight: 500;
  }
  img {
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
  }
  .container{
    padding: 2rem;
    margin-bottom: 2rem;
    background-color: #fff;
    border-radius: .5rem;
    h3{
      margin-top: 3rem;
    }
  }
  .selectdiv {
    position: relative;
    display: flex;
    width: 100%;
    label{
      width: 100%;
      span{
        right: 1.6rem;
        top: .8rem;
        height: 34px;
        padding: 15px 0px 0px 8px;
        position: absolute;
        pointer-events: none;
      }
    }
    select{
      width: 100%;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      & ::-ms-expand {
        display: none;
      }
    }
  }
  .user{
    display: flex;
    .userImage{
      display: flex;
      margin-right: 2rem;
      .editPhoto{
        display: flex;
        align-items: center;
        position: absolute;
        background-color: #fff;
        border: none;
        border-radius: 100%;
        padding: 0.5rem;
        margin: 3.8rem -2.2rem;
        box-shadow: 0px 0px 15px 5px #00000033;
        cursor: pointer;
        transition: all .1s;
        &:hover{
          background-color: #eee;
        }
      }
    }
    .userInfo{
      width: 80%;
      div{
        display: flex;
        align-items: center;
        h2{
          margin: 0;
          margin-right: 1.5rem;
          padding: 0;
          font-size: 1.3rem;
          color: #4f4f4f;
        }
        p{
          font-size: 14px;
        }
      }
      .about{
        font-size: 15px;
        color: #828282;
        margin: 0;
        margin-top: .3rem;
      }
    }
  }
  @media screen and (max-width: 800px) {
    h2{
      margin-top: 0;
    }
    .container{
      padding: 2rem 1.5rem;
    }
    .user {
      display: block;
      .userImage{
        display: flex;
        justify-content: center;
        margin: 0 auto;
        margin-bottom: 1.5rem;
        img{
          width: 5rem;
          height: 5rem;
        }
        .editPhoto{
          margin: 2rem -1rem;
        }
      }
      .userInfo{
        width: 100%;
        div{
          display: block;
        }
      }
    }
  }
`

export const FormStyle = styled.form`
  h2{
    font-size: 20px;
    margin: 2.5rem 0 1rem 0;
  }
  div{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2.2rem;
    width: 95%;
    input,select{
      font-family: "Euclid";
      padding: 1.2rem 1.5rem;
      margin: .7rem 0;
      border-radius: 0.4rem;
      border: none;
      background-color: #f2f2f2;
      font-size: 15px;
      color: #777;
      appearance: none;
    }
  }
  .error{
    color: red;
    margin: 0;
  }
  .bio{
    display: flex;
    textarea{
      width: 100%;
    }
  }
  textarea{
    font-family: "Euclid";
    padding: 1rem 1.5rem;
    margin: .7rem 0;
    border-radius: 0.5rem;
    border: none;
    background-color: #f2f2f2;
    width: 90%;
    min-height: 7rem;
  }
  button{
    display: flex;
    margin: 2rem auto 1rem auto;
    padding: 1rem 3rem;
    background-color: #b46c5f;
  }
  @media screen and (max-width: 800px) {
    margin: 0;
    div {
      grid-template-columns: 1fr;
      grid-gap: 0;
      margin: 0;
      width: 100%;
      input,select{
        padding: 1.2rem 0 1.2rem 1rem;
      }
    }
  }
`

export const ButtonStyle = styled.button`
  background: none;
  border: none;
  border-radius: .5rem;
  cursor: pointer;
  transition: .1s all;
  color: #fff;
  &:hover{
    background-color: #915355;
  }
`