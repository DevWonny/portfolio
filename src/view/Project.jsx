import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import BackCommon from "../components/BackCommon";

import autonImage from "../assets/auton_Intro.jpg";
import movieImage from "../assets/movie_image.PNG";
import covidImage from "../assets/covid19_image.PNG";
import pizzaImage from "../assets/pizza_image.PNG";

const Project = () => {
  const location = useLocation();
  // 각 Project Item 에는 이미지 및 제작 기간등을 입력하고,
  // Item 클릭 시 해당 Github 페이지로 이동되도록 설정

  // auton ios app link = https://apps.apple.com/kr/app/%EA%B3%B5%EC%9E%84%EB%B9%84%EA%B5%90/id1631117693
  return (
    <>
      <BackCommon pathname={location.pathname} />

      <ProjectWrap>
        <ProjectContainer>
          {/* auton project */}
          <ProjectItem mobile={true}>
            <ProjectImage mobile={true}>
              <img src={autonImage} alt="auton_project" />
            </ProjectImage>
            <ProjectContent>
              <p>공임비교 Application</p>
              <p>
                &middot; 유저의 차량 정보를 통해 회원가입하여, 유저 위치에 따라
                차량 정비소의 정보를 조회하고 예약하는 Application
              </p>
              <p>기간 : 2022.05 ~ 2022.08 (약 3개월)</p>
              <p>
                인원 : Back End - 2명 / Front End - 3명(1명 - ReactNative) /
                Publisher - 1명 / Designer - 1명
              </p>
              <p>개발 언어 : JavaScript , React</p>
              <p>
                담당 역할 : 회원가입 및 차량등록, 수정 작업 / validation 작업 /
                예약 페이지 작업 / 마이페이지 작업
              </p>
            </ProjectContent>
          </ProjectItem>

          {/* movie search project */}
          <ProjectItem>
            <ProjectImage>
              <img src={movieImage} alt="movieSearch_project" />
            </ProjectImage>
            <ProjectContent>
              <p>영화 검색 페이지</p>
              <p>공공 API를 활용한 영화 검색 페이지 제작</p>
              <p>기간 : 2022.08.03 ~ 2022.08.16</p>
              <p>개발 언어 : JavaScript , React</p>
            </ProjectContent>
          </ProjectItem>
        </ProjectContainer>

        <ProjectContainer>
          {/* covid19 project */}
          <ProjectItem mobile={true}>
            <ProjectImage mobile={true}>
              <img src={covidImage} alt="covid19_project" />
            </ProjectImage>
            <ProjectContent>
              <p>코로나 조회 Application</p>
              <p>공공 API를 활용한 코로나 정보 조회 페이지 제작</p>
              <p>기간 : 2022.08.17 ~ 2022.08.30</p>
              <p>개발 언어 : JavaScript, React</p>
            </ProjectContent>
          </ProjectItem>

          {/* clone coding project */}
          <ProjectItem>
            <ProjectImage>
              <img src={pizzaImage} alt="clone_project" />
            </ProjectImage>
            <ProjectContent>
              <p>클론코딩 - 피자선생 페이지</p>
              <p>TypeScript와 MSW를 활용한 클론 코딩 작업</p>
              <p>기간 : 2022.09.05 ~ 2022.09.26</p>
              <p>개발 언어 : TypeScript, React</p>
            </ProjectContent>
          </ProjectItem>
        </ProjectContainer>
      </ProjectWrap>
    </>
  );
};

export default Project;

const ProjectWrap = styled.div`
  width: 55%;
  position: absolute;
  top: 250px;
  right: 5%;
  padding-top: 10px;
  border-top: 3px solid #3a667f;
  font-family: GmarketSansMedium;

  &::after {
    content: "";
    width: 100%;
    height: 3px;
    position: absolute;
    bottom: 10px;
    left: 0;
    background-color: #3a667f;
  }
`;

const ProjectContainer = styled.div`
  width: 100%;
  /* height: 400px; */
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ProjectItem = styled.div`
  width: 45%;
  height: 500px;
  position: relative;
  display: flex;
  flex-direction: ${(props) => (props.mobile ? "row" : "column")};
  justify-content: space-between;
  align-items: center;
`;

const ProjectImage = styled.div`
  width: ${(props) => (props.mobile ? "200px" : "100%")};
  height: ${(props) => (props.mobile ? "80%" : "50%")};

  & img {
    width: 100%;
    height: 100%;
  }
`;

const ProjectContent = styled.div`
  width: 65%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #a0bdd0;
`;
