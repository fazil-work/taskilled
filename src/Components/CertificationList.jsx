import styled from "styled-components";
import userInfo from "../Data/user.json";

export const CertificationList = () => {
  return (
    <ListStyle>
      {userInfo.certifications.map((certification) => {
        let { name, img, link } = certification;
        return (
          <div key={name}>
            <div className="certificationInfo">
              <div>
                <img src={img} alt="Certification picture"/>
              </div>
              <div className="certNameAndLink">
                <p>{name}</p>
                <a href={link}>{link}</a>
              </div>
            </div>
            <hr />
          </div>
        );
      })}
    </ListStyle>
  )
}

const ListStyle = styled.div`
  hr{
    margin: 1rem 0 1.5rem 0;
  }
  .certificationInfo {
    display: flex;
    align-items: center;
    width: 95%;
    font-weight: 500;
    img {
      height: 7rem;
      width: 14rem;
      margin-right: 2rem;
      object-fit: cover;
    }
    a {
      color: #2f80ed;
      text-decoration: none;
    }
    .certNameAndLink{
      margin-bottom: 1rem;
    }
  }
`