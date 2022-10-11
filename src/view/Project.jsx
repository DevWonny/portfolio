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
          <ProjectItem>
            <ProjectImage mobile={true}>
              <img src={autonImage} alt="auton_project" />
            </ProjectImage>
          </ProjectItem>

          {/* movie search project */}
          <ProjectItem>
            <ProjectImage>
              <img src={movieImage} alt="movieSearch_project" />
            </ProjectImage>
          </ProjectItem>
        </ProjectContainer>

        <ProjectContainer>
          {/* covid19 project */}
          <ProjectItem>
            <ProjectImage mobile={true}>
              <img src={covidImage} alt="covid19_project" />
            </ProjectImage>
          </ProjectItem>

          {/* clone coding project */}
          <ProjectItem>
            <ProjectImage>
              <img src={pizzaImage} alt="clone_project" />
            </ProjectImage>
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
  height: 400px;
  margin-bottom: 50px;
  background: red;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ProjectItem = styled.div`
  width: 45%;
  height: 100%;
  background: black;
  color: #fff;
`;

const ProjectImage = styled.div`
  background-color: purple;
  width: ${(props) => (props.mobile ? "200px" : "100%")};
  height: ${(props) => (props.mobile ? "100%" : "50%")};

  & img {
    width: 100%;
    height: 100%;
  }
`;

const ProjectContent = styled.div``;
