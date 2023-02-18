import React from "react"

import styled from "styled-components"

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  cursor: default;
`

const Win = styled.span`
  color: #fff;
  opacity: 0;
  animation: showOpacity 0.4s;
  animation-fill-mode: forwards;
  animation-delay: 0s;

  font-size: 120px;
  font-family: "EB Garamond", serif;
  text-transform: uppercase;
  line-height: 0.55;

  @media screen and (min-width: 768px) {
    font-size: 160px;
  }

  @keyframes showOpacity {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`

const To = styled.span`
  color: #ff7c0a;
  z-index: 1;
  opacity: 0;
  font-size: 100px;
  font-family: "EB Garamond", serif;
  text-transform: uppercase;
  line-height: 0.55;

  animation: showOpacity 0.4s;
  animation-fill-mode: forwards;
  animation-delay: 0.8s;

  @media screen and (min-width: 768px) {
    font-size: 120px;
  }

  @keyframes showOpacity {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`

const Time = styled.span`
  color: #fff;
  opacity: 0;
  animation: showOpacity 0.4s;
  animation-fill-mode: forwards;
  animation-delay: 0.4s;

  font-size: 80px;
  font-family: "EB Garamond", serif;
  text-transform: uppercase;
  line-height: 0.55;

  @media screen and (min-width: 768px) {
    font-size: 100px;
  }

  @keyframes showOpacity {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`

const ExclamationMark = styled.span`
  color: #ff7c0a;

  animation: showOpacity 0.4s;
  animation-fill-mode: forwards;
  animation-delay: 1.2s;
  opacity: 0;

  @keyframes showOpacity {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`

const Logo = () => {
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

export default Logo
