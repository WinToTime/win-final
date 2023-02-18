import React from "react"

import styled from "styled-components"

const RatContainer = styled.div`
  position: absolute;
  top: -1px;
  left: -1px;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(245, 245, 245, 0.5);
  border: 1px solid #ff7c0a;
  border-radius: 15px 0px;

  @media screen and (min-width: 768px) {
    width: 60px;
    height: 60px;
  }
`

const RatContainerTop = styled.div`
  position: absolute;
  top: 6px;
  left: 6px;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(245, 245, 245, 0.5);
  border-radius: 15px 0px;

  @media screen and (min-width: 768px) {
    width: 60px;
    height: 60px;
  }
`

const RatingStyle = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.1;

  text-transform: capitalize;
  color: #000000;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`

const Rating = ({ rat, top = false }) => {
  return (
    <>
      {top ? (
        <RatContainerTop>
          <RatingStyle>{rat}/5</RatingStyle>
        </RatContainerTop>
      ) : (
        <RatContainer>
          <RatingStyle>{rat}/5</RatingStyle>
        </RatContainer>
      )}
    </>
  )
}

export default Rating
