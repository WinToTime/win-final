import React from "react"

import { StaticImage } from "gatsby-plugin-image"

import styled from "styled-components"

const FeatureItem = styled.li`
  margin-bottom: 5px;

  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.2;

  color: #c2c2c2;

  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 16px;
  }
`

const ListWrapper = styled.div`
  display: flex;
`

const ImgWrap = styled.div`
  margin-right: 10px;
  min-width: 20px;
  width: 20px;
  height: 20px;
`

const Feature = ({ featureArray }) => {
  return (
    <>
      {featureArray.map((item, index) => {
        return (
          <FeatureItem key={index}>
            <ListWrapper>
              <ImgWrap>
                <StaticImage
                  src="../images/svg/check.svg"
                  alt="Наш Телеграм"
                  width={20}
                  height={20}
                />
              </ImgWrap>
              {item}
            </ListWrapper>
          </FeatureItem>
        )
      })}
    </>
  )
}

export default Feature
