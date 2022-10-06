import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import BackCommon from "../components/BackCommon";

const Intro = () => {
  const location = useLocation();
  return (
    <>
      <BackCommon pathname={location.pathname} />
      <IntroWarp>Intro Text Location</IntroWarp>
    </>
  );
};

export default Intro;

const IntroWarp = styled.div`
  width: 55%;
  height: 50%;
  position: absolute;
  top: 250px;
  right: 5%;
  border: 1px solid #000;
  text-align: center;
  line-height: 450px;
`;
