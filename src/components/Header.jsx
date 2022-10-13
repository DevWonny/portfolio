import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderWrap>
      <h1>Header Wrap</h1>
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
