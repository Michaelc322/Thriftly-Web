import React from 'react'
import styled from 'styled-components'
import {motion } from 'framer-motion'

const MainContainer = styled.div`
    padding: 3em;
    margin: 2em;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: row;
    gap: 200px;
    @media (max-width: 1370px) {
        flex-direction: column;
        gap: 100px;
    }
    @media (max-width: 600px) {
        padding: 0;
        margin: 0;
    }
`


const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const SectionHeaderText = motion(styled.h1`
    font-size: xx-large;
    max-width: 700px;
`)

const SubText = motion(styled.p`
    text-align: center;
    font-size: large;
    font-weight: 400;
    max-width: 500px;
`)

const RightContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 15px;

    @media (max-width: 600px) {
        flex-direction: column;
        gap: 15px;
    }
`

const PhoneMock = motion(styled.img`
    height: 600px;
    
`);

const BulletPointContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const BulletPoint = motion(styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;

`)

const BulletText = styled.h3`

`

const BulletPointIcon = styled.i`
    font-size: x-large;
`

const MainPoint = () => {
  return (
    <>
    <MainContainer>

        <LeftContainer>
            <SectionHeaderText
                initial={{opacity: 0, x: -50}}
                whileInView={{opacity: 1, x: 0, transition: {delay: 0, duration: 0.5}}}
                viewport={{once: false, amount: 0.5}}            
            >A Social College Student Marketplace Made for You</SectionHeaderText>

            <SubText
                    initial={{opacity: 0, x: -50}}
                    whileInView={{opacity: 1, x: 0, transition: {delay: 0.2, duration: 0.5}}}
                    viewport={{once: false, amount: 0.5}}            
            >Thriftly lets college students shop in a common marketplace where they can interact and connect with each other.</SubText>

            <BulletPointContainer>
                <BulletPoint
                    initial={{opacity: 0, x: -50}}
                    whileInView={{opacity: 1, x: 0, transition: {delay: 0, duration: 0.5}}}
                    viewport={{once: false, amount: 0.5}}                
                >
                    <BulletPointIcon className='fa-solid fa-caret-right'/>
                    <BulletText>Real-time messaging</BulletText>
                </BulletPoint>

                <BulletPoint
                    initial={{opacity: 0, x: -50}}
                    whileInView={{opacity: 1, x: 0, transition: {delay: 0.3, duration: 0.5}}}
                    viewport={{once: false, amount: 0.5}}                
                >
                    <BulletPointIcon className='fa-solid fa-caret-right'/>
                    <BulletText>Instantly connect with friends</BulletText>
                </BulletPoint>

                <BulletPoint
                    initial={{opacity: 0, x: -50}}
                    whileInView={{opacity: 1, x: 0, transition: {delay: 0.5, duration: 0.5}}}
                    viewport={{once: false, amount: 0.5}}                
                >
                    <BulletPointIcon className='fa-solid fa-caret-right'/>
                    <BulletText>Shop by category</BulletText>
                </BulletPoint>

            </BulletPointContainer>
        </LeftContainer>

        <RightContainer>
            <PhoneMock src="/screens/chat.png"
                initial={{opacity: 0, x: 50}}
                whileInView={{opacity: 1, x: 0, transition: {delay: 0, duration: 0.5}}}
                viewport={{once: true, amount: 0.5}}
            />
            <PhoneMock src="/screens/profile.png"
                initial={{opacity: 0, x: 50}}
                whileInView={{opacity: 1, x: 0, transition: {delay: 0.3, duration: 0.5}}}
                viewport={{once: true, amount: 0.5}}            
            />
        </RightContainer>
    </MainContainer>
    </>
  )
}

export default MainPoint