import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const BackCommon = (pathname) => {
  const navigate = useNavigate();

  return (
    <BackCommonWrap>
      <MenuWrap>
        <MenuContainer>
          <MenuListContainer>
            <MenuList
              font={pathname.pathname === "/" ? true : false}
              onClick={() => {
                navigate("/");
              }}
            >
              Intro
            </MenuList>
            <MenuList
              font={pathname.pathname === "/aboutme" ? true : false}
              onClick={() => {
                navigate("/aboutme");
              }}
            >
              About Me
            </MenuList>
            <MenuList
              font={pathname.pathname === "/project" ? true : false}
              onClick={() => {
                navigate("/project");
              }}
            >
              Project
            </MenuList>
            <MenuList
              font={pathname.pathname === "/contact" ? true : false}
              onClick={() => {
                navigate("/contact");
              }}
            >
              Contact
            </MenuList>
          </MenuListContainer>
        </MenuContainer>
      </MenuWrap>
    </BackCommonWrap>
  );
};

export default BackCommon;

const BackCommonWrap = styled.div`
  width: 100%;
  position: absolute;
  z-index: -1;
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

const MenuWrap = styled.div`
  width: 725px;
  height: 100%;
  overflow: hidden;
  position: fixed;
`;

const MenuContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #3a667f;
  transform: skew(-20deg) translate(-177px);
`;

const MenuListContainer = styled.ul`
  width: 260px;
  height: 440px;
  position: absolute;
  top: 300px;
  left: 180px;
  margin: 0;
  padding: 0;
  transform: skew(20deg) translate(177px);
`;

const MenuList = styled.li`
  position: relative;
  display: inline-block;
  list-style: none;
  font-size: 40px;
  margin-bottom: 68px;
  font-family: GmarketSansMedium;
  color: ${(props) => (props.font ? "#E0A974" : "#E8EAE7")};
  font-weight: ${(props) => (props.font ? "700" : "500")};
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #e0a974;
    transition-duration: 0.5s;
  }

  &:hover {
    &::after {
      width: ${(props) => (props.font ? "0" : "100%")};
    }
  }
`;
