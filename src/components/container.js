import React from "react"

import styled from "styled-components"

export const ContainerWrap = styled.div`
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 320px) {
    width: 320px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1024px) {
    width: 1000px;
  }
`

const Container = ({ children }) => {
  return <ContainerWrap>{children}</ContainerWrap>
}

export default Container
