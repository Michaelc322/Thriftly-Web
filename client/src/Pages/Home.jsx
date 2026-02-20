import React from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

const featureItems = [
  {
    icon: "fa-solid fa-shield-heart",
    title: "Campus-Verified",
    text: "Student-only marketplace access keeps buying and selling safer and more trusted.",
  },
  {
    icon: "fa-solid fa-bolt",
    title: "Post In Seconds",
    text: "List an item fast with a clean flow designed for phones and busy student schedules.",
  },
  {
    icon: "fa-solid fa-comments",
    title: "Built-In Chat",
    text: "Talk with buyers and sellers instantly without leaving your marketplace feed.",
  },
  {
    icon: "fa-solid fa-user-group",
    title: "Social Discovery",
    text: "Follow students, spot new drops, and stay updated on listings around your campus.",
  },
  {
    icon: "fa-solid fa-filter-circle-dollar",
    title: "Smart Categories",
    text: "Browse by what matters most, from dorm essentials to bikes, tech, and furniture.",
  },
  {
    icon: "fa-solid fa-location-dot",
    title: "Local-First",
    text: "Everything is tuned for nearby transactions so pickups are simpler and faster.",
  },
];

const requestSteps = [
  {
    step: "1",
    title: "Submit Your Campus",
    text: "Share your school and tell us where you want Thriftly launched next.",
  },
  {
    step: "2",
    title: "Build Demand",
    text: "Invite friends to request too. Strong demand moves your campus up the queue.",
  },
  {
    step: "3",
    title: "Launch Faster",
    text: "Early campuses get first access and shape how Thriftly grows in your community.",
  },
];

const communityHighlights = [
  {
    icon: "fa-solid fa-lock",
    title: "Safer By Design",
    text: "School email verification creates a tighter, trusted marketplace network.",
  },
  {
    icon: "fa-solid fa-mobile-screen-button",
    title: "Fast listings, zero friction",
    text: "Post an item in under 30 seconds.",
  },
  {
    icon: "fa-solid fa-seedling",
    title: "Community-Led",
    text: "Every improvement is shaped by students sharing direct product feedback.",
  },
];

const floatOne = keyframes`
  0% { transform: translate3d(0, 0, 0); }
  50% { transform: translate3d(28px, -18px, 0); }
  100% { transform: translate3d(0, 0, 0); }
`;

const floatTwo = keyframes`
  0% { transform: translate3d(0, 0, 0); }
  50% { transform: translate3d(-24px, 16px, 0); }
  100% { transform: translate3d(0, 0, 0); }
`;

const shimmer = keyframes`
  0% { transform: translateX(-140%); }
  100% { transform: translateX(140%); }
`;

const Page = styled.main`
  color: var(--ink-900);
  background: linear-gradient(
    180deg,
    #fff5f0 0%,
    var(--surface-0) 32%,
    var(--surface-1) 100%
  );
`;

const Hero = styled.section`
  position: relative;
  overflow: hidden;
  padding: clamp(7.5rem, 11vw, 10rem) clamp(1.2rem, 4vw, 4.5rem)
    clamp(4.25rem, 8vw, 6rem);
  background: linear-gradient(
    128deg,
    #7f0f1d 0%,
    #b81e31 46%,
    #d72638 72%,
    #f26f5f 122%
  );

  @media (max-width: 640px) {
    padding-top: 7rem;
    padding-bottom: 4.5rem;
  }
`;

const Glow = styled.div`
  position: absolute;
  border-radius: 999px;
  filter: blur(24px);
  pointer-events: none;
`;

const GlowOne = styled(Glow)`
  width: clamp(14rem, 22vw, 22rem);
  height: clamp(14rem, 22vw, 22rem);
  top: -6rem;
  right: -4rem;
  background: rgba(248, 133, 119, 0.5);
  animation: ${floatOne} 11s ease-in-out infinite;
`;

const GlowTwo = styled(Glow)`
  width: clamp(10rem, 18vw, 18rem);
  height: clamp(10rem, 18vw, 18rem);
  bottom: -5rem;
  left: -3rem;
  background: rgba(255, 143, 132, 0.4);
  animation: ${floatTwo} 12s ease-in-out infinite;
`;

const HeroGrid = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  gap: clamp(2.25rem, 5vw, 4rem);
  grid-template-columns: 1.1fr 0.9fr;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

const HeroCopy = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 1.15rem;

  @media (max-width: 980px) {
    align-items: center;
    text-align: center;
  }
