import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import BackCommon from "../components/BackCommon";

const Intro = () => {
  const location = useLocation();
  const welcomeText = `Welcome! Cheolwon Portfolio!`;
  // const welcomeNext = "";

  // 문자열 하나씩 더해서 만들어 줄 state
  const [firstTitle, setFirstTitle] = useState("");
  // const [secondTitle, setSecondTitle] = useState("");

  // 출력 될 문자 갯수 count state
  const [count, setCount] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setFirstTitle((prev) => {
        let result = prev ? prev + welcomeText[count] : welcomeText[0];
        setCount(count + 1);

        if (count >= welcomeText.length) {
          setCount(0);
          setFirstTitle("");
        }

        return result;
      });
    }, 300);

    return () => {
      clearInterval(typingInterval);
    };
  });

  return (
    <>
      <BackCommon pathname={location.pathname} />
      <IntroWarp>{firstTitle}</IntroWarp>
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
  text-align: center;
  line-height: 450px;
  font-family: GmarketSansMedium;
  font-size: 50px;
  color: #a0bdd0;
`;
