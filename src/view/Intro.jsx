import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled, { keyframes } from "styled-components";

import BackCommon from "../components/BackCommon";

const Intro = () => {
  const location = useLocation();

  return (
    <>
      <BackCommon pathname={location.pathname} />
      <IntroWarp>
        <div>
          <span>W</span>
          <span>e</span>
          <span>l</span>
          <span>c</span>
          <span>o</span>
          <span>m</span>
          <span>e</span>
          <span>!</span>
        </div>

        <p>Cheolwon Portfolio!</p>
      </IntroWarp>
    </>
  );
};

export default Intro;

const textUp = keyframes`
  0%{
    top : 0%;
  }
  20%{
    top : -1rem;
  }
  40%{
    top : 0;
  }
  60%{
    top : 0;
  }
  80%{
    top : 0;
  }
`;

const textView = keyframes`
  0%{
    opacity: 0;
  }
  80%{
    opacity: 1;
  }
`;

const IntroWarp = styled.div`
  width: 55%;
  height: 50%;
  position: absolute;
  top: 250px;
  right: 5%;
  font-family: GmarketSansMedium;
  font-size: 50px;
  color: #a0bdd0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & span {
    position: relative;
    animation: ${textUp} 1.5s infinite;
  }

  & span:nth-of-type(1) {
    animation-delay: 0.1s;
  }
  & span:nth-of-type(2) {
    animation-delay: 0.2s;
  }
  & span:nth-of-type(3) {
    animation-delay: 0.3s;
  }
  & span:nth-of-type(4) {
    animation-delay: 0.4s;
  }
  & span:nth-of-type(5) {
    animation-delay: 0.5s;
  }
  & span:nth-of-type(6) {
    animation-delay: 0.6s;
  }
  & span:nth-of-type(7) {
    animation-delay: 0.7s;
  }
  & span:nth-of-type(8) {
    animation-delay: 0.8s;
  }

  & p {
    margin: 0;
    animation: ${textView} 3s;
  }
`;
