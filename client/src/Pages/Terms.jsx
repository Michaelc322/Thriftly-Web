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

const Terms = () => {
  return (
    <>
    <HeaderContainer>
        <HeaderText>Terms of Use</HeaderText>
    </HeaderContainer>

    <Section>
        <MainContainer>
            <TextBox>
                <SubHeader>Effective Date: March 9, 2025</SubHeader>
                <Text>Welcome to Thriftly! These Terms of Use (“Terms”) govern your access to and use of the Thriftly platform and services. By using or accessing our services, you agree to be bound by these Terms. If you do not agree to these Terms, you must not use our services.</Text>
                
                <Title>1. Eligibility</Title>
                <Text>To use Thriftly, you must be a registered student with a valid school email address. You must be at least 13 years old to use our platform. By using our services, you confirm that you meet these eligibility requirements.</Text>

                <br/>

                <Title>2. Account Registration</Title>
                <Text>To access certain features of Thriftly, you must create an account. When you create an account, you agree to provide accurate and complete information, including your first name, last name, school email address, and a secure password. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</Text>

                <br/>

                <Title>3. User Responsibilities</Title>
                <Text>As a user of Thriftly, you agree to the following:</Text>
                <ul style={{margin: 0}}>
                    <Li><Text><span>Content: </span>You are solely responsible for any content (e.g., listings, images, messages) you post or share on Thriftly. You must ensure that your content does not violate any applicable laws or infringe on the intellectual property or privacy rights of others.</Text></Li>

                    <Li>
                        <Text><span>Respect for Other Users: </span>You agree to interact respectfully with other users and not engage in any behavior that is abusive, harassing, fraudulent, or otherwise harmful to the community.</Text>
                    </Li>
                    
                    <Li>
                        <Text><span>Prohibited Content: </span>You are prohibited from posting content that:</Text>
                        <ul style={{margin: 0}}>
                            <Li>
                                <Text>Is illegal, obscene, defamatory, or discriminatory.</Text>
                            </Li>

                            <Li><Text>Contains child sexual abuse material or other harmful content directed toward minors.</Text></Li>

                            <Li><Text>Violates the intellectual property rights of others.</Text></Li>

                            <Li><Text>Violates any local, state, or national laws.</Text></Li>
                        </ul>
                    </Li>
                </ul>

                <br/>

                <Title>4. Marketplace Use</Title>
                <Text>Thriftly is a college marketplace where users can post items for sale or trade. By listing items, you agree that you will:</Text>

                <ul style={{margin: 0}}>
                    <Li>
                        <Text>Provide accurate descriptions and photos of the items you are offering.</Text>
                    </Li>

                    <Li>
                        <Text>Only list items that you have the right to sell or trade.</Text>
                    </Li>

                    <Li>
                        <Text>Ensure your listings comply with all applicable laws and regulations.</Text>
                    </Li>
                </ul>

                <br/>

                <Title>5. Messaging</Title>
                <Text>Thriftly allows users to message each other. You agree to use this feature responsibly and not to send spam, offensive, or inappropriate messages. You may not use messaging for any unlawful purposes.</Text>


                <br/>

                <Title>6. No Child Content</Title>
                <Text>Thriftly is intended for use by college students, and we do not allow the posting of child sexual abuse material or any content directed toward children. If you encounter such content, please report it immediately.</Text>

                <br/>

                <Title>7. Termination of Account</Title>
                <Text>We reserve the right to suspend or terminate your account at our discretion if we believe that you have violated these Terms, engaged in illegal activity, or disrupted the services. If your account is terminated, you may lose access to your listings, messages, and other content.</Text>
            
                <br/>

                <Title>8. Limitation of Liability</Title>
                <Text>Thriftly is provided "as is" and without any warranty. We do not guarantee the accuracy, reliability, or availability of the services. In no event shall Thriftly be liable for any indirect, incidental, special, or consequential damages arising from the use or inability to use the app, including loss of data or profits.</Text>

                <br/>

                <Title>9. Indemnificiation</Title>
                <Text>You agree to indemnify, defend, and hold harmless Thriftly, its affiliates, and its employees from any claims, losses, damages, liabilities, and expenses (including legal fees) arising out of your use of the services, your content, or any violation of these Terms.</Text>

                <br/>

                <Title>10. Changes to Terms</Title>
                <Text>We reserve the right to modify or update these Terms at any time. When we make changes, we will post the updated Terms on this page and update the effective date. Your continued use of Thriftly after the changes are posted will be considered your acceptance of the revised Terms.</Text>

                <br/>

                <Title>Governing Law</Title>
                <Text>These Terms are governed by and construed in accordance with the laws of the United States. Any disputes relating to these Terms will be subject to the exclusive jurisdiction of the courts located in the United States.</Text>

                <br/>

                <Title>12. Contact Us</Title>
                <Text>If you have any questions about these Terms or need assistance, please contact us at thriftly.help@gmail.com.</Text>
            </TextBox>

        </MainContainer>
    </Section>

    </>
  )
}

export default Terms