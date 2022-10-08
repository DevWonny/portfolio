import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import BackCommon from "../components/BackCommon";

const Project = () => {
  const location = useLocation();
  // 각 Project Item 에는 이미지 및 제작 기간등을 입력하고,
  // Item 클릭 시 해당 Github 페이지로 이동되도록 설정
  return (
    <>
      <BackCommon pathname={location.pathname} />
      <ProjectWrap>
        <ProjectContainer>
          <ProjectItem>오토엔 프로젝트</ProjectItem>
          <ProjectItem>모먼트 활용 프로젝트</ProjectItem>
          <ProjectItem>영화 검색 프로젝트</ProjectItem>
        </ProjectContainer>

        <ProjectContainer notThird={true}>
          <ProjectItem>코로나 프로젝트</ProjectItem>
          <ProjectItem>피자선생 클론코딩</ProjectItem>
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
  display: flex;
  justify-content: ${(props) =>
    props.notThird ? "space-around" : "space-between"};
  margin-bottom: 30px;
`;

const ProjectItem = styled.div`
  width: 30%;
  height: 100%;
  background: black;
  color: #fff;
`;
