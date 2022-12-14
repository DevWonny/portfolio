import React, { useState } from "react";
import styled from "styled-components";

import Menu from "./Menu";

const Header = () => {
  // menu state
  const [isMenu, setIsMenu] = useState(false);

  return (
    <>
      <HeaderWrap>
        <Hamburger
          onClick={() => {
            setIsMenu(!isMenu);
          }}
        >
          <HamburgerTop isMenu={isMenu} />
          <HamburgerMiddle isMenu={isMenu} />
          <HamburgerBottom isMenu={isMenu} />
        </Hamburger>
      </HeaderWrap>

      <Menu isMenu={isMenu} />
    </>
  );
};

export default Header;

const HeaderWrap = styled.div`
  width: 100%;
  height: 100px;
  background-color: #3a667f;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  z-index: 10;
  align-items: center;
  @media screen and (min-width: 1201px) {
    display: none;
  }
`;

const Hamburger = styled.div`
  width: 30px;
  height: 30px;
  margin-left: 30px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HamburgerTop = styled.span`
  position: absolute;
  width: 30px;
  height: 4px;
  background: #d9d9d9;
  border-radius: 3px;
  transition: transform 0.2s, opacity 0.3s;
  transform: ${(props) =>
    props.isMenu ? "rotate(45deg)" : "translateY(-7px)"};
`;

const HamburgerMiddle = styled.span`
  position: absolute;
  width: 30px;
  height: 4px;
  background-color: #d9d9d9;
  border-radius: 3px;
  transition: transform 0.2s, opacity 0.3s;
  transform: ${(props) => props.isMenu && "translateX(16px)"};
  opacity: ${(props) => props.isMenu && "0"};
`;

const HamburgerBottom = styled.span`
  position: absolute;
  width: 30px;
  height: 4px;
  background-color: #d9d9d9;
  border-radius: 3px;
  transition: transform 0.2s, opacity 0.3s;
  transform: ${(props) =>
    props.isMenu ? "rotate(-45deg)" : "translateY(7px)"};
`;
