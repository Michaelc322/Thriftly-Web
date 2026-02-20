import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background: linear-gradient(138deg, #8e1222 0%, #c41f33 56%, #f26f5f 128%);
  color: rgba(255, 255, 255, 0.9);
  padding: clamp(2.4rem, 6vw, 3.4rem) clamp(1.2rem, 4vw, 4.5rem) 1.6rem;

  @media (max-width: 640px) {
    padding-top: 2.2rem;
  }
`;

const FooterInner = styled.div`
  max-width: 1160px;
  margin: 0 auto;
`;

const MainRow = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1.2fr 1fr 1fr;
  align-items: start;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

const Brand = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  @media (max-width: 640px) {
    gap: 0.7rem;
  }
`;

const Logo = styled.img`
  width: 150px;
  height: auto;

  @media (max-width: 640px) {
    width: 128px;
  }
`;

const Tagline = styled.p`
  margin: 0;
  max-width: 40ch;
  color: rgba(255, 255, 255, 0.74);
  line-height: 1.6;
`;

const AppButton = styled.a`
  width: fit-content;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: #111827;
  background: #fff;
  font-weight: 700;
  font-size: 0.9rem;
  padding: 0.62rem 0.92rem;
  border-radius: 0.75rem;

  @media (max-width: 640px) {
    width: 100%;
    justify-content: center;
  }
`;

const Column = styled.div`
  display: grid;
  gap: 0.55rem;
`;

const ColumnTitle = styled.h3`
  margin: 0;
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;

const LinkButton = styled.a`
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  width: fit-content;
  font-weight: 600;

  &:hover {
    color: #ffffff;
    text-decoration: underline;
  }
`;

const SocialRow = styled.div`
  display: flex;
  gap: 0.6rem;
`;

const SocialIcon = styled.a`
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 0.68rem;
  display: grid;
  place-items: center;
  text-decoration: none;
  color: #fff;
  background: rgba(255, 255, 255, 0.14);
  transition: background-color 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.24);
  }
`;

const BottomRow = styled.div`
  margin-top: 1.8rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  display: flex;
  justify-content: space-between;
  gap: 0.8rem;
  flex-wrap: wrap;
  color: rgba(255, 255, 255, 0.68);
  font-size: 0.9rem;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterInner>
        <MainRow>
          <Brand>
            <Logo src="/logos/whiteText.png" alt="Thriftly" />
            <Tagline>
              Made for college students, by college students. A cleaner way to
              buy and sell across your campus community.
            </Tagline>
            <AppButton
              href="https://apps.apple.com/us/app/thriftly-1-college-market/id6748266194"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-app-store-ios" />
              Download app
            </AppButton>
          </Brand>

          <Column>
            <ColumnTitle>Navigation</ColumnTitle>
            <LinkButton href="/#home">Home</LinkButton>
            <LinkButton href="/#features">Features</LinkButton>
            <LinkButton href="/#request-school">Request Campus</LinkButton>
            <LinkButton href="/#feedback">Feedback</LinkButton>
          </Column>

          <Column>
            <ColumnTitle>Legal & Support</ColumnTitle>
            <LinkButton href="/privacy-policy">Privacy Policy</LinkButton>
            <LinkButton href="/terms-of-use">Terms of Use</LinkButton>
            <LinkButton href="mailto:thriftly.help@gmail.com">
              Help & Support
            </LinkButton>
            <SocialRow>
              <SocialIcon
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/thriftly.us"
                aria-label="Instagram"
              >
                <i className="fa-brands fa-instagram" />
              </SocialIcon>
            </SocialRow>
          </Column>
        </MainRow>

        <BottomRow>
          <span>Thriftly</span>
          <span>{new Date().getFullYear()} All rights reserved</span>
        </BottomRow>
      </FooterInner>
    </FooterContainer>
  );
};

export default Footer;
