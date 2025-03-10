import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const HeaderText = motion(styled.h1`
    font-size: 50px;
    color: #2b2b2b;
`)

const Container = styled.div`
    justify-content: center;
    display: flex;
    align-items: center;
    flex-direction: column;
`

const CardContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
    width: 100%;

    @media (max-width: 1370px) {
        flex-direction: column;
        gap: 20px;
    }

`

const Card = motion(styled.div`
    width: 26rem;
    height: 18rem;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #fff;
    box-shadow: 0px 2px 6px 1px rgb(0, 0, 0, 0.2);

    @media (max-width: 500px) {
        width: 20rem;
    }

`)



const CardText = styled.h1`
    color: #D72638;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: x-large;


`

const SubText = styled.p`
    color: #D72638;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: large;
    font-weight: 400;
    padding-left: 50px;
    padding-right: 50px;
`

const Icon = styled.i`
    color: #D72638;
    font-size: xx-large;
`


const About = () => {
  return (
    <Container>
        <HeaderText
            initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0, transition: {delay: 0.2, duration: 0.5}}}
            viewport={{once: true, amount: 0.5}}
        >The safe and efficient way to buy and sell in college</HeaderText>

        <CardContainer>
            <Card
                initial={{opacity: 0, y: 50}}
                whileInView={{opacity: 1, y: 0, transition: {delay: 0, duration: 0.5}}}
                viewport={{once: true, amount: 0.5}}
            >
                <Icon className="fa-solid fa-building-columns"></Icon>
                <CardText>University-Specific</CardText>
                <SubText>Verify your school email to get started. Browse listings from other students within your university!</SubText>
                
            </Card>

            <Card
                initial={{opacity: 0, y: 50}}
                whileInView={{opacity: 1, y: 0, transition: {delay: 0.3, duration: 0.5}}}
                viewport={{once: false, amount: 0.5}}
            >
                <Icon className="fa-solid fa-user-group"></Icon>
                <CardText>Social Marketplace</CardText>
                <SubText>Follow and connect with other students! Create a profile and stay up to date with listings from your friends.</SubText>
                
            </Card>

            <Card
                initial={{opacity: 0, y: 50}}
                whileInView={{opacity: 1, y: 0, transition: {delay: 0.5, duration: 0.5}}}
                viewport={{once: true, amount: 0.5}}
            >
                <Icon className="fa-solid fa-rocket"></Icon>
                <CardText>User-Friendly Design</CardText>
                <SubText>Create your first listing in seconds! Let the students at your university make your profile a marketplace.</SubText>
                
            </Card>

        </CardContainer>
    </Container>
  )
}

export default About