`;

const Pill = motion(styled.div`
  width: fit-content;
  padding: 0.5rem 0.85rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.34);
  background: rgba(255, 255, 255, 0.1);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`);

const Logo = motion(styled.img`
  width: clamp(10.5rem, 19vw, 14rem);
`);

const HeroTitle = motion(styled.h1`
  margin: 0;
  max-width: 22ch;
  font-family: var(--font-display);
  font-size: clamp(2.15rem, 6vw, 3.5rem);
  line-height: 1.05;
  letter-spacing: -0.02em;
`);

const HeroText = motion(styled.p`
  margin: 0;
  max-width: 56ch;
  font-size: clamp(1rem, 2.1vw, 1.24rem);
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.88);
`);

const ActionRow = motion(styled.div`
  margin-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.85rem;

  @media (max-width: 640px) {
    width: min(27rem, 100%);
    flex-direction: column;
    align-items: stretch;
    gap: 0.65rem;
  }
`);

const AppStoreButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.88rem 1.2rem;
  border-radius: 0.85rem;
  background: #ffffff;
  color: #111827;
  text-decoration: none;
  font-weight: 700;
  box-shadow: 0 16px 34px rgba(16, 24, 40, 0.28);
  transition:
    transform 0.22s ease,
    box-shadow 0.22s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 20px 40px rgba(16, 24, 40, 0.33);
  }

  i {
    font-size: 1.15rem;
  }

  @media (max-width: 640px) {
    width: 100%;
    justify-content: center;
    text-align: center;
  }
`;

const SecondaryButton = styled.a`
  position: relative;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.88rem 1.1rem;
  border-radius: 0.85rem;
  border: 1px solid rgba(255, 255, 255, 0.35);
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  background: rgba(255, 255, 255, 0.08);
  transition:
    border-color 0.22s ease,
    transform 0.22s ease;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      110deg,
      transparent 0%,
      rgba(255, 255, 255, 0.25) 50%,
      transparent 100%
    );
    animation: ${shimmer} 3.8s linear infinite;
  }

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(255, 255, 255, 0.6);
  }

  @media (max-width: 640px) {
    width: 100%;
    justify-content: center;
    text-align: center;
  }
`;

const MicroStats = motion(styled.div`
  margin-top: 0.95rem;
  display: grid;
  gap: 0.8rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    width: min(27rem, 100%);
  }
`);

const StatCard = styled.div`
  padding: 0.9rem 0.95rem;
  border-radius: 0.95rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.12);
  color: rgba(255, 255, 255, 0.95);
  font-size: 0.94rem;
  line-height: 1.5;
`;

const HeroVisual = styled(motion.div)`
  position: relative;
  display: grid;
  place-items: center;
  min-height: 360px;

  @media (max-width: 640px) {
    min-height: 280px;
    width: 100%;
  }
`;

const DeviceFrame = motion(styled.div`
  position: relative;
  width: min(320px, 84vw);
  border-radius: 2rem;
  padding: 0.8rem;
  border: 1px solid rgba(255, 255, 255, 0.36);
  background: linear-gradient(
    145deg,
    rgba(255, 255, 255, 0.34) 0%,
    rgba(255, 255, 255, 0.12) 100%
  );
  box-shadow: 0 28px 56px rgba(10, 16, 30, 0.42);
  backdrop-filter: blur(8px);
`);

const DeviceImage = styled.img`
  width: 100%;
  display: block;
  border-radius: 1.4rem;
`;

const FloatingChip = motion(styled.div`
  position: absolute;
  border-radius: 0.88rem;
  padding: 0.65rem 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.34);
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 18px 32px rgba(10, 16, 30, 0.22);
  color: #fff;
  font-size: 0.78rem;
  font-weight: 600;
  line-height: 1.4;
  backdrop-filter: blur(8px);

  @media (max-width: 640px) {
    display: none;
  }
`);

const MainSection = styled.section`
  padding: clamp(4rem, 8vw, 6rem) clamp(1.2rem, 4vw, 4.5rem);

  @media (max-width: 640px) {
    padding-top: 3.4rem;
    padding-bottom: 3.4rem;
  }
`;

const SectionInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionHeader = motion(styled.div`
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
`);

const Eyebrow = styled.p`
  margin: 0 0 0.5rem;
  color: var(--brand-red-500);
  font-size: 0.86rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.09em;
`;

const SectionTitle = styled.h2`
  margin: 0;
  font-family: var(--font-display);
  letter-spacing: -0.02em;
  font-size: clamp(1.95rem, 3.5vw, 3rem);
  color: var(--ink-900);
`;

