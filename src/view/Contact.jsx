import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import BackCommon from "../components/BackCommon";
import MailImage from "../assets/MailImage.svg";
import PhoneImage from "../assets/PhoneImage.svg";
import GitImage from "../assets/GitLogo.svg";

import Header from "../components/Header";

const Contact = () => {
  // git hub 주소
  // Email
  // Phone number

  const location = useLocation();

  // git page 새창 열기
  const gitPage = () => {
    window.open("https://github.com/DevWonny", "_blank");
  };

  return (
    <>
      <BackCommon pathname={location.pathname} />
      <Header />
      <ContactWrap>
        {/* GitHub */}
        <ContactContainer>
          <ContactLogo>
            <img src={GitImage} alt="gitLogo" onClick={gitPage} />
          </ContactLogo>
          <p onClick={gitPage}>https://github.com/DevWonny</p>
        </ContactContainer>

        {/* Email */}
        <ContactContainer>
          <ContactLogo>
            <img src={MailImage} alt="mailImage" />
          </ContactLogo>
          <p>cjfdnjs1994@naver.com</p>
        </ContactContainer>

        {/* Phone */}
        <ContactContainer>
          <ContactLogo>
            <img src={PhoneImage} alt="phoneImage" />
          </ContactLogo>
          <p>010 - 9243 - 9717</p>
        </ContactContainer>
      </ContactWrap>
    </>
  );
};

export default Contact;

const ContactWrap = styled.div`
  width: 55%;
  position: absolute;
  top: 250px;
  right: 5%;
  font-family: GmarketSansMedium;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1200px) {
    width: 100%;
    right: 0;
  }
`;

const ContactContainer = styled.div`
  width: 50%;
  height: 100px;
  margin-bottom: 30px;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #3a667f;
  & p {
    color: #a0bdd0;
    font-size: 20px;
    font-weight: 700;
  }

  @media screen and (max-width: 1200px) {
    width: 90%;

    & p {
      font-size: 14px;
    }
  }
`;

const ContactLogo = styled.div`
  width: 100px;
  height: 100px;

  & img {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 1200px) {
    width: 60px;
    height: 60px;
  }
`;
