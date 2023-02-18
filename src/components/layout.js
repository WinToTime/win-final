import * as React from "react"

import Header from "./header"
import Container from "./container"
import NavBar from "./navBar"
import Footer from "./footer"
import "./layout.css"
import styled from "styled-components"

const PageTitle = styled.h1`
  margin-bottom: 20px;
  font-size: 20px;
  line-height: 1.2;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 25px;
  }
`

const Layout = ({ pageTitle, children }) => {
  return (
    <>
      <Header />
      <Container>
        <NavBar />
        <main>
          <PageTitle>{pageTitle}</PageTitle>
          {children}
        </main>
        <Footer />
      </Container>
    </>
  )
}

export default Layout
