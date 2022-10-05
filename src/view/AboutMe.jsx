import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import BackCommon from "../components/BackCommon";

const AboutMe = () => {
  const location = useLocation();
  return (
    <>
      <BackCommon pathname={location.pathname} />
    </>
  );
};

export default AboutMe;
