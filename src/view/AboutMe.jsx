import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import BackCommon from "../components/BackCommon";
import AboutPicture from "../assets/AboutPicture.svg";

import Header from "../components/Header";

const AboutMe = () => {
  // 경력
  // 기술 스택
  const location = useLocation();

  const HtmlRef = useRef(null);
  const JSRef = useRef(null);
  const ReactRef = useRef(null);
  const JqueryRef = useRef(null);
  const TSRef = useRef(null);

  const observeRef = useRef(null);

  // stack animation 조건
  const [scrollState, setScrollState] = useState(false);

  // 가로 Resize
  const [resizeX, setResizeX] = useState(0);

  const Resize = () => {
    const handleResize = () => {
      // console.log(window.innerWidth);
      setResizeX(window.innerWidth);
    };

    useEffect(() => {
      window.addEventListener("resize", handleResize);
      return () => {
        // cleanup
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  };

  Resize();

  // intersection
  // observer 활용해서 해당 ref 인식 시 animation 움직이도록
  const onIntersect = async ([entry], observer) => {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
      setScrollState(true);
      observer.observe(entry.target);
    }
  };

  useEffect(() => {
    let observer;
    if (observeRef.current) {
      observer = new IntersectionObserver(onIntersect, {
        threshold: 0.4,
      });
      observer.observe(observeRef.current);
    }
    return () => observer && observer.disconnect();
  }, [onIntersect]);

  // circle animation
  let animationTime = 0;
  const htmlAnimation = setInterval(() => {
    if (HtmlRef.current && scrollState) {
      HtmlRef.current.style.background = `conic-gradient(#FF5722 0 ${animationTime}%, #fff ${animationTime}% 100% )`;
      animationTime++ >= 95 && clearInterval(htmlAnimation);
    }
  }, 20);

  const jsAnimation = setInterval(() => {
    if (JSRef.current && scrollState) {
      JSRef.current.style.background = `conic-gradient(#F0DB4F 0 ${animationTime}%, #fff ${animationTime}% 100% )`;
      animationTime++ >= 85 && clearInterval(jsAnimation);
    }
  }, 20);

  const reactAnimation = setInterval(() => {
    if (ReactRef.current && scrollState) {
      ReactRef.current.style.background = `conic-gradient(#00CCFF 0 ${animationTime}%, #fff ${animationTime}% 100% )`;
      animationTime++ >= 85 && clearInterval(reactAnimation);
    }
  }, 20);

  const jqueryAnimation = setInterval(() => {
    if (JqueryRef.current && scrollState) {
      JqueryRef.current.style.background = `conic-gradient(#21ACE2 0 ${animationTime}%, #fff ${animationTime}% 100% )`;
      animationTime++ >= 80 && clearInterval(jqueryAnimation);
    }
  }, 20);

  const tsAnimation = setInterval(() => {
    if (TSRef.current && scrollState) {
      TSRef.current.style.background = `conic-gradient(#3178C6 0 ${animationTime}%, #fff ${animationTime}% 100% )`;
      animationTime++ >= 75 && clearInterval(tsAnimation);
    }
  }, 20);

  return (
    <>
      <BackCommon pathname={location.pathname} />
      <Header />
      <AboutWarp>
        {/* profile section */}
        <AboutContainer>
          <AboutTitle profile={true}>Profile</AboutTitle>
          <AboutPictureContainer>
            <img src={AboutPicture} alt="picture" />
          </AboutPictureContainer>

          <AboutProfileContainer>
            {/* 이름, 생년월일, 학교, 학원, 자격증 */}
            <AboutProfileText>
              <b>Name </b>
              <p>윤철원</p>
            </AboutProfileText>
            <AboutProfileText>
              <b>Birth </b> <p>1994.02.16</p>
            </AboutProfileText>
            <AboutProfileText>
              <b>Aducation </b>

              {resizeX > 1200 ? (
                // {/* PC Ver */}
                <p>
                  부산고등학교 졸업 / 동명대학교 전자 &#183; 의용공학부 졸업
                  <br />
                  SBS아카데미 컴퓨터아트학원 스마트기기UXUI디자인양성과정 교육
                  이수
                  <br />
                  코리아 IT 아카데미 프론트엔드 개발자 과정 이수
                </p>
              ) : (
                // {/* Mobile Ver */}
                <p>
                  부산고등학교 졸업
                  <br />
                  <br />
                  동명대학교 전자 &middot; 의용공학부 졸업
                  <br />
                  <br />
                  SBS아카데미 컴퓨터아트학원 스마트기기 UXUI 디자인 양성과정이수
                  <br />
                  <br />
                  코리아 IT 아카데미 프론트엔드 개발자 과정 이수
                </p>
              )}
            </AboutProfileText>
            <AboutProfileText>
              <b>Certificate </b>
              <p>
                정보처리기사 <br />
                웹디자인기능사
              </p>
            </AboutProfileText>
          </AboutProfileContainer>
        </AboutContainer>

        {/* Career */}
        <CareerContainer>
          <AboutTitle>Career</AboutTitle>
          <CareerText>
            <p>
              프래프 프론트엔드 개발팀 근무
              <br />
              <span>2022.02 ~ 2022.08(7개월)</span>
            </p>
          </CareerText>
        </CareerContainer>

        {/* Stack */}
        {/* HTML/CSS - 95, JavaScript- 85 , JQuery-80, React-85, TypeScript -70*/}
        {/* 각 언어의 로고 가져오기 */}
        {/* percent animation 구현 */}

        <StackContainer ref={observeRef}>
          <AboutTitle>Stack</AboutTitle>

          {resizeX > 1200 ? (
            <>
              <StackItemWrap>
                <StackItemContainer>
                  <StackItemTitle>HTML / CSS</StackItemTitle>
                  <StackItemPercent stack="HTML" ref={HtmlRef}>
                    <StackItemCenterPercent>95%</StackItemCenterPercent>
                  </StackItemPercent>
                </StackItemContainer>

                <StackItemContainer>
                  <StackItemTitle>JavaScript</StackItemTitle>
                  <StackItemPercent stack="JS" ref={JSRef}>
                    <StackItemCenterPercent>85%</StackItemCenterPercent>
                  </StackItemPercent>
                </StackItemContainer>

                <StackItemContainer>
                  <StackItemTitle>React</StackItemTitle>
                  <StackItemPercent stack="REACT" ref={ReactRef}>
                    <StackItemCenterPercent>85%</StackItemCenterPercent>
                  </StackItemPercent>
                </StackItemContainer>
              </StackItemWrap>

              <StackItemWrap second={true}>
                <StackItemContainer>
                  <StackItemTitle>JQuery</StackItemTitle>
                  <StackItemPercent stack="JQUERY" ref={JqueryRef}>
                    <StackItemCenterPercent>80%</StackItemCenterPercent>
                  </StackItemPercent>
                </StackItemContainer>

                <StackItemContainer>
                  <StackItemTitle>TypeScript</StackItemTitle>
                  <StackItemPercent stack="TS" ref={TSRef}>
                    <StackItemCenterPercent>75%</StackItemCenterPercent>
                  </StackItemPercent>
                </StackItemContainer>
              </StackItemWrap>
            </>
          ) : (
            <StackMobileWrap>
              <StackItemContainer>
                <StackItemTitle>HTML / CSS</StackItemTitle>
                <StackItemPercent stack="HTML" ref={HtmlRef}>
                  <StackItemCenterPercent>95%</StackItemCenterPercent>
                </StackItemPercent>
              </StackItemContainer>

              <StackItemContainer>
                <StackItemTitle>JavaScript</StackItemTitle>
                <StackItemPercent stack="JS" ref={JSRef}>
                  <StackItemCenterPercent>85%</StackItemCenterPercent>
                </StackItemPercent>
              </StackItemContainer>

              <StackItemContainer>
                <StackItemTitle>React</StackItemTitle>
                <StackItemPercent stack="REACT" ref={ReactRef}>
                  <StackItemCenterPercent>85%</StackItemCenterPercent>
                </StackItemPercent>
              </StackItemContainer>
              <StackItemContainer>
                <StackItemTitle>JQuery</StackItemTitle>
                <StackItemPercent stack="JQUERY" ref={JqueryRef}>
                  <StackItemCenterPercent>80%</StackItemCenterPercent>
                </StackItemPercent>
              </StackItemContainer>

              <StackItemContainer>
                <StackItemTitle>TypeScript</StackItemTitle>
                <StackItemPercent stack="TS" ref={TSRef}>
                  <StackItemCenterPercent>75%</StackItemCenterPercent>
                </StackItemPercent>
              </StackItemContainer>
            </StackMobileWrap>
          )}
        </StackContainer>
      </AboutWarp>
    </>
  );
};

export default AboutMe;

const AboutWarp = styled.div`
  width: 55%;
  position: absolute;
  top: 250px;
  right: 5%;
  border-top: 3px solid #3a667f;
  padding-top: 10px;
  font-family: GmarketSansMedium;

  @media screen and (max-width: 1200px) {
    width: 100%;
    top: 135px;
    left: 0;
    right: 0;
    border: none;
  }
`;
const AboutTitle = styled.span`
  position: absolute;
  top: ${(props) => (props.profile ? "-50px" : "0")};
  left: 0;
  font-size: 40px;
  font-weight: 700;
  color: #a0bdd0;

  @media screen and (max-width: 1200px) {
    font-size: 30px;
    left: 30px;
    top: 0;
  }
`;

const AboutContainer = styled.div`
  width: 100%;
  position: relative;
  height: 400px;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #a0bdd0;
  }

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    margin-top: 0;
    height: 750px;
    &::after {
      width: calc(100% - 30px);
      left: 30px;
    }
  }
`;

const AboutPictureContainer = styled.div`
  width: 300px;
  height: 100%;

  & img {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 1200px) {
    width: 200px;
    height: 300px;
    position: relative;
    top: 60px;
  }
`;

const AboutProfileContainer = styled.div`
  width: 700px;
  height: 100%;

  @media screen and (max-width: 1200px) {
    width: 100%;
    overflow: hidden;
  }
`;
const AboutProfileText = styled.div`
  width: 100%;
  font-size: 20px;
  color: #a0bdd0;
  margin-bottom: 23px;
  display: flex;
  align-items: top;
  position: relative;
  top: 75px;

  & p {
    font-size: 16px;
    margin: 0;
    font-weight: 300;
    padding-top: 3px;
    padding-left: 15px;
    padding-right: 30px;
  }

  @media screen and (max-width: 1200px) {
    font-size: 14px;
    padding-left: 30px;
    overflow: hidden;
  }
`;

const CareerContainer = styled.div`
  width: 100%;
  height: 90px;
  position: relative;
  margin-top: 10px;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #a0bdd0;
  }

  @media screen and (max-width: 1200px) {
    height: 120px;

    &::after {
      width: calc(100% - 30px);
      left: 30px;
    }
  }
`;

const CareerText = styled.div`
  width: 700px;
  height: 80px;
  color: #a0bdd0;
  position: absolute;
  right: 0;
  & span {
    margin-left: 35px;
    font-size: 14px;
  }

  @media screen and (max-width: 1200px) {
    width: 100%;
    left: 30px;
    top: 30px;
  }
`;

const StackContainer = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  margin: 10px 0;
  padding-bottom: 70px;
  border-bottom: 3px solid #3a667f;

  @media screen and (max-width: 1200px) {
    border: none;
  }
`;

const StackItemWrap = styled.div`
  width: 100%;
  height: 300px;
  position: relative;
  margin-bottom: 30px;
  top: 70px;
  display: flex;
  justify-content: ${(props) =>
    props.second ? "space-around" : "space-between"};
`;

const StackItemContainer = styled.div`
  width: 30%;
  height: 100%;
  border-top: 1px solid #a0bdd0;
  border-bottom: 1px solid #a0bdd0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 1200px) {
    border: none;
    padding-bottom: 30px;
    width: 100%;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 30px;
      width: calc(100% - 60px);
      height: 1px;
      background: #a0bdd0;
    }
  }
`;

const StackItemTitle = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: #a0bdd0;
  width: 100%;
  text-align: center;
`;

const StackItemPercent = styled.div`
  // 큰 원
  width: 160px;
  height: 160px;
  border-radius: 50%;
  position: relative;
  background: #fff;
`;

const StackItemCenterPercent = styled.div`
  // 중심 작은원
  width: 140px;
  height: 140px;
  background-color: #e8eae7;
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  text-align: center;
  line-height: 140px;
  font-size: 20px;
  transform: translate(-50%, -50%);
`;

const StackMobileWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  position: relative;
`;
