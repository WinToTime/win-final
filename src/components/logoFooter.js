import React from "react"

import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    margin-top: 10px;
  }
`

export const Win = styled.span`
  font-size: 60px;
  font-family: "EB Garamond", serif;
  text-transform: uppercase;
  line-height: 0.55;
`

export const To = styled.span`
  color: #ff7c0a;
  z-index: 1;

  font-size: 55px;
  font-family: "EB Garamond", serif;
  text-transform: uppercase;
  line-height: 0.55;
`

export const Time = styled.span`
  font-size: 40px;
  font-family: "EB Garamond", serif;
  text-transform: uppercase;
  line-height: 0.55;
`

export const ExclamationMark = styled.span`
  color: #ff7c0a;
`

const LogoFooter = () => {
  return (
    <Wrapper>
      <Win>Win</Win>
      <To>To</To>
      <Time>
        Time<ExclamationMark>!</ExclamationMark>
      </Time>
    </Wrapper>
  )
}

export default LogoFooter
