import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import BackCommon from "../components/BackCommon";
import AboutPicture from "../assets/AboutPicture.svg";

const AboutMe = () => {
  // 경력
  // 기술 스택
  const location = useLocation();
  return (
    <>
      <BackCommon pathname={location.pathname} />
      <AboutWarp>
        {/* profile section */}
        <AboutContainer>
          <AboutTitle>Profile</AboutTitle>
          <AboutPictureContainer>
            <img src={AboutPicture} alt="picture" />
          </AboutPictureContainer>

          <AboutProfileContainer>
            {/* 이름, 생년월일, 학교, 학원, 자격증 */}
            <AboutProfileText>
              <b>Name :</b>
              <p>윤철원</p>
            </AboutProfileText>
            <AboutProfileText>
              <b>Birth :</b> <p>1994.02.16</p>
            </AboutProfileText>
            <AboutProfileText>
              <b>Aducation :</b>
              <p>
                부산고등학교 졸업 / 동명대학교 전자 &#183; 의용공학부 졸업
                <br />
                SBS아카데미 컴퓨터아트학원 스마트기기UXUI디자인양성과정 교육
                이수
                <br />
                코리아 IT 아카데미 프론트엔드 개발자 과정 이수
              </p>
            </AboutProfileText>
            <AboutProfileText>
              <b>Certificate :</b>
              <p>
                정보처리기사 <br />
                웹디자인기능사
              </p>
            </AboutProfileText>
          </AboutProfileContainer>
        </AboutContainer>

        {/* Career */}
        <CareerContainer>
          <AboutTitle>Career</AboutTitle>
          <CareerText>
            <p>
              프래프 프론트엔드 개발팀 근무
              <br />
              <span>2022.02 ~ 2022.08(7개월)</span>
            </p>
          </CareerText>
        </CareerContainer>

        {/* Stack */}
        <StackContainer></StackContainer>
      </AboutWarp>
    </>
  );
};

export default AboutMe;

const AboutWarp = styled.div`
  width: 55%;
  position: absolute;
  top: 250px;
  right: 5%;
  border-top: 3px solid #3a667f;
  padding-top: 10px;
  font-family: GmarketSansMedium;
`;
const AboutTitle = styled.span`
  position: absolute;
  left: 0;
  font-size: 40px;
  font-weight: 700;
  color: #a0bdd0;
`;

const AboutContainer = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
  display: flex;
  justify-content: space-between;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #a0bdd0;
  }
`;

const AboutPictureContainer = styled.div`
  width: 300px;
  height: 100%;
  & img {
    width: 100%;
    height: 100%;
  }
`;

const AboutProfileContainer = styled.div`
  width: 700px;
  height: 100%;
`;
const AboutProfileText = styled.div`
  width: 100%;
  font-size: 20px;
  color: #a0bdd0;
  margin-bottom: 23px;
  display: flex;
  align-items: top;
  position: relative;
  top: 75px;

  & p {
    font-size: 16px;
    margin: 0;
    padding-top: 3px;
    padding-left: 15px;
  }
`;

const CareerContainer = styled.div`
  width: 100%;
  height: 90px;
  position: relative;
  margin-top: 10px;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #a0bdd0;
  }
`;

const CareerText = styled.div`
  width: 700px;
  height: 80px;
  color: #a0bdd0;
  position: absolute;
  right: 0;
  & span {
    margin-left: 35px;
    font-size: 14px;
  }
`;

const StackContainer = styled.div`
  width: 100%;
  height: 900px;
`;