const SectionText = styled.p`
  margin: 0.95rem auto 0;
  color: var(--ink-600);
  font-size: clamp(0.98rem, 1.8vw, 1.08rem);
  max-width: 62ch;
  line-height: 1.65;
`;

const FeatureGrid = styled.div`
  margin-top: clamp(2rem, 5vw, 3rem);
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  @media (max-width: 980px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = motion(styled.article`
  border: 1px solid #ece7e4;
  border-radius: 1.2rem;
  padding: 1.2rem;
  background: #ffffff;
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.06);
  transition:
    transform 0.23s ease,
    box-shadow 0.23s ease,
    border-color 0.23s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: #f7c9be;
    box-shadow: 0 16px 34px rgba(15, 23, 42, 0.11);
  }

  @media (max-width: 640px) {
    padding: 1.05rem;
  }
`);

const FeatureIcon = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.8rem;
  display: grid;
  place-items: center;
  color: var(--brand-red-500);
  background: rgba(215, 38, 56, 0.1);
  font-size: 1.05rem;
`;

const FeatureTitle = styled.h3`
  margin: 0.9rem 0 0.45rem;
  font-size: 1.1rem;
  color: var(--ink-900);
`;

const FeatureText = styled.p`
  margin: 0;
  color: var(--ink-600);
  line-height: 1.55;
`;

const ShowcaseSection = styled(MainSection)`
  background: linear-gradient(
    135deg,
    rgba(255, 238, 232, 0.68) 0%,
    rgba(255, 255, 255, 0.98) 60%,
    rgba(229, 244, 252, 0.65) 100%
  );
`;

const ShowcaseGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  gap: clamp(1.8rem, 4vw, 3.1rem);
  grid-template-columns: 1fr 1fr;
  align-items: center;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

