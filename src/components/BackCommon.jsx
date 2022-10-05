import React from "react";
import styled from "styled-components";

const BackCommon = () => {
  return (
    <BackCommonWrap>
      <MenuWrap>
        <MenuContainer />
      </MenuWrap>
    </BackCommonWrap>
  );
};

export default BackCommon;

const BackCommonWrap = styled.div`
  width: 100%;
  height: 100vh;
  background: #e8eae7;
  position: absolute;
  z-index: -1;
`;

const MenuWrap = styled.div`
  width: 725px;
  height: 100%;
  overflow: hidden;
`;

const MenuContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #3a667f;
  transform: skew(-20deg) translate(-177px);
`;
