import React from 'react'
import styled from 'styled-components'


const FooterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 200px;
    border-style: solid;
    border-color: #d3d3d3;
    background-color: #f5f5f5;
    border-width: 0px;

    border-top-width: 1.5px;


`

const ButtonGroup = styled.div`
    display: flex;
    width: 60%;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    @media (max-width: 670px) {
        flex-direction: column;
    }

`

const ButtonGroupSocials = styled.div`
    margin-top: 10px;
    display: flex;
    gap: 20px;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

`

const LinkButton = styled.a`
    color: #c4c4c4;

`


const Icon = styled.a`
    color: #c4c4c4;
    font-size: xx-large;
    text-decoration: none;
`

const SubText = styled.p`
    color: #c4c4c4;

`

const Footer = () => {
  return (
    <FooterContainer>
        <ButtonGroup>
            <LinkButton href='/'>Feedback</LinkButton>
            <LinkButton href='/privacy-policy'>Privacy Policy</LinkButton>
            <LinkButton href='/terms-of-use'>Terms of Use</LinkButton>
            <LinkButton href='/'>Help & Support</LinkButton>
        </ButtonGroup>
        <SubText>Made for college students, by college students</SubText>
        <ButtonGroupSocials>
            <Icon target="blank" href='https://www.linkedin.com/in/michaelcarroll-dev/' className='fa-brands fa-linkedin'/>
            <Icon target="blank" href='https://www.instagram.com/michael.carroll_/' className='fa-brands fa-instagram'/>


        </ButtonGroupSocials>
    </FooterContainer>
  )
}

export default Footer