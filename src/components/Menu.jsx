import React from "react";
import styled from "styled-components";

const Menu = (props) => {
  return (
    <MenuWrap isMenu={props.isMenu}>
      <MenuContainer>
        <p>Intro</p>
        <p>About Me</p>
        <p>Project</p>
        <p>Contact</p>
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
  color: #d9d9d9;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  & p {
    margin: 0;
  }
`;
