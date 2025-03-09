import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
    padding: 100px 20px;
    text-align: center;
    background-color: #f5f5f5;


`

const HeaderContainer = styled.div`
        position: relative;
        top: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 200px;
        background-color: #D72638;
`

const HeaderText = styled.h1`
    
`

const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

`

const TextBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    width: 50%;

    @media (max-width: 670px) {
        width: 80%;
    }
`

const Title = styled.h1`
    color: #000;
    text-align: left;
    margin: 0;
    padding: 0;
`
const SubHeader = styled.h3`
    text-align: left;

    color: #2b2b2b;
`

const Text = styled.p`
    text-align: left;
    color: #2b2b2b;
    margin-bottom: 5px;
`

const Li = styled.li`
    color: #2b2b2b;
    span {
        font-weight: 600;
    }
`

const PrivacyPolicy = () => {
  return (
    <>
    <HeaderContainer>
        <HeaderText>Privacy Policy</HeaderText>
    </HeaderContainer>

    <Section>
        <MainContainer>
            <TextBox>
                <SubHeader>Last updated: March 9, 2025</SubHeader>
                <Text>At Thriftly, we value and respect your privacy. This Privacy Policy outlines how we collect, use, and protect the personal information of users who access and use the Thriftly platform. By using our services, you consent to the practices described in this Privacy Policy.</Text>
                <Title>1. Information We Collect</Title>
                <Text>To provide you with our services, we collect the following personal information when you create an account or interact with the platform:</Text>

                <ul style={{margin: 0}}>
                    <Li><Text><span>Account Information:</span> When you sign up for an account, we collect your first name, last name, school email address, password, and profile picture.</Text></Li>
                    <Li><Text><span>Listings and Photos:</span> Users can post listings of items they wish to sell or trade. These listings may include descriptions and photos of the items. We store these listings and images securely.</Text></Li>
                    <Li><Text><span>Messages:</span> Users can communicate with each other via the messaging feature. These messages are stored within the app for your convenience.</Text></Li>
                </ul>

                <br/>

                <Title>2. Use of Information</Title>
                <Text>We use the collected information to:</Text>
                <ul style={{margin: 0}}>
                    <Li><Text>Provide you with access to the marketplace and related features, such as messaging and posting items.</Text></Li>
                    <Li><Text>Securely store your account details, profile picture, and any other content you upload.</Text></Li>
                    <Li><Text>Communicate with you regarding your account, transactions, or any changes to our services.</Text></Li>
                    <Li><Text>Improve the functionality of the app and ensure a safe and enjoyable experience for users.</Text></Li>
                </ul>

                <br/>

                <Title>3. Data Security</Title>
                <Text>We take reasonable measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. Your account information, listings, and profile pictures are securely stored in our database. However, please note that no data transmission over the internet is 100% secure, and we cannot guarantee absolute security.</Text>

                <br/>

                <Title>4. No Child Content</Title>
                <Text>Thriftly is intended for use by college students. We do not knowingly collect or display content that is inappropriate for users under the age of 18. We do not knowingly collect personal information from children under the age of 13.</Text>

                <br/>

                <Title>5. Sharing of Information</Title>
                <Text>We do not share your personal information with third-party applications or entities, except in the following circumstances:</Text>
                <ul style={{margin: 0}}>
                    <Li><Text><span>Service Providers:</span> We may share information with trusted third-party service providers who help us operate the app (such as hosting services). These service providers are required to protect your information and are not permitted to use it for their own purposes.</Text></Li>
                    <Li><Text><span>Legal Requirements:</span> If required by law, we may disclose your personal information in response to a legal process, such as a subpoena or court order.</Text></Li>
                </ul>


                <br/>

                <Title>6. Your Rights and Choices</Title>
                <Text>You can manage your personal information by updating your profile or account settings within the app. If you wish to delete your account or request the removal of any personal data, you can contact us at team@thriftlyapp.com.</Text>

                <br/>

                <Title>7. Changes to This Privacy Policy</Title>
                <Text>We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the updated policy within the app or sending you a notification. Your continued use of the app after any changes to this Privacy Policy will be deemed acceptance of those changes.</Text>
            

                <br/>

                <Title>Contact Us</Title>
                <Text>If you have any questions or concerns about this Privacy Policy or how we handle your personal information, please contact us at team@thriftlyapp.com.</Text>
            </TextBox>

        </MainContainer>
    </Section>

    </>
  )
}

export default PrivacyPolicy