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
const Terms = () => {
  useEffect(() => {
    if (window.location.hash) {
      const el = document.querySelector(window.location.hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <HeaderContainer>
        <HeaderText>Terms of Service</HeaderText>
      </HeaderContainer>

      <Section>
        <MainContainer>
          <TextBox>
            <SubHeader>
              Effective Date: March 30, 2026 · Last Updated: March 30, 2026
            </SubHeader>
            <Text>
              Welcome to Thriftly! These Terms of Service ("Terms") govern your
              access to and use of the Thriftly platform, mobile application,
              and all related services (collectively, the "Services") operated
              by Thriftly LLC, a Florida limited liability company ("Thriftly,"
              "we," "us," or "our"). By creating an account or using our
              Services, you agree to be bound by these Terms and our Privacy
              Policy. If you do not agree, you must not access or use our
              Services.
            </Text>

            <Notice>
              ⚠️ PLEASE READ{" "}
              <SectionLink onClick={() => scrollTo("s17")}>
                SECTION 17 (DISPUTE RESOLUTION AND ARBITRATION)
              </SectionLink>{" "}
              CAREFULLY. IT CONTAINS A BINDING ARBITRATION CLAUSE AND CLASS
              ACTION WAIVER THAT AFFECT YOUR LEGAL RIGHTS.
            </Notice>

            <br />

            {/* ── 1 ── */}
            <Title id="s1">1. Eligibility</Title>
            <Text>To use Thriftly, you must:</Text>
            <ul style={{ margin: 0 }}>
              <Li>
                <Text>Be at least 18 years of age;</Text>
              </Li>
              <Li>
                <Text>
                  Be currently enrolled at, or employed by, an accredited
                  college or university;
                </Text>
              </Li>
              <Li>
                <Text>
                  Have a valid, active university or college-issued email
                  address; and
                </Text>
              </Li>
              <Li>
                <Text>
                  Have the legal capacity to enter into a binding agreement.
                </Text>
              </Li>
            </ul>
            <Text>
              By registering for or using Thriftly, you represent and warrant
              that you meet all of the above eligibility requirements. If you do
              not meet these requirements, you must not use our Services. We
              reserve the right to request proof of enrollment at any time and
              to suspend or terminate accounts that do not meet eligibility
              requirements.
            </Text>

            <br />

            {/* ── 2 ── */}
            <Title id="s2">2. Account Registration</Title>
            <Text>
              To access the Services, you must create an account. When
              registering, you agree to:
            </Text>
            <ul style={{ margin: 0 }}>
              <Li>
                <Text>
                  Provide accurate, current, and complete information, including
                  your legal first and last name, a valid university or college
                  email address, and a secure password;
                </Text>
              </Li>
              <Li>
                <Text>
                  Maintain and promptly update your account information to keep
                  it accurate and complete;
                </Text>
              </Li>
              <Li>
                <Text>
                  Keep your login credentials confidential and not share them
                  with any third party; and
                </Text>
              </Li>
              <Li>
                <Text>
                  Notify us immediately at thriftly.help@gmail.com if you
                  suspect any unauthorized use of your account.
                </Text>
              </Li>
            </ul>
            <Text>
              You are solely responsible for all activity that occurs under your
              account, whether or not authorized by you. Thriftly is not liable
              for any loss or damage arising from your failure to maintain the
              security of your account credentials. Each person may maintain
              only one account. Creating multiple accounts to circumvent a
              suspension or for any other purpose is prohibited.
            </Text>

            <br />

            {/* ── 3 ── */}
            <Title id="s3">3. User Responsibilities and Conduct</Title>
            <Text>
              By using Thriftly, you agree to use the Services only for lawful
              purposes and in a manner consistent with these Terms. You agree
              not to:
            </Text>
            <ul style={{ margin: 0 }}>
              <Li>
                <Text>
                  Post, upload, or share any content that is illegal,
                  fraudulent, obscene, defamatory, discriminatory, threatening,
                  harassing, or otherwise harmful;
                </Text>
              </Li>
              <Li>
                <Text>
                  Post, upload, or share any content that constitutes or depicts
                  child sexual abuse material (CSAM) or any content that
                  exploits or harms minors in any way;
                </Text>
              </Li>
              <Li>
                <Text>
                  Impersonate any person or entity, or misrepresent your
                  affiliation with any person or entity;
                </Text>
              </Li>
              <Li>
                <Text>
                  Use the Services to send spam, unsolicited messages, or engage
                  in any form of automated data collection or scraping;
                </Text>
              </Li>
              <Li>
                <Text>
                  Attempt to gain unauthorized access to any portion of the
                  Services or any systems or networks connected to the Services;
                </Text>
              </Li>
              <Li>
                <Text>
                  Interfere with or disrupt the integrity or performance of the
                  Services;
                </Text>
              </Li>
              <Li>
                <Text>
                  Use the Services for any commercial purpose beyond individual
                  peer-to-peer sales permitted under these Terms; or
                </Text>
              </Li>
              <Li>
                <Text>
                  Violate any applicable local, state, federal, or international
                  laws or regulations.
                </Text>
              </Li>
            </ul>
            <Text>
              You are solely responsible for all content you post or share on
              Thriftly. Thriftly does not endorse, verify, or take
              responsibility for any user-generated content.
            </Text>

            <br />

            {/* ── 4 ── */}
            <Title id="s4">4. Prohibited Items</Title>
            <Text>
              You may not list, sell, or trade any of the following on Thriftly:
            </Text>
            <ul style={{ margin: 0 }}>
              <Li>
                <Text>Illegal items or substances of any kind;</Text>
              </Li>
              <Li>
                <Text>Firearms, ammunition, or weapons of any kind;</Text>
              </Li>
              <Li>
                <Text>Alcohol, tobacco, or controlled substances;</Text>
              </Li>
              <Li>
                <Text>Counterfeit, stolen, or infringing goods;</Text>
              </Li>
              <Li>
                <Text>
                  Prescription medications or regulated medical devices;
                </Text>
              </Li>
              <Li>
                <Text>Hazardous materials;</Text>
              </Li>
              <Li>
                <Text>Live animals;</Text>
              </Li>
              <Li>
                <Text>
                  Items that violate the intellectual property rights of any
                  third party; or
                </Text>
              </Li>
              <Li>
                <Text>
                  Any item whose sale is restricted or prohibited under
                  applicable law.
                </Text>
              </Li>
            </ul>
            <Text>
              Thriftly reserves the right to remove any listing at its sole
              discretion and to suspend or terminate the account of any user who
              violates this section.
            </Text>

            <br />

            {/* ── 5 ── */}
            <Title id="s5">5. Marketplace Use and Listings</Title>
            <Text>
              Thriftly is a campus-specific peer-to-peer marketplace. By posting
              a listing, you represent and warrant that:
            </Text>
            <ul style={{ margin: 0 }}>
              <Li>
                <Text>
                  You are the lawful owner of the item or have full authority to
                  sell or trade it;
                </Text>
              </Li>
              <Li>
                <Text>
                  The item is accurately described, including its condition, and
                  the photos accurately represent the item being sold;
                </Text>
              </Li>
              <Li>
                <Text>
                  The listing does not violate any applicable laws, regulations,
                  or third-party rights; and
                </Text>
              </Li>
              <Li>
                <Text>
                  You will complete the transaction in good faith if a buyer
                  purchases your item.
                </Text>
              </Li>
            </ul>
            <Text>
              Thriftly does not guarantee the accuracy, quality, safety, or
              legality of any listing, and we are not responsible for any
              disputes between buyers and sellers arising out of a transaction.
            </Text>

            <br />

            {/* ── 6 ── */}
            <Title id="s6">6. Purchases and Payment</Title>

            <SubTitle id="s6-1">6.1 Payment Processing</SubTitle>
            <Text>
              All payments on Thriftly are processed by Stripe, Inc. ("Stripe"),
              a third-party payment processor. By making or receiving payments
              through the Services, you agree to Stripe's Terms of Service and
              Privacy Policy, available at stripe.com. Thriftly is not
              responsible for any errors, failures, or delays in payment
              processing caused by Stripe or any financial institution.
            </Text>

            <SubTitle id="s6-2">6.2 Buyer Protection Fee</SubTitle>
            <Text>
              When a buyer completes a purchase through the in-app checkout, a
              buyer protection fee is charged to the buyer at the time of
              purchase. This fee entitles the buyer to the protections described
              in{" "}
              <SectionLink onClick={() => scrollTo("s7")}>
                Section 7
              </SectionLink>
              . The buyer protection fee is non-refundable except in cases where
              a transaction is cancelled pursuant to{" "}
              <SectionLink onClick={() => scrollTo("s7-4")}>
                Section 7.4
              </SectionLink>{" "}
              or where Thriftly determines, in its sole discretion, that a
              refund is warranted.
            </Text>

            <SubTitle id="s6-3">6.3 Escrow and Fund Holding</SubTitle>
            <Text>
              Upon a buyer's completion of a purchase, the transaction funds
              (excluding the buyer protection fee) are held in escrow at the
              platform level. Funds will not be released to the seller's
              Thriftly balance until the transaction is completed as described
              in{" "}
              <SectionLink onClick={() => scrollTo("s7")}>
                Section 7
              </SectionLink>
              . Thriftly is not a bank or financial institution and does not pay
              interest on held funds.
            </Text>

            <SubTitle id="s6-4">6.4 Seller Payouts</SubTitle>
            <Text>
              Sellers must connect a valid Stripe Connect account to receive
              payouts. Sellers must be at least 18 years of age and comply with
              all Stripe eligibility requirements. Payouts from a seller's
              available Thriftly balance are subject to Stripe's payout
              timelines and terms. Thriftly is not responsible for delays caused
              by Stripe, financial institutions, or incorrect account
              information provided by the seller.
            </Text>

            <SubTitle id="s6-5">6.5 Taxes</SubTitle>
            <Text>
              You are solely responsible for determining and fulfilling any tax
              obligations that may arise from your use of the Services. Thriftly
              does not provide tax advice and makes no representations regarding
              your tax obligations.
            </Text>

            <br />

            {/* ── 7 ── */}
            <Title id="s7">7. Transaction Process and Buyer Protection</Title>

            <SubTitle id="s7-1">7.1 Verification Code System</SubTitle>
            <Text>
              Upon a buyer's successful purchase, the buyer will be issued a
              unique, secure six-digit verification code ("Verification Code").
              The buyer must keep this Verification Code confidential and must
              not share it with the seller or any third party until the buyer
              has received the item and is satisfied with the transaction.
            </Text>

            <SubTitle id="s7-2">7.2 Completion of Transaction</SubTitle>
            <Text>
              When the buyer and seller meet to exchange the item, the buyer
              must share the Verification Code with the seller only upon receipt
              and inspection of the item. The seller must enter the Verification
              Code through the Thriftly platform to confirm delivery and trigger
              the release of funds from escrow to the seller's Thriftly balance.
            </Text>

            <SubTitle id="s7-3">7.3 Buyer Responsibilities</SubTitle>
            <Text>
              By using the Verification Code system, the buyer acknowledges and
              agrees that:
            </Text>
            <ul style={{ margin: 0 }}>
              <Li>
                <Text>
                  Sharing the Verification Code constitutes the buyer's
                  confirmation that the item was received and the transaction is
                  complete;
                </Text>
              </Li>
              <Li>
                <Text>
                  Once the Verification Code is entered by the seller and the
                  funds are released from escrow, the transaction is considered
                  final and non-reversible except as set forth in{" "}
                  <SectionLink onClick={() => scrollTo("s7-5")}>
                    Section 7.5
                  </SectionLink>
                  ; and
                </Text>
              </Li>
              <Li>
                <Text>
                  Thriftly is not liable for any losses incurred if the buyer
                  shares the Verification Code before receiving the item or
                  before being satisfied with the transaction.
                </Text>
              </Li>
            </ul>

            <SubTitle id="s7-4">
              7.4 Transaction Cancellation and Automatic Refund
            </SubTitle>
            <Text>
              If a transaction is not completed within ten (10) days of the
              purchase date — meaning the seller has not entered the
              Verification Code — the transaction will be automatically
              cancelled and the buyer will be refunded the transaction amount to
              their original payment method. The buyer protection fee is
              non-refundable in such cases unless Thriftly determines otherwise
              at its sole discretion. Processing times for refunds are subject
              to Stripe's and the buyer's financial institution's timelines.
            </Text>

            <SubTitle id="s7-5">7.5 Disputes</SubTitle>
            <Text>
              If you have a dispute related to a transaction, you must contact
              Thriftly at thriftly.help@gmail.com within five (5) days of the
              transaction completion date. Thriftly will review disputes at its
              sole discretion. Thriftly reserves the right to, but is not
              obligated to, intervene in any dispute between buyers and sellers.
              Any decision made by Thriftly with respect to a dispute is final.
            </Text>
            <Text>
              Thriftly is a platform facilitating peer-to-peer transactions. We
              are not a party to any transaction between users and expressly
              disclaim any liability arising out of disputes between buyers and
              sellers.
            </Text>

            <SubTitle id="s7-6">7.6 Prohibited Transaction Conduct</SubTitle>
            <Text>Users are prohibited from:</Text>
            <ul style={{ margin: 0 }}>
              <Li>
                <Text>
                  Circumventing the in-app payment system to complete a
                  transaction outside of Thriftly;
                </Text>
              </Li>
              <Li>
                <Text>
                  Sharing a Verification Code prior to receiving the item;
                </Text>
              </Li>
              <Li>
                <Text>
                  Colluding with another user to fraudulently complete or
                  reverse a transaction; or
                </Text>
              </Li>
              <Li>
                <Text>
                  Any other conduct intended to manipulate, abuse, or defraud
                  the escrow or buyer protection system.
                </Text>
              </Li>
            </ul>
            <Text>
              Violations of this section may result in immediate account
              suspension or termination, reversal of funds, and referral to law
              enforcement where appropriate.
            </Text>

            <br />

            {/* ── 8 ── */}
            <Title id="s8">8. Messaging</Title>
            <Text>
              Thriftly allows users to communicate with other users through its
              in-app messaging feature. By using messaging, you agree to:
            </Text>
            <ul style={{ margin: 0 }}>
              <Li>
                <Text>
                  Use the feature only for legitimate purposes related to
                  transactions and listings on the platform;
                </Text>
              </Li>
              <Li>
                <Text>
                  Not send spam, unsolicited messages, or engage in any form of
                  harassment or abusive communication; and
                </Text>
              </Li>
              <Li>
                <Text>
                  Not solicit other users to complete transactions outside of
                  the Thriftly platform.
                </Text>
              </Li>
            </ul>
            <Text>
              Thriftly reserves the right, but is not obligated, to monitor,
              review, or remove messages that violate these Terms. You
              acknowledge that Thriftly may access your messages in connection
              with investigating violations of these Terms or as required by
              law.
            </Text>

            <br />

            {/* ── 9 ── */}
            <Title id="s9">9. User Blocking and Safety Features</Title>
            <Text>
              Thriftly provides users with the ability to block other users.
              Blocking a user will prevent them from viewing your listings,
              sending you messages, or otherwise interacting with you on the
              platform. Thriftly does not guarantee that blocking a user will
              prevent all contact in all circumstances. If you feel unsafe or
              believe a user has engaged in criminal conduct, please contact
              local law enforcement in addition to reporting the behavior to
              Thriftly.
            </Text>

            <br />

            {/* ── 10 ── */}
            <Title id="s10">10. Child Safety</Title>
            <Text>
              Thriftly strictly prohibits any content that sexually exploits,
              abuses, or harms minors in any way, including child sexual abuse
              material (CSAM). If you encounter any such content on Thriftly,
              you must report it immediately to us at thriftly.help@gmail.com
              and to the National Center for Missing and Exploited Children
              (NCMEC) at www.cybertipline.org or by calling 1-800-843-5678.
              Thriftly will report all known instances of CSAM to NCMEC and
              applicable law enforcement authorities as required by law.
            </Text>

            <br />

            {/* ── 11 ── */}
            <Title id="s11">11. Intellectual Property</Title>

            <SubTitle id="s11-1">
              11.1 Thriftly's Intellectual Property
            </SubTitle>
            <Text>
              All content, features, and functionality of the Thriftly platform,
              including but not limited to text, graphics, logos, and software,
              are owned by Thriftly LLC or its licensors and are protected by
              applicable intellectual property laws. You may not copy,
              reproduce, modify, or distribute any portion of the Services
              without our prior written consent.
            </Text>

            <SubTitle id="s11-2">11.2 User Content License</SubTitle>
            <Text>
              By posting content on Thriftly (including listing photos,
              descriptions, and messages), you grant Thriftly a non-exclusive,
              royalty-free, worldwide, sublicensable license to use, reproduce,
              modify, display, and distribute such content solely for the
              purpose of operating and improving the Services. You represent and
              warrant that you own or have the necessary rights to grant this
              license and that your content does not infringe the rights of any
              third party.
            </Text>

            <SubTitle id="s11-3">11.3 Copyright Infringement</SubTitle>
            <Text>
              If you believe that any content on Thriftly infringes your
              copyright, please contact us at thriftly.help@gmail.com with a
              description of the allegedly infringing content and your contact
              information. Thriftly will respond to valid takedown requests in
              accordance with applicable law.
            </Text>

            <br />

            {/* ── 12 ── */}
            <Title id="s12">12. Privacy</Title>
            <Text>
              Your use of the Services is subject to our Privacy Policy, which
              is incorporated into these Terms by reference. By using Thriftly,
              you consent to the collection, use, and sharing of your
              information as described in the Privacy Policy.
            </Text>

            <br />

            {/* ── 13 ── */}
            <Title id="s13">13. Third-Party Services</Title>
            <Text>
              The Services may contain links to or integrations with third-party
              websites, applications, or services, including Stripe. Thriftly
              does not endorse and is not responsible for the content, privacy
              practices, or terms of any third-party services. Your use of
              third-party services is at your own risk and is governed by those
              parties' terms and policies.
            </Text>

            <br />

            {/* ── 14 ── */}
            <Title id="s14">14. Disclaimers</Title>
            <Text>
              THE SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS
              WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE
              FULLEST EXTENT PERMITTED BY LAW, THRIFTLY DISCLAIMS ALL
              WARRANTIES, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
              NON-INFRINGEMENT. THRIFTLY DOES NOT WARRANT THAT THE SERVICES WILL
              BE UNINTERRUPTED, ERROR-FREE, SECURE, OR FREE OF VIRUSES OR OTHER
              HARMFUL COMPONENTS. THRIFTLY DOES NOT GUARANTEE THE ACCURACY,
              COMPLETENESS, OR RELIABILITY OF ANY CONTENT ON THE PLATFORM,
              INCLUDING USER LISTINGS.
            </Text>
            <Text>
              THRIFTLY IS A PLATFORM THAT FACILITATES PEER-TO-PEER TRANSACTIONS
              BETWEEN USERS. THRIFTLY IS NOT A PARTY TO ANY TRANSACTION BETWEEN
              USERS AND MAKES NO REPRESENTATIONS ABOUT THE QUALITY, SAFETY, OR
              LEGALITY OF ANY ITEM LISTED OR SOLD ON THE PLATFORM.
            </Text>

            <br />

            {/* ── 15 ── */}
            <Title id="s15">15. Limitation of Liability</Title>
            <Text>
              TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT
              SHALL THRIFTLY LLC, ITS MEMBERS, MANAGERS, OFFICERS, EMPLOYEES,
              AGENTS, OR LICENSORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
              SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES ARISING OUT
              OF OR RELATED TO YOUR USE OF OR INABILITY TO USE THE SERVICES,
              INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, LOSS OF DATA, LOSS
              OF GOODWILL, PERSONAL INJURY, OR PROPERTY DAMAGE, EVEN IF THRIFTLY
              HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </Text>
            <Text>
              TO THE FULLEST EXTENT PERMITTED BY LAW, THRIFTLY'S TOTAL
              CUMULATIVE LIABILITY TO YOU FOR ANY CLAIMS ARISING OUT OF OR
              RELATED TO THESE TERMS OR THE SERVICES SHALL NOT EXCEED THE
              GREATER OF: (A) THE TOTAL AMOUNT OF BUYER PROTECTION FEES YOU PAID
              TO THRIFTLY IN THE SIX (6) MONTHS PRECEDING THE CLAIM, OR (B) ONE
              HUNDRED DOLLARS ($100.00).
            </Text>
            <Text>
              SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF
              CERTAIN WARRANTIES OR LIABILITY, SO SOME OF THE ABOVE LIMITATIONS
              MAY NOT APPLY TO YOU.
            </Text>

            <br />

            {/* ── 16 ── */}
            <Title id="s16">16. Indemnification</Title>
            <Text>
              You agree to indemnify, defend, and hold harmless Thriftly LLC and
              its members, managers, officers, employees, agents, and licensors
              from and against any and all claims, demands, actions, losses,
              damages, liabilities, costs, and expenses (including reasonable
              attorneys' fees) arising out of or related to: (a) your use of the
              Services; (b) your violation of these Terms; (c) your violation of
              any applicable law or regulation; (d) any content you post or
              share on Thriftly; or (e) any transaction you enter into through
              the Services. Thriftly reserves the right to assume exclusive
              control of the defense of any matter subject to indemnification by
              you, at your expense.
            </Text>

            <br />

            {/* ── 17 ── */}
            <Title id="s17">17. Dispute Resolution and Arbitration</Title>
            <Notice>
              PLEASE READ THIS SECTION CAREFULLY. IT AFFECTS YOUR LEGAL RIGHTS,
              INCLUDING YOUR RIGHT TO FILE A LAWSUIT IN COURT.
            </Notice>

            <SubTitle id="s17-1">17.1 Informal Resolution</SubTitle>
            <Text>
              Before initiating any formal dispute process, you agree to first
              contact Thriftly at thriftly.help@gmail.com and provide a written
              description of your dispute. You and Thriftly agree to attempt to
              resolve the dispute informally for a period of thirty (30) days
              from receipt of notice.
            </Text>

            <SubTitle id="s17-2">17.2 Binding Arbitration</SubTitle>
            <Text>
              If the dispute is not resolved informally, you and Thriftly agree
              that any dispute, claim, or controversy arising out of or relating
              to these Terms or the Services — including disputes regarding the
              interpretation, breach, termination, validity, or enforceability
              of these Terms — shall be resolved by binding individual
              arbitration administered by the American Arbitration Association
              ("AAA") under its Consumer Arbitration Rules, available at
              www.adr.org. The arbitration shall take place in Tallahassee,
              Florida, or, at your election, via telephone or video conference.
              The arbitrator's decision shall be final and binding and may be
              entered as a judgment in any court of competent jurisdiction.
            </Text>

            <SubTitle id="s17-3">17.3 Class Action Waiver</SubTitle>
            <Text>
              YOU AND THRIFTLY AGREE THAT EACH MAY BRING CLAIMS AGAINST THE
              OTHER ONLY IN YOUR OR ITS INDIVIDUAL CAPACITY AND NOT AS A
              PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS, CONSOLIDATED, OR
              REPRESENTATIVE ACTION. The arbitrator may not consolidate more
              than one person's claims and may not otherwise preside over any
              form of class or representative proceeding.
            </Text>

            <SubTitle id="s17-4">17.4 Exceptions</SubTitle>
            <Text>
              Notwithstanding the above, either party may seek emergency
              injunctive or other equitable relief in a court of competent
              jurisdiction to prevent actual or threatened infringement,
              misappropriation, or violation of intellectual property rights or
              confidential information. Small claims court actions within the
              applicable jurisdictional limits are also exempt from arbitration.
            </Text>

            <SubTitle id="s17-5">17.5 Opt-Out</SubTitle>
            <Text>
              You may opt out of this arbitration agreement by sending written
              notice to thriftly.help@gmail.com within thirty (30) days of first
              accepting these Terms. Your opt-out notice must include your name,
              email address, and a clear statement that you are opting out of
              arbitration.
            </Text>

            <br />

            {/* ── 18 ── */}
            <Title id="s18">18. Governing Law and Venue</Title>
            <Text>
              These Terms and any disputes arising out of or related to the
              Services shall be governed by and construed in accordance with the
              laws of the State of Florida, without regard to its conflict of
              law principles. For any disputes not subject to arbitration under{" "}
              <SectionLink onClick={() => scrollTo("s17")}>
                Section 17
              </SectionLink>
              , you and Thriftly consent to the exclusive jurisdiction of the
              state and federal courts located in Leon County, Florida.
            </Text>

            <br />

            {/* ── 19 ── */}
            <Title id="s19">19. Termination</Title>
            <Text>
              Thriftly reserves the right, in its sole discretion, to suspend,
              restrict, or permanently terminate your account and access to the
              Services at any time, with or without notice, for any reason,
              including but not limited to violation of these Terms, fraudulent
              activity, illegal conduct, or conduct harmful to the Thriftly
              community.
            </Text>
            <Text>
              Upon termination, your right to use the Services immediately
              ceases. Thriftly is not liable to you or any third party for any
              consequences of account termination. Sections{" "}
              <SectionLink onClick={() => scrollTo("s3")}>3</SectionLink>,{" "}
              <SectionLink onClick={() => scrollTo("s11")}>11</SectionLink>,{" "}
              <SectionLink onClick={() => scrollTo("s14")}>14</SectionLink>,{" "}
              <SectionLink onClick={() => scrollTo("s15")}>15</SectionLink>,{" "}
              <SectionLink onClick={() => scrollTo("s16")}>16</SectionLink>,{" "}
              <SectionLink onClick={() => scrollTo("s17")}>17</SectionLink>,{" "}
              <SectionLink onClick={() => scrollTo("s18")}>18</SectionLink>, and{" "}
              <SectionLink onClick={() => scrollTo("s19")}>19</SectionLink>{" "}
              shall survive termination of these Terms.
            </Text>

            <br />

            {/* ── 20 ── */}
            <Title id="s20">20. Changes to Terms</Title>
            <Text>
              Thriftly reserves the right to modify these Terms at any time.
              When we make material changes, we will notify you by updating the
              "Last Updated" date at the top of this document and, where
              feasible, by sending a notification through the app or to the
              email address associated with your account. Your continued use of
              the Services after the effective date of any changes constitutes
              your acceptance of the updated Terms. If you do not agree to the
              updated Terms, you must stop using the Services.
            </Text>

            <br />

            {/* ── 21 ── */}
            <Title id="s21">21. Miscellaneous</Title>
            <ul style={{ margin: 0 }}>
              <Li>
                <Text>
                  <span>Entire Agreement: </span>These Terms, together with our
                  Privacy Policy, constitute the entire agreement between you
                  and Thriftly with respect to the Services and supersede all
                  prior agreements and understandings.
                </Text>
              </Li>
              <Li>
                <Text>
                  <span>Severability: </span>If any provision of these Terms is
                  found to be invalid, illegal, or unenforceable, the remaining
                  provisions shall continue in full force and effect.
                </Text>
              </Li>
              <Li>
                <Text>
                  <span>Waiver: </span>Thriftly's failure to enforce any right
                  or provision of these Terms shall not constitute a waiver of
                  that right or provision.
                </Text>
              </Li>
              <Li>
                <Text>
                  <span>Assignment: </span>You may not assign or transfer your
                  rights or obligations under these Terms without Thriftly's
                  prior written consent. Thriftly may freely assign its rights
                  and obligations under these Terms.
                </Text>
              </Li>
              <Li>
                <Text>
                  <span>No Third-Party Beneficiaries: </span>These Terms do not
                  create any third-party beneficiary rights.
                </Text>
              </Li>
              <Li>
                <Text>
                  <span>Force Majeure: </span>Thriftly shall not be liable for
                  any failure or delay in performance resulting from causes
                  beyond its reasonable control, including acts of God, natural
                  disasters, governmental actions, or third-party service
                  failures.
                </Text>
              </Li>
            </ul>

            <br />

            {/* ── 22 ── */}
            <Title id="s22">22. Contact Us</Title>
            <Text>
              If you have any questions, concerns, or feedback regarding these
              Terms or the Services, please contact us at:
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

export default Terms;
