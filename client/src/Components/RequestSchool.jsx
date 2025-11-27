import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Section = styled.div`
  width: 100%;
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f5f5f5;
`;

const Title = motion(styled.h1`
  font-size: 32px;
  color: #2b2b2b;
  font-weight: 700;
  text-align: center;
  margin-bottom: 10px;
`);

const Subtitle = motion(styled.p`
  font-size: 18px;
  color: #444;
  text-align: center;
  max-width: 550px;
  line-height: 1.5;
  margin-bottom: 3rem;
`);

const FeatureRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 2rem;
  flex-wrap: wrap;
`;

const FeatureCard = motion(styled.div`
  width: 18rem;
  padding: 2rem 1.5rem;
  background: white;
  border-radius: 1.5rem;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: 0.25s ease;
  cursor: default;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0px 6px 18px rgba(215, 38, 56, 0.25);
  }
`);

const Icon = styled.i`
  color: #d72638;
  font-size: 2.6rem;
  margin-bottom: 1rem;
`;

const FeatureTitle = styled.h2`
  font-size: 20px;
  color: #d72638;
  margin-bottom: 0.5rem;
`;

const FeatureText = styled.p`
  font-size: 16px;
  color: #2b2b2b;
  line-height: 1.4;
`;

const RequestSchoolSection = () => {
  return (
    <Section>
      <Title
        initial={{ opacity: 0, y: 30 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5 },
        }}
        viewport={{ once: true }}
      >
        Request Your School’s Marketplace
      </Title>

      <Subtitle
        initial={{ opacity: 0, y: 20 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.1, duration: 0.5 },
        }}
        viewport={{ once: true }}
      >
        Want Thriftly at your university? Be part of the expansion — request
        your campus and help bring your school’s own student marketplace to
        life.
      </Subtitle>

      <FeatureRow>
        <FeatureCard
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: { delay: 0.1, duration: 0.4 },
          }}
          viewport={{ once: true }}
        >
          <Icon className="fa-solid fa-paper-plane" />
          <FeatureTitle>Submit a Request</FeatureTitle>
          <FeatureText>
            Fill out a short form and let us know which school you want added
            next.
          </FeatureText>
        </FeatureCard>

        <FeatureCard
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: { delay: 0.25, duration: 0.4 },
          }}
          viewport={{ once: true }}
        >
          <Icon className="fa-solid fa-bullhorn" />
          <FeatureTitle>Build Demand</FeatureTitle>
          <FeatureText>
            Share your request link — more requests = higher priority for
            launch.
          </FeatureText>
        </FeatureCard>

        <FeatureCard
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: { delay: 0.4, duration: 0.4 },
          }}
          viewport={{ once: true }}
        >
          <Icon className="fa-solid fa-star" />
          <FeatureTitle>Early Access</FeatureTitle>
          <FeatureText>
            Schools with high demand get early rollout access and exclusive
            perks.
          </FeatureText>
        </FeatureCard>
      </FeatureRow>
    </Section>
  );
};

export default RequestSchoolSection;
