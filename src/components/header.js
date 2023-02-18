import React from "react"

import Logo from "./logo"
import desctopBg from "../images/header-bg-des.webp"
import mobileBg from "../images/header-bg-mobile.webp"
import tabletBg from "../images/header-bg-tablet.webp"

import styled from "styled-components"

const HeaderBg = styled.header`
  position: relative;
  height: 360px;
  margin-left: auto;
  margin-right: auto;
  background-image: linear-gradient(360deg, #222222 0%, rgba(0, 0, 0, 0) 100%),
    url(${mobileBg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media screen and (min-width: 768px) {
    background-image: linear-gradient(360deg, #222222 0%, rgba(0, 0, 0, 0) 100%),
      url(${tabletBg});
    height: 450px;
  }
  @media screen and (min-width: 1024px) {
    background-image: linear-gradient(360deg, #222222 0%, rgba(0, 0, 0, 0) 100%),
      url(${desctopBg});
    height: 540px;
  }
`

const Header = () => {
  return (
    <HeaderBg>
      <Logo />
    </HeaderBg>
  )
}

export default Header
