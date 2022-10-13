import React, { useState } from "react";
import styled from "styled-components";

const Header = () => {
  // menu state
  const [isMenu, setIsMenu] = useState(false);

  return (
    <HeaderWrap>
      <h1>Header Wrap</h1>
      <Hamburger
        onClick={() => {
          setIsMenu(!isMenu);
        }}
      >
        <HamburgerTop isMenu={isMenu} />
        <HamburgreMiddle isMenu={isMenu} />
        <HamburgerBottom isMenu={isMenu} />
      </Hamburger>
    </HeaderWrap>
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
  @media screen and (min-width: 1201px) {
    display: none;
  }
`;

const Hamburger = styled.div`
  width: 24px;
  height: 24px;
  margin-left: 30px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HamburgerTop = styled.span`
  position: absolute;
  width: 24px;
  height: 4px;
  background: #d9d9d9;
  border-radius: 3px;
  transition: transform 0.2s, opacity 0.3s;
  transform: ${(props) =>
    props.isMenu ? "rotate(45deg)" : "translateY(-7px)"};
`;

const HamburgreMiddle = styled.span`
  position: absolute;
  width: 24px;
  height: 4px;
  background-color: #d9d9d9;
  border-radius: 3px;
  transition: transform 0.2s, opacity 0.3s;
  transform: ${(props) => props.isMenu && "translateX(16px)"};
  opacity: ${(props) => props.isMenu && "0"};
`;

const HamburgerBottom = styled.span`
  position: absolute;
  width: 24px;
  height: 4px;
  background-color: #d9d9d9;
  border-radius: 3px;
  transition: transform 0.2s, opacity 0.3s;
  transform: ${(props) =>
    props.isMenu ? "rotate(-45deg)" : "translateY(7px)"};
`;