const ShowcaseCopy = motion(styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
`);

const BulletList = styled.div`
  margin-top: 0.5rem;
  display: grid;
  gap: 0.75rem;
`;

const BulletItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.72rem;
  color: var(--ink-700);
  font-weight: 600;

  @media (max-width: 640px) {
    align-items: flex-start;
    text-align: left;
  }
`;

const BulletIcon = styled.span`
  width: 1.7rem;
  height: 1.7rem;
  border-radius: 999px;
  display: grid;
  place-items: center;
  color: var(--brand-red-500);
  background: rgba(215, 38, 56, 0.13);
  font-size: 0.75rem;
`;

const ShowcaseVisual = styled(motion.div)`
  display: grid;
  place-items: center;
  gap: 0.85rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    width: min(320px, 100%);
    margin: 0 auto;
  }
`;

const ShowcaseShot = styled(motion.img)`
  width: 100%;
  border-radius: 1.3rem;
  border: 1px solid #e8e5e2;
  box-shadow: 0 22px 40px rgba(12, 22, 38, 0.14);
`;

const StepGrid = styled.div`
  margin-top: clamp(2rem, 5vw, 3rem);
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const StepCard = motion(styled.article`
  position: relative;
  overflow: hidden;
  border-radius: 1.2rem;
  padding: 1.2rem 1.15rem 1.25rem;
  border: 1px solid #f0e6e3;
  background: #fff;
  box-shadow: 0 8px 22px rgba(15, 23, 42, 0.06);
`);

const StepNumber = styled.div`
  width: 2.35rem;
  height: 2.35rem;
  border-radius: 0.8rem;
  display: grid;
  place-items: center;
  font-weight: 800;
  color: #fff;
  background: linear-gradient(145deg, #d72638 0%, #ff7a66 120%);
`;

const StepTitle = styled.h3`
  margin: 0.85rem 0 0.4rem;
  font-size: 1.08rem;
  color: var(--ink-900);
`;

const StepText = styled.p`
  margin: 0;
  color: var(--ink-600);
  line-height: 1.58;
`;

const StepAction = styled.a`
  margin-top: 1rem;
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  text-decoration: none;
  color: var(--brand-red-500);
  font-weight: 700;

  i {
    font-size: 0.75rem;
  }
`;

const HighlightsGrid = styled.div`
  margin-top: clamp(2rem, 5vw, 3rem);
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const HighlightCard = motion(styled.article`
  border-radius: 1.2rem;
  padding: 1.3rem;
  border: 1px solid #e9e3df;
  background: linear-gradient(160deg, #ffffff 0%, #fff5f2 120%);
  box-shadow: 0 10px 25px rgba(15, 23, 42, 0.07);
`);

const HighlightIcon = styled.div`
  width: 2.45rem;
  height: 2.45rem;
  border-radius: 0.85rem;
  display: grid;
  place-items: center;
  font-size: 1.04rem;
  color: var(--brand-red-500);
  background: rgba(215, 38, 56, 0.12);
`;

const HighlightTitle = styled.h3`
  margin: 0.9rem 0 0.45rem;
  color: var(--ink-900);
`;

const HighlightText = styled.p`
  margin: 0;
  color: var(--ink-600);
  line-height: 1.56;
`;

const FinalCta = styled.section`
  padding: clamp(4rem, 8vw, 5.5rem) clamp(1.2rem, 4vw, 4.5rem)
    clamp(4.2rem, 8vw, 6rem);

  @media (max-width: 640px) {
    padding-top: 3.4rem;
    padding-bottom: 4rem;
  }
`;

const FinalCard = motion(styled.div`
  max-width: 1160px;
  margin: 0 auto;
  padding: clamp(1.8rem, 5vw, 2.8rem);
  border-radius: 1.45rem;
  position: relative;
  overflow: hidden;
  background: linear-gradient(132deg, #9c1525 0%, #d72638 58%, #f26f5f 138%);
  color: #fff;
  box-shadow: 0 24px 52px rgba(12, 22, 38, 0.22);
`);

const FinalTitle = styled.h2`
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(1.75rem, 4.1vw, 2.8rem);
`;

const FinalText = styled.p`
  margin: 0.8rem 0 0;
  max-width: 65ch;
  color: rgba(255, 255, 255, 0.88);
  line-height: 1.65;
`;

const FinalActions = styled.div`
  margin-top: 1.35rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.85rem;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const revealUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
};

const Home = () => {
  return (
    <Page>
      <Hero id="home">
        <GlowOne />
        <GlowTwo />
        <HeroGrid>
          <HeroCopy>
            <Pill
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Built for College Students
            </Pill>

            {/* <Logo
              src="/logos/whiteText.png"
              alt="Thriftly"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            /> */}

            <HeroTitle
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              A cleaner way to buy, sell, and connect on campus.
            </HeroTitle>

            <HeroText
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.7 }}
            >
              Thriftly turns your university into a trusted local marketplace
              where listings move fast, communication is instant, and every
              interaction feels social.
            </HeroText>

            <ActionRow
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.65 }}
            >
              <AppStoreButton
                href="https://apps.apple.com/us/app/thriftly-1-college-market/id6748266194"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-app-store-ios" />
                Download on the App Store
              </AppStoreButton>
              <SecondaryButton href="/#features">
                Explore features
                <i className="fa-solid fa-arrow-right" />
              </SecondaryButton>
            </ActionRow>

            <MicroStats
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.65 }}
            >
              <StatCard>Verified school communities</StatCard>
              <StatCard>Fast listing and discovery flow</StatCard>
              <StatCard>Built-in social marketplace tools</StatCard>
            </MicroStats>
          </HeroCopy>

          <HeroVisual
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.22, duration: 0.72 }}
          >
            <DeviceFrame
              animate={{ y: [0, -9, 0] }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <DeviceImage
                src="/logos/appScreens/newscreens1_2_1/homefeed1.PNG"
                alt="Thriftly listings"
              />
            </DeviceFrame>
            <FloatingChip
              style={{ top: "8%", left: "-8%" }}
              animate={{ y: [0, -7, 0] }}
              transition={{
                duration: 4.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <i className="fa-solid fa-check-circle" /> Campus-only
            </FloatingChip>
            <FloatingChip
              style={{ bottom: "7%", right: "-10%" }}
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 5.1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <i className="fa-solid fa-message" /> Instant chat
            </FloatingChip>
          </HeroVisual>
        </HeroGrid>
      </Hero>

      <MainSection id="features">
        <SectionInner>
          <SectionHeader {...revealUp}>
            <Eyebrow>Features</Eyebrow>
            <SectionTitle>
              Everything needed for a campus marketplace
            </SectionTitle>
            <SectionText>
              Clean visuals, low-friction flows, and high-trust interactions
              designed specifically for student communities.
            </SectionText>
          </SectionHeader>

          <FeatureGrid>
            {featureItems.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                {...revealUp}
                transition={{ delay: index * 0.06, duration: 0.5 }}
              >
                <FeatureIcon>
                  <i className={feature.icon} />
                </FeatureIcon>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureText>{feature.text}</FeatureText>
              </FeatureCard>
            ))}
          </FeatureGrid>
        </SectionInner>
      </MainSection>

      <ShowcaseSection>
        <ShowcaseGrid>
          <ShowcaseCopy {...revealUp}>
            <Eyebrow>Social Commerce</Eyebrow>
            <SectionTitle>
              Marketplace with a social layer that feels native
            </SectionTitle>
            <SectionText>
              Thriftly blends product discovery with student identity so buying
              and selling feels less transactional and more community-driven.
            </SectionText>
            <BulletList>
              <BulletItem>
                <BulletIcon>
                  <i className="fa-solid fa-check" />
                </BulletIcon>
                Real-time messaging with clean conversation threads
              </BulletItem>
              <BulletItem>
                <BulletIcon>
                  <i className="fa-solid fa-check" />
                </BulletIcon>
                Follow students and track listings from friends
              </BulletItem>
              <BulletItem>
                <BulletIcon>
                  <i className="fa-solid fa-check" />
                </BulletIcon>
                Browse by category and discover items faster
              </BulletItem>
            </BulletList>
          </ShowcaseCopy>

          <ShowcaseVisual {...revealUp}>
            <ShowcaseShot
              src="/logos/appScreens/newscreens1_2_1/chat1.PNG"
              alt="Messaging on Thriftly"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.24 }}
            />
            <ShowcaseShot
              src="/logos/appScreens/newscreens1_2_1/profile4.PNG"
              alt="User profile on Thriftly"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.24 }}
            />
          </ShowcaseVisual>
        </ShowcaseGrid>
      </ShowcaseSection>

      <MainSection id="request-school">
        <SectionInner>
          <SectionHeader {...revealUp}>
            <Eyebrow>Expansion</Eyebrow>
            <SectionTitle>Request Thriftly at your university</SectionTitle>
            <SectionText>
              Bring your campus online and help shape how student commerce grows
              next.
            </SectionText>
          </SectionHeader>

          <StepGrid>
            {requestSteps.map((step, index) => (
              <StepCard
                key={step.title}
                {...revealUp}
                transition={{ delay: index * 0.08, duration: 0.5 }}
              >
                <StepNumber>{step.step}</StepNumber>
                <StepTitle>{step.title}</StepTitle>
                <StepText>{step.text}</StepText>
                {index === 0 && (
                  <StepAction
                    href="mailto:thriftly.help@gmail.com?subject=Request%20Thriftly%20for%20my%20Campus"
                    rel="noreferrer"
                  >
                    Request now
                    <i className="fa-solid fa-arrow-up-right-from-square" />
                  </StepAction>
                )}
              </StepCard>
            ))}
          </StepGrid>
        </SectionInner>
      </MainSection>

      <MainSection id="feedback">
        <SectionInner>
          <SectionHeader {...revealUp}>
            <Eyebrow>Community</Eyebrow>
            <SectionTitle>Built with direct student feedback</SectionTitle>
            <SectionText>
              Your input drives product decisions from launch priorities to UX
              improvements.
            </SectionText>
          </SectionHeader>

          <HighlightsGrid>
            {communityHighlights.map((highlight, index) => (
              <HighlightCard
                key={highlight.title}
                {...revealUp}
                transition={{ delay: index * 0.08, duration: 0.5 }}
              >
                <HighlightIcon>
                  <i className={highlight.icon} />
                </HighlightIcon>
                <HighlightTitle>{highlight.title}</HighlightTitle>
                <HighlightText>{highlight.text}</HighlightText>
              </HighlightCard>
            ))}
          </HighlightsGrid>
        </SectionInner>
      </MainSection>

      <FinalCta>
        <FinalCard {...revealUp}>
          <FinalTitle>Ready to modernize your campus marketplace?</FinalTitle>
          <FinalText>
            Download Thriftly to start listing, connecting, and finding what you
            need around campus. Share feedback anytime and help shape what we
            build next.
          </FinalText>
          <FinalActions>
            <AppStoreButton
              href="https://apps.apple.com/us/app/thriftly-1-college-market/id6748266194"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-app-store-ios" />
              Get Thriftly
            </AppStoreButton>
            <SecondaryButton
              href="https://docs.google.com/forms/d/e/1FAIpQLScKPNeDwN3PRmgKdhjAS3DN-gJvPiOo4yQW2OC0MPe-0SpHrQ/viewform"
              target="_blank"
              rel="noreferrer"
            >
              Submit feedback
              <i className="fa-solid fa-arrow-up-right-from-square" />
            </SecondaryButton>
          </FinalActions>
        </FinalCard>
      </FinalCta>
    </Page>
  );
};

export default Home;
