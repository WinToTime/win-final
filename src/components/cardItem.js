import React from "react"

import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Rating from "./rating"
import Feature from "./feature"
import LinkBonus from "./linkBonus"
import styled from "styled-components"

const Card = styled.li`
  position: relative;
  width: 300px;
  padding: 15px;
  margin-bottom: 30px;
  background: linear-gradient(0deg, #000, #272727);
  border: 1px solid #ff7c0a;
  box-shadow: 0px 2px 6px #ff7c0a;
  border-radius: 15px;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover,
  &:focus {
    background: linear-gradient(0deg, #000, #424242);
  }

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
  }
`

const CardLink = styled.a`
  width: 300px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
  }
`

const LogoWrapper = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    width: 100%;
    height: 150px;
  }
  @media screen and (min-width: 768px) {
    margin-right: 15px;
    width: 150px;
    margin-bottom: 0;
  }
  @media screen and (min-width: 1024px) {
    width: 220px;
  }
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
    width: 180px;
    margin-right: 15px;
    margin-bottom: 0;

    font-size: 18px;
  }

  @media screen and (min-width: 1024px) {
    width: 250px;
    font-size: 20px;
  }
`

const FeatureList = styled.ul`
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    max-width: 200px;
    width: 100%;
    margin-right: 15px;
    margin-bottom: 0;
  }

  @media screen and (min-width: 1024px) {
    max-width: 300px;
  }
`

const CardItem = ({ cardItem }) => {
  return cardItem.map(item => {
    const { id, logo, title, rating, description, feature, link } = item.node
    const image = getImage(logo.img)
    return (
      <Card key={id}>
        <CardLink href={link} target="_blank" rel="noreferrer">
          <LogoWrapper>
            <GatsbyImage image={image} alt={title} />
          </LogoWrapper>
          <Rating rat={rating} />
          <Description>{description}</Description>
          <FeatureList>
            <Feature featureArray={feature} />
          </FeatureList>
        </CardLink>
        <LinkBonus link={link} rectangleStyle={true} />
      </Card>
    )
  })
}

export default CardItem
