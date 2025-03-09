import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const HeaderText = styled.h1`
margin: 0px;
margin-bottom: 10px;
    padding-bottom: 0;
    color: #2b2b2b;
    font-size: 40px;
`

const SubText = styled.h3`
    padding-top: 0;
    margin-top: 0;
    color: #838383;
    font-weight: 500;
    max-width: 600px;
`

const Button = styled.a`
    margin-top: 50px;
    background-color: #D72638;
    border-radius: 15px;
    color: #fff;
    text-decoration: none;
    font-weight: 600;
    padding: 10px;
    box-shadow: 0px 2px 6px 0 rgb(0, 0, 0, 0.3);

`

const Feedback = () => {
  return (
    <Container>
        <HeaderText>Want to Contribute?</HeaderText>
        <SubText>We take each response into consideration! Share about your time on thriftly and help us improve your overall experience.</SubText>
        <Button>Submit Feedback</Button>
    </Container>
  )
}

export default Feedback