import React from "react"

import { Link, Trans } from "gatsby-plugin-react-i18next"

import LangSelect from "./langSelect"

import styled from "styled-components"

const Wrapper = styled.nav`
  padding: 6px 30px;
  margin-bottom: 20px;
  background: linear-gradient(0deg, #000, #272727);
  border: 1px solid #ff7c0a;
  box-shadow: 0px 2px 8px #ff7c0a;
  border-radius: 15px;

  @media screen and (min-width: 768px) {
    padding: 10px 30px;
  }
`

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`

const NavItem = styled.li`
  margin-right: 20px;
  min-width: 80px;
  width: 150px;

  text-align: center;

  &:last-child {
    margin-right: 0;
  }
`

const NavLink = styled(Link)`
  display: block;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.2;

  color: #ffffff;

  transition-property: background-color, color;
  transition-duration: 250ms;
  transition-timing-function: ease-in;

  &.active {
    color: #ff7c0a;
  }

  &:hover:not(.active),
  &:focus:not(.active) {
    color: #ff7c0a;
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 22px;
  }
`

const NavBar = () => {
  return (
    <Wrapper>
      <NavList>
        <NavItem>
          <NavLink to="/" activeClassName="active">
            <Trans i18nKey="nav_casino">Топ онлайн казино</Trans>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/sport" activeClassName="active">
            <Trans i18nKey="nav_sport">Топ ставки на спорт</Trans>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/faq" activeClassName="active">
            <Trans i18nKey="nav_faq">F.A.Q.</Trans>
          </NavLink>
        </NavItem>
      </NavList>
      <LangSelect />
    </Wrapper>
  )
}

export default NavBar
