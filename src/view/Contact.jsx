import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import BackCommon from "../components/BackCommon";

const Contact = () => {
  const location = useLocation();

  return (
    <>
      <BackCommon pathname={location.pathname} />
    </>
  );
};

export default Contact;
