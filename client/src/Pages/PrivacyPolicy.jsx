import React, { useEffect } from "react";
import styled from "styled-components";

// ── Scroll helper ──────────────────────────────────────────────
function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

// ── Styled Components (mirrors your existing file exactly) ──────
const Section = styled.section`
  padding: 100px 20px;
  text-align: center;
  background-color: #f5f5f5;
`;

const HeaderContainer = styled.div`
  position: relative;
  top: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  background-color: #d72638;
`;

const HeaderText = styled.h1`
  color: #fff;
`;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const TextBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 50%;

  @media (max-width: 670px) {
    width: 80%;
  }
`;

const Title = styled.h1`
  color: #000;
  text-align: left;
  margin: 0;
  padding: 0;
  scroll-margin-top: 100px;
`;

const SubTitle = styled.h2`
  color: #000;
  text-align: left;
  font-size: 1.1rem;
  margin: 12px 0 4px 0;
  padding: 0;
  scroll-margin-top: 100px;
`;

const SubHeader = styled.h3`
  text-align: left;
  color: #2b2b2b;
`;

const Text = styled.p`
  text-align: left;
  color: #2b2b2b;
  margin-bottom: 5px;
`;

const Li = styled.li`
  color: #2b2b2b;
  span {
    font-weight: 600;
  }
`;

const Notice = styled.div`
  background-color: #fff8e1;
  border: 1px solid #ffd54f;
  border-radius: 6px;
  padding: 12px 16px;
  margin: 10px 0;
  color: #2b2b2b;
  font-size: 0.9rem;
  line-height: 1.6;
  font-weight: 500;
  text-align: left;
`;

const SectionLink = styled.span`
  color: #d72638;
  text-decoration: underline;
  cursor: pointer;
  font-weight: 500;
