import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import BackCommon from "../components/BackCommon";
import MailImage from "../assets/MailImage.svg";
import PhoneImage from "../assets/PhoneImage.svg";
import GitImage from "../assets/GitHub-Mark-120px-plus.png";
import GitImageLight from "../assets/GitHub-Mark-Light-120px-plus.png";

const Contact = () => {
  // git hub 주소
  // Email
  // Phone number

  const location = useLocation();

  return (
    <>
      <BackCommon pathname={location.pathname} />
      <ContactWrap>
        {/* GitHub */}
        <ContactContainer>
          <ContactLogo>
            <img src={GitImage} alt="gitLogo" />
          </ContactLogo>
          <p>https://github.com/DevWonny</p>
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
          <p>010-9243-9717</p>
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
`;

const ContactContainer = styled.div`
  width: 100%;
  height: 100px;
  border: 2px solid #000;
  box-sizing: border-box;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & p {
    font-size: 20px;
  }
`;

const ContactLogo = styled.div`
  width: 100px;
  height: 100px;

  & img {
    width: 100%;
    height: 100%;
  }
`;
