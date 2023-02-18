import React from "react"

import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Rating from "./rating"
import Feature from "./feature"
import LinkBonus from "./linkBonus"
import styled from "styled-components"

const Card = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 30px 15px 15px;
  margin-bottom: 30px;
  border-radius: 15px;

  z-index: 0;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    z-index: -2;
    left: -100%;
    top: -10%;
    width: 300%;
    height: 120%;
    background-color: #399953;
    background-repeat: no-repeat;
    background-size: 50% 50%, 50% 50%;
    background-position: 0 0, 100% 0, 100% 100%, 0 100%;
    background-image: linear-gradient(#399953, #399953),
      linear-gradient(#fbb300, #fbb300), linear-gradient(#d53e33, #d53e33),
      linear-gradient(#377af5, #377af5);
    animation: rotate 6s linear infinite;
  }

  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    left: 6px;
    top: 6px;
    width: calc(100% - 12px);
    height: calc(100% - 12px);
    background: linear-gradient(0deg, #000, #272727);
    border-radius: 15px;
  }

  &:nth-child(3) {
    margin-right: 0;
  }

  @media screen and (min-width: 768px) {
    margin-right: 10px;
    width: calc((100% - 20px) / 3);
  }

  @keyframes rotate {
    100% {
      transform: rotate(1turn);
    }
  }
`

const CardLink = styled.a`
  flex-grow: 1;
`

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  width: 100%;
  height: 150px;
`

const Description = styled.p`
  margin-bottom: 20px;

  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.22;

  text-align: center;

  color: #c2c2c2;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 20px;
  }
`

const FeatureList = styled.ul`
  margin-bottom: 20px;
`

const CardItemTop = ({ cardItemTop }) => {
  return cardItemTop.map(item => {
    const { id, logo, title, rating, description, feature, link } = item.node
    const image = getImage(logo.img)
    return (
      <Card key={id}>
        <CardLink href={link} target="_blank" rel="noreferrer">
          <LogoWrapper>
            <GatsbyImage image={image} alt={title} />
          </LogoWrapper>
          <Rating rat={rating} top />
          <Description>{description}</Description>
          <FeatureList>
            <Feature featureArray={feature} />
          </FeatureList>
        </CardLink>
        <LinkBonus link={link} rectangleStyle={false} />
      </Card>
    )
  })
}

export default CardItemTop
