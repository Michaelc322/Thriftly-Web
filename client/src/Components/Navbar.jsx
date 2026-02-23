import { useState } from "react";
import styled from "styled-components";
import { APP_STORE_URL, GOOGLE_PLAY_URL } from "../constants/storeLinks";

const Wrapper = styled.header`
  position: fixed;
  inset: 0 auto auto 0;
  width: 100%;
  z-index: 120;
  padding: 0.75rem 1rem;

  @media (max-width: 640px) {
    padding: 0.55rem 0.65rem;
  }
`;

const Shell = styled.nav`
  max-width: 1180px;
  margin: 0 auto;
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.5);
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(14px);
  box-shadow: 0 10px 26px rgba(8, 20, 44, 0.12);
  min-height: 64px;
  padding: 0.7rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  @media (max-width: 640px) {
    min-height: 58px;
    padding: 0.6rem 0.75rem;
    border-radius: 0.85rem;
  }
`;

const LogoLink = styled.a`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
`;

const LogoImage = styled.img`
  width: 132px;
  height: auto;
  display: block;

  @media (max-width: 640px) {
    width: 114px;
  }
`;

const LinkGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.35rem;

  @media (max-width: 980px) {
    display: none;
  }
`;

const LinkButton = styled.a`
  color: var(--ink-700);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.92rem;
  border-radius: 0.7rem;
  padding: 0.55rem 0.75rem;
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    background: rgba(12, 22, 38, 0.07);
    color: var(--ink-900);
  }
`;

const AppCtaGroup = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 980px) {
    display: none;
  }
`;

const AppCta = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: #fff;
  background: linear-gradient(135deg, #d72638 0%, #f26f5f 125%);
  padding: 0.58rem 0.9rem;
  border-radius: 0.75rem;
  font-size: 0.9rem;
  font-weight: 700;
  box-shadow: 0 10px 24px rgba(215, 38, 56, 0.25);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 14px 28px rgba(215, 38, 56, 0.3);
  }
`;

const PlayCta = styled(AppCta)`
  background: rgba(12, 22, 38, 0.86);
  box-shadow: 0 10px 24px rgba(12, 22, 38, 0.24);

  &:hover {
    box-shadow: 0 14px 28px rgba(12, 22, 38, 0.3);
  }

  @media (max-width: 980px) {
    display: none;
  }
`;

const MobileButton = styled.button`
  border: none;
  border-radius: 0.7rem;
  width: 2.6rem;
  height: 2.6rem;
  display: none;
  place-items: center;
  background: rgba(12, 22, 38, 0.08);
  color: var(--ink-900);
  cursor: pointer;

  @media (max-width: 980px) {
    display: grid;
  }
`;

const MobileMenu = styled.div`
  max-width: 1180px;
  margin: 0.5rem auto 0;
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid rgba(223, 218, 215, 0.9);
  box-shadow: 0 14px 30px rgba(12, 22, 38, 0.12);
  display: none;
  grid-template-columns: 1fr;
  padding: 0.45rem;

  @media (max-width: 980px) {
    display: ${(props) => (props.$open ? "grid" : "none")};
  }

  @media (max-width: 640px) {
    border-radius: 0.85rem;
  }
`;

const MobileLink = styled.a`
  text-decoration: none;
  color: var(--ink-800);
  font-weight: 600;
  border-radius: 0.7rem;
  padding: 0.75rem 0.8rem;

  &:hover {
    background: rgba(12, 22, 38, 0.07);
  }
`;

const mobileLinks = [
  { href: "/#home", label: "Home" },
  { href: "/#features", label: "Features" },
  { href: "/#request-school", label: "Request Campus" },
  { href: "/#feedback", label: "Feedback" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-use", label: "Terms of Use" },
  {
    href: APP_STORE_URL,
    label: "Download on App Store",
    external: true,
  },
  {
    href: GOOGLE_PLAY_URL,
    label: "Get on Google Play",
    external: true,
  },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper>
      <Shell>
        <LogoLink href="/#home" aria-label="Thriftly Home">
          <LogoImage src="/logos/redLogo.png" alt="Thriftly" />
        </LogoLink>

        <LinkGroup>
          <LinkButton href="/#features">Features</LinkButton>
          <LinkButton href="/#request-school">Request Campus</LinkButton>
          <LinkButton href="/#feedback">Feedback</LinkButton>
          <LinkButton href="/privacy-policy">Privacy</LinkButton>
          <LinkButton href="/terms-of-use">Terms</LinkButton>
        </LinkGroup>

        <AppCtaGroup>
          <AppCta href={APP_STORE_URL} target="_blank" rel="noreferrer">
            <i className="fa-brands fa-app-store-ios" />
            App Store
          </AppCta>
          <PlayCta href={GOOGLE_PLAY_URL} target="_blank" rel="noreferrer">
            <i className="fa-brands fa-google-play" />
            Google Play
          </PlayCta>
        </AppCtaGroup>

        <MobileButton
          aria-label="Toggle menu"
          onClick={() => setIsOpen((open) => !open)}
        >
          <i className={isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"} />
        </MobileButton>
      </Shell>

      <MobileMenu $open={isOpen}>
        {mobileLinks.map((link) => (
          <MobileLink
            key={link.label}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noreferrer" : undefined}
            onClick={() => setIsOpen(false)}
          >
            {link.label}
          </MobileLink>
        ))}
      </MobileMenu>
    </Wrapper>
  );
}

export default Navbar;
