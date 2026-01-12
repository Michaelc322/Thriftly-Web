import React from "react";
import styled from "styled-components";
import { delay, motion } from "framer-motion";
import About from "../Components/About";
import MainPoint from "../Components/MainPoint";
import Feedback from "../Components/Feedback";
import RequestSchoolSection from "../Components/RequestSchool";

const Section = styled.section`
  padding: 100px 20px;
  text-align: center;

  background-color: ${({ variant }) =>
    variant === "red" ? "#d72638" : "#f5f5f5"};

  /* Default (desktop) height behavior */
  min-height: ${({ tall }) => (tall ? "100vh" : "auto")};

  @media (max-width: 1370px) {
    min-height: ${({ tall }) => (tall ? "120vh" : "auto")};
  }

  @media (max-width: 768px) {
    padding: 60px 20px;
    min-height: auto; /* Mobile should not force height */
  }
`;

const Icon = styled.i`
  color: #fff;
  font-size: xx-large;
`;

const HeaderContainer = styled.div`
  padding: 20px;
  justify-content: space-evenly;
  align-items: center;
  display: flex;
  flex-direction: row;

  @media (max-width: 1370px) {
    flex-direction: column;
  }
`;

const LogoHeader = motion(styled.img`
  height: 100%;

  @media (max-width: 500px) {
    height: 50%;
  }
`);

const PhoneMock = motion(styled.img`
  height: 100%;
`);

const HeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 28rem;
  margin-bottom: 10em;

  @media (max-width: 500px) {
    width: 14rem;
  }
`;

const HeaderImageGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20rem;
`;

const HeaderText = styled.h1``;

const HeaderSubText = motion(styled.h2`
  color: #fff;
`);

const HeaderButtonGroup = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 10;
`;

const DownloadButton = styled.a`
  text-decoration: none;
  background-color: #2b2b2b;
  height: 50px;
  width: 180px;
  padding: 10px;
  color: #fff;
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10;
  border-radius: 12px;

  box-shadow: 0 5px 6px rgba(0, 0, 0, 0.3); /* Light shadow initially */
`;

const DownloadText = styled.p`
  font-weight: 500;
  font-size: 15px;

  span {
    font-weight: 700;
    font-size: 16px;
  }
`;

const Home = () => {
  return (
    <>
      <Section id="home" variant="red">
        <HeaderContainer>
          <HeaderInfo>
            <LogoHeader
              src="/logos/whiteText.png"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            />
            <HeaderSubText
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              The #1 social marketplace app for university students
            </HeaderSubText>
            <HeaderButtonGroup>
              <DownloadButton href="https://apps.apple.com/us/app/thriftly-1-college-market/id6748266194">
                <Icon className="fa-brands fa-app-store-ios" />
                <DownloadText>
                  Download on the <span>App Store</span>
                </DownloadText>
              </DownloadButton>

              {/* <DownloadButton href='/'>
                    <Icon className='fa-brands fa-google-play'/>
                    <DownloadText>Download on the <span>Google Play Store</span></DownloadText>
                    </DownloadButton> */}
            </HeaderButtonGroup>
          </HeaderInfo>
          <HeaderImageGroup>
            <PhoneMock
              src="/screens/listings.png"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
            />
          </HeaderImageGroup>
        </HeaderContainer>
      </Section>

      <Section id="about" variant="light">
        <About />
      </Section>

      <Section id="about" variant="red">
        <MainPoint />
      </Section>

      <Section id="request-school" variant="light">
        <RequestSchoolSection />
      </Section>

      <Section id="feedback" variant="light">
        <Feedback />
      </Section>
    </>
  );
};

export default Home;