`;

// ── Component ───────────────────────────────────────────────────
const PrivacyPolicy = () => {
  useEffect(() => {
    if (window.location.hash) {
      const el = document.querySelector(window.location.hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <HeaderContainer>
        <HeaderText>Privacy Policy</HeaderText>
      </HeaderContainer>

      <Section>
        <MainContainer>
          <TextBox>
            <SubHeader>
              Effective Date: March 30, 2026 · Last Updated: March 30, 2026
            </SubHeader>
            <Text>
              At Thriftly, we value and respect your privacy. This Privacy
              Policy explains how Thriftly LLC ("Thriftly," "we," "us," or
              "our") collects, uses, stores, shares, and protects your personal
              information when you access or use the Thriftly platform and
              related services (collectively, the "Services"). By using our
              Services, you consent to the practices described in this Privacy
              Policy. If you do not agree, you must not use our Services.
            </Text>
            <Text>
              This Privacy Policy is incorporated into and forms part of our{" "}
              <SectionLink
                onClick={() =>
                  scrollTo !== null && (window.location.href = "/terms")
                }
              >
                Terms of Service
              </SectionLink>
              . Capitalized terms not defined here have the meanings given in
              the Terms of Service.
            </Text>

            <br />

            {/* ── 1 ── */}
            <Title id="s1">1. Information We Collect</Title>
            <Text>
              We collect information you provide directly, information generated
              through your use of the Services, and information from third-party
              partners.
            </Text>

            <SubTitle id="s1-1">1.1 Information You Provide</SubTitle>
            <ul style={{ margin: 0 }}>
              <Li>
                <Text>
                  <span>Account Information:</span> When you register, we
                  collect your legal first and last name, university or college
                  email address, password, and profile picture.
                </Text>
              </Li>
              <Li>
                <Text>
                  <span>Listings and Photos:</span> When you post a listing, we
                  collect item descriptions, photos, pricing, and category
                  information.
                </Text>
              </Li>
              <Li>
                <Text>
                  <span>Messages:</span> We store messages sent between users
                  through the in-app messaging feature.
                </Text>
              </Li>
              <Li>
                <Text>
                  <span>Payment Information:</span> When you make or receive
                  payments, our payment processor Stripe, Inc. ("Stripe")
                  collects your payment card details, bank account information
                  (for sellers), and billing information. Thriftly does not
                  directly store raw payment card numbers. All payment data is
                  handled by Stripe in accordance with their Privacy Policy and
                  PCI-DSS compliance standards. We do store transaction records,
                  including amounts, dates, item references, and transaction
                  status.
                </Text>
              </Li>
              <Li>
                <Text>
                  <span>Identity Verification:</span> Sellers connecting a
                  Stripe Connect account may be required by Stripe to provide
                  government-issued identification and other verification
                  information. This information is collected and stored by
                  Stripe, not Thriftly.
                </Text>
              </Li>
              <Li>
                <Text>
                  <span>Communications:</span> If you contact us for support or
                  submit a dispute, we collect the contents of your
                  communications and your contact information.
                </Text>
              </Li>
            </ul>

            <SubTitle id="s1-2">
              1.2 Information Collected Automatically
            </SubTitle>
            <ul style={{ margin: 0 }}>
              <Li>
                <Text>
                  <span>Usage Data:</span> We collect information about how you
                  interact with the Services, including pages or features
                  accessed, search queries, listing views, and timestamps.
                </Text>
              </Li>
              <Li>
                <Text>
                  <span>Device Information:</span> We may collect device type,
                  operating system, browser type, IP address, and unique device
                  identifiers.
                </Text>
              </Li>
              <Li>
                <Text>
                  <span>Cookies and Similar Technologies:</span> We use cookies
                  and similar tracking technologies to maintain session state,
                  remember preferences, and analyze usage patterns. You can
                  control cookie settings through your browser, though disabling
                  cookies may affect the functionality of the Services.
                </Text>
              </Li>
            </ul>

            <SubTitle id="s1-3">1.3 Information from Third Parties</SubTitle>
            <ul style={{ margin: 0 }}>
              <Li>
                <Text>
                  <span>Stripe:</span> We receive transaction status updates,
                  payout confirmations, and fraud signals from Stripe in
                  connection with payment processing.
                </Text>
              </Li>
              <Li>
                <Text>
                  <span>University Verification:</span> We use your university
                  or college email address to verify your enrollment status. We
                  do not receive data directly from your institution.
                </Text>
              </Li>
            </ul>

            <br />

            {/* ── 2 ── */}
            <Title id="s2">2. How We Use Your Information</Title>
            <Text>
              We use the information we collect for the following purposes:
            </Text>
            <ul style={{ margin: 0 }}>
              <Li>
                <Text>
                  <span>To provide the Services:</span> Creating and managing
                  your account, enabling listings, facilitating messaging, and
                  processing transactions including escrow and payouts.
                </Text>
              </Li>
              <Li>
                <Text>
                  <span>To process payments:</span> Transmitting payment
                  information to Stripe, holding funds in escrow, releasing
                  funds upon transaction completion, and processing refunds.
                </Text>
              </Li>
              <Li>
                <Text>
                  <span>To verify eligibility:</span> Confirming that users are
                  enrolled students with a valid university or college email and
                  are at least 18 years of age.
                </Text>
              </Li>
              <Li>
                <Text>
                  <span>To ensure safety and prevent fraud:</span> Monitoring
                  for prohibited content, fraudulent transactions, abuse of the
                  Verification Code system, and other violations of our Terms of
                  Service.
                </Text>
              </Li>
              <Li>
                <Text>
                  <span>To communicate with you:</span> Sending transaction
                  confirmations, Verification Codes, dispute updates, policy
                  change notices, and support responses.
                </Text>
              </Li>
              <Li>
                <Text>
                  <span>To improve the Services:</span> Analyzing usage data and
                  feedback to troubleshoot issues, develop new features, and
                  improve platform performance.
                </Text>
              </Li>
              <Li>
                <Text>
                  <span>To comply with legal obligations:</span> Retaining
                  records as required by applicable law, responding to lawful
                  requests from government authorities, and reporting illegal
                  content such as CSAM to the appropriate authorities.
                </Text>
              </Li>
            </ul>

            <br />

            {/* ── 3 ── */}
            <Title id="s3">3. How We Share Your Information</Title>
            <Text>
              We do not sell your personal information. We share your
              information only in the following circumstances:
            </Text>
            <ul style={{ margin: 0 }}>
              <Li>
                <Text>
                  <span>Stripe:</span> We share payment-related information with
                  Stripe to process transactions, manage escrow, and facilitate
                  seller payouts. Stripe's use of your information is governed
                  by Stripe's Privacy Policy, available at stripe.com/privacy.
                </Text>
              </Li>
              <Li>
                <Text>
                  <span>Other Users:</span> Your public profile information
                  (name, profile picture, listings) is visible to other verified
                  Thriftly users on your campus. Messages you send are visible
                  to the recipient. Your identity is not disclosed to other
                  users beyond what you choose to share on your profile.
                </Text>
              </Li>
              <Li>
                <Text>
                  <span>Service Providers:</span> We may share information with
                  trusted third-party vendors who assist us in operating the
                  Services, such as cloud hosting, analytics, and customer
                  support tools. These providers are contractually obligated to
                  protect your information and may not use it for their own
                  purposes.
                </Text>
              </Li>
              <Li>
                <Text>
                  <span>Legal Requirements:</span> We may disclose your
                  information if required to do so by law, court order,
                  subpoena, or other legal process, or if we believe in good
                  faith that disclosure is necessary to protect the rights,
                  property, or safety of Thriftly, our users, or the public.
                </Text>
              </Li>
              <Li>
                <Text>
                  <span>Child Safety Reporting:</span> We are required by law to
                  report child sexual abuse material (CSAM) and related content
                  to the National Center for Missing and Exploited Children
                  (NCMEC) and applicable law enforcement. This may involve
                  sharing account information associated with such content.
                </Text>
              </Li>
              <Li>
                <Text>
                  <span>Business Transfers:</span> In the event of a merger,
                  acquisition, or sale of all or a portion of our assets, your
                  information may be transferred to the acquiring entity,
                  subject to the same privacy protections described in this
                  policy.
                </Text>
              </Li>
            </ul>

            <br />

            {/* ── 4 ── */}
            <Title id="s4">4. Payment Data and PCI Compliance</Title>
            <Text>
              Thriftly uses Stripe to handle all payment processing. Stripe is a
              PCI-DSS Level 1 certified payment processor, which is the highest
              level of certification available in the payments industry. This
              means:
            </Text>
            <ul style={{ margin: 0 }}>
              <Li>
                <Text>
                  Thriftly does not store, process, or transmit raw payment card
                  numbers on our servers.
                </Text>
              </Li>
              <Li>
                <Text>
                  All card data is tokenized and handled directly by Stripe's
                  secure infrastructure.
                </Text>
              </Li>
              <Li>
                <Text>
                  Thriftly retains only transaction metadata (amounts, dates,
                  status, and item references) necessary to operate the escrow
                  and buyer protection systems.
                </Text>
              </Li>
            </ul>
            <Text>
              For more information on how Stripe handles your payment data,
              please review Stripe's Privacy Policy at stripe.com/privacy.
            </Text>

            <br />

            {/* ── 5 ── */}
            <Title id="s5">5. Data Retention</Title>
            <Text>
              We retain your personal information for as long as necessary to
              provide the Services and fulfill the purposes described in this
              Privacy Policy, including:
            </Text>
            <ul style={{ margin: 0 }}>
              <Li>
                <Text>
                  <span>Account Information:</span> Retained for the duration of
                  your account and for up to 3 years after account deletion, as
                  required for legal and dispute resolution purposes.
                </Text>
              </Li>
              <Li>
                <Text>
                  <span>Transaction Records:</span> Retained for a minimum of 5
                  years to comply with applicable financial recordkeeping
                  requirements.
                </Text>
              </Li>
              <Li>
                <Text>
                  <span>Messages:</span> Retained for the duration of your
                  account and for up to 1 year after account deletion, unless
                  earlier deletion is requested and legally permissible.
                </Text>
              </Li>
              <Li>
                <Text>
                  <span>Listings:</span> Active listings are visible while your
                  account is active. Inactive or removed listings may be
                  retained in our systems for up to 1 year for audit and dispute
                  purposes.
                </Text>
              </Li>
            </ul>
            <Text>
              After the applicable retention period, we will delete or anonymize
              your information in accordance with our internal data management
              procedures.
            </Text>

            <br />

            {/* ── 6 ── */}
            <Title id="s6">6. Data Security</Title>
            <Text>
              We implement reasonable technical and organizational measures to
              protect your personal information from unauthorized access,
              alteration, disclosure, or destruction. These measures include
              encrypted data transmission (TLS), secure cloud storage, access
              controls, and reliance on Stripe's PCI-DSS compliant
              infrastructure for all payment data.
            </Text>
            <Text>
              However, no method of transmission over the internet or electronic
              storage is 100% secure. We cannot guarantee absolute security of
              your information. In the event of a data breach that affects your
              personal information, we will notify you as required by applicable
              law.
            </Text>

            <br />

            {/* ── 7 ── */}
            <Title id="s7">7. Your Rights and Choices</Title>
            <Text>
              Depending on your location, you may have the following rights
              regarding your personal information:
            </Text>
            <ul style={{ margin: 0 }}>
              <Li>
                <Text>
                  <span>Access:</span> You may request a copy of the personal
                  information we hold about you.
                </Text>
              </Li>
              <Li>
                <Text>
                  <span>Correction:</span> You may update or correct inaccurate
                  account information directly within the app or by contacting
                  us.
                </Text>
              </Li>
              <Li>
                <Text>
                  <span>Deletion:</span> You may request deletion of your
                  account and associated personal data. Note that we may be
                  required to retain certain information for legal or financial
                  compliance purposes as described in{" "}
                  <SectionLink onClick={() => scrollTo("s5")}>
                    Section 5
                  </SectionLink>
                  .
                </Text>
              </Li>
              <Li>
                <Text>
                  <span>Data Portability:</span> You may request a copy of your
                  data in a machine-readable format where technically feasible.
                </Text>
              </Li>
              <Li>
                <Text>
                  <span>Opt-Out of Non-Essential Communications:</span> You may
                  opt out of promotional communications by following the
                  unsubscribe instructions in any email we send. Transactional
                  communications (e.g., Verification Codes, dispute updates) are
                  necessary for the Services and cannot be opted out of while
                  your account is active.
                </Text>
              </Li>
              <Li>
                <Text>
                  <span>Cookie Preferences:</span> You can manage cookie
                  settings through your browser or device settings.
                </Text>
              </Li>
            </ul>
            <Text>
              To exercise any of these rights, please contact us at
              thriftly.help@gmail.com. We will respond to verified requests
              within 30 days.
            </Text>

            <br />

            {/* ── 8 ── */}
            <Title id="s8">8. California Privacy Rights (CCPA)</Title>
            <Notice>
              This section applies to residents of California under the
              California Consumer Privacy Act (CCPA), as amended by the
              California Privacy Rights Act (CPRA).
            </Notice>
            <Text>
              California residents have the following additional rights:
            </Text>
            <ul style={{ margin: 0 }}>
              <Li>
                <Text>
                  <span>Right to Know:</span> You have the right to know what
                  personal information we collect, use, disclose, and sell (we
                  do not sell personal information).
                </Text>
              </Li>
              <Li>
                <Text>
                  <span>Right to Delete:</span> You have the right to request
                  deletion of your personal information, subject to certain
                  exceptions.
                </Text>
              </Li>
              <Li>
                <Text>
                  <span>Right to Correct:</span> You have the right to request
                  correction of inaccurate personal information.
                </Text>
              </Li>
              <Li>
                <Text>
                  <span>Right to Opt-Out of Sale or Sharing:</span> We do not
                  sell or share your personal information for cross-context
                  behavioral advertising.
                </Text>
              </Li>
              <Li>
                <Text>
                  <span>Right to Non-Discrimination:</span> We will not
                  discriminate against you for exercising your CCPA rights.
                </Text>
              </Li>
            </ul>
            <Text>
              To submit a CCPA request, contact us at thriftly.help@gmail.com.
              We will verify your identity before processing your request and
              will respond within 45 days as required by law.
            </Text>

            <br />

            {/* ── 9 ── */}
            <Title id="s9">9. Children's Privacy</Title>
            <Text>
              Thriftly is intended exclusively for users who are at least 18
              years of age. We do not knowingly collect personal information
              from anyone under 18. If we become aware that a user is under 18,
              we will promptly terminate their account and delete their personal
              information. If you believe a minor has created an account on
              Thriftly, please contact us immediately at
              thriftly.help@gmail.com.
            </Text>

            <br />

            {/* ── 10 ── */}
            <Title id="s10">10. Third-Party Links and Services</Title>
            <Text>
              The Services may contain links to third-party websites or
              integrate with third-party services such as Stripe. This Privacy
              Policy applies only to information collected by Thriftly. We are
              not responsible for the privacy practices of any third-party
              services, and we encourage you to review their privacy policies
              before providing any personal information.
            </Text>

            <br />

            {/* ── 11 ── */}
            <Title id="s11">11. Changes to This Privacy Policy</Title>
            <Text>
              We may update this Privacy Policy from time to time to reflect
              changes in our practices, technology, legal requirements, or other
              factors. When we make material changes, we will update the "Last
              Updated" date at the top of this page and, where feasible, notify
              you through the app or via the email address associated with your
              account. Your continued use of the Services after any changes
              constitutes your acceptance of the updated Privacy Policy.
            </Text>

            <br />

            {/* ── 12 ── */}
            <Title id="s12">12. Contact Us</Title>
            <Text>
              If you have any questions, concerns, or requests regarding this
              Privacy Policy or our data practices, please contact us at:
            </Text>
            <Text>
              <span style={{ fontWeight: 600 }}>Thriftly LLC</span>
            </Text>
            <Text>Email: thriftly.help@gmail.com</Text>
          </TextBox>
        </MainContainer>
      </Section>
    </>
  );
};

export default PrivacyPolicy;
