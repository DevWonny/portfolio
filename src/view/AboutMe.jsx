import React from "react";
import { useLocation } from "react-router-dom";
import styled, { keyframes } from "styled-components";
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
        {/* HTML/CSS - 95, JavaScript- 85 , JQuery-80, React-85, TypeScript -70*/}
        {/* 각 언어의 로고 가져오기 */}
        {/* percent animation 구현 */}

        <StackContainer>
          <AboutTitle>Stack</AboutTitle>
          <StackItemWrap>
            <StackItemContainer>
              <StackItemTitle>HTML / CSS</StackItemTitle>
              <StackItemPercent stack="HTML">
                <StackItemCenterPercent>95%</StackItemCenterPercent>
              </StackItemPercent>
            </StackItemContainer>

            <StackItemContainer>
              <StackItemTitle>JavaScript</StackItemTitle>
              <StackItemPercent stack="JS">
                <StackItemCenterPercent>85%</StackItemCenterPercent>
              </StackItemPercent>
            </StackItemContainer>

            <StackItemContainer>
              <StackItemTitle>React</StackItemTitle>
              <StackItemPercent stack="REACT">
                <StackItemCenterPercent>85%</StackItemCenterPercent>
              </StackItemPercent>
            </StackItemContainer>
          </StackItemWrap>

          <StackItemWrap second={true}>
            <StackItemContainer>
              <StackItemTitle>JQuery</StackItemTitle>
              <StackItemPercent stack="JQUERY">
                <StackItemCenterPercent>80%</StackItemCenterPercent>
              </StackItemPercent>
            </StackItemContainer>

            <StackItemContainer>
              <StackItemTitle>TypeScript</StackItemTitle>
              <StackItemPercent stack="TS">
                <StackItemCenterPercent>75%</StackItemCenterPercent>
              </StackItemPercent>
            </StackItemContainer>
          </StackItemWrap>
        </StackContainer>
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
  position: relative;
  overflow: hidden;
  margin: 10px 0;
  padding-bottom: 70px;
  border-bottom: 3px solid #3a667f;
`;

const StackItemWrap = styled.div`
  width: 100%;
  height: 300px;
  position: relative;
  margin-bottom: 30px;
  top: 70px;
  display: flex;
  justify-content: ${(props) =>
    props.second ? "space-around" : "space-between"};
`;

const StackItemContainer = styled.div`
  width: 30%;
  height: 100%;
  border-top: 1px solid #a0bdd0;
  border-bottom: 1px solid #a0bdd0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StackItemTitle = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: #a0bdd0;
`;

const StackItemPercent = styled.div`
  // 큰 원
  width: 160px;
  height: 160px;
  border-radius: 50%;
  position: relative;
  background: conic-gradient(#3f8bc9 0% 72%, #f2f2f2 72% 100%);
  background: ${(props) =>
    props.stack === "HTML"
      ? "conic-gradient(#FF5722 0% 95%, #fff 95% 100%)"
      : props.stack === "JS"
      ? "conic-gradient(#F0DB4F 0% 85%, #fff 85% 100%)"
      : props.stack === "REACT"
      ? "conic-gradient(#00CCFF 0% 85%, #fff 85% 100%)"
      : props.stack === "JQUERY"
      ? "conic-gradient(#21ACE2 0% 80%, #fff 80% 100%)"
      : "conic-gradient(#3178C6 0% 75%, #fff 75% 100%)"};
`;

const StackItemCenterPercent = styled.div`
  // 중심 작은원
  width: 140px;
  height: 140px;
  background-color: #e8eae7;
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  text-align: center;
  line-height: 140px;
  font-size: 20px;
  transform: translate(-50%, -50%);
`;

const StackItemComents = styled.div``;
