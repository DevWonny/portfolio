import React from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";

const Menu = (props) => {
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location.pathname === "/");
  return (
    <MenuWrap isMenu={props.isMenu}>
      <MenuContainer>
        <MenuList
          font={location.pathname === "/"}
          onClick={() => navigate("/")}
        >
          Intro
        </MenuList>
        <MenuList
          font={location.pathname === "/aboutme"}
          onClick={() => navigate("/aboutme")}
        >
          About Me
        </MenuList>
        <MenuList
          font={location.pathname === "/project"}
          onClick={() => navigate("/project")}
        >
          Project
        </MenuList>
        <MenuList
          font={location.pathname === "/contact"}
          onClick={() => navigate("/contact")}
        >
          Contact
        </MenuList>
      </MenuContainer>
    </MenuWrap>
  );
};

export default Menu;

const MenuWrap = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
  background: #3a667f;
  position: fixed;
  z-index: 9;
  top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition-duration: 1s;
  transform: ${(props) =>
    props.isMenu ? "translateY(0)" : "translateY(-120%)"};
`;

const MenuContainer = styled.div`
  width: 100%;
  height: 360px;
  font-size: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const MenuList = styled.p`
  margin: 0;
  color: ${(props) => (props.font ? "#E0A974" : "#E8EAE7")};
`;
