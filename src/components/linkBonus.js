import React from "react"

import { Trans } from "gatsby-plugin-react-i18next"

import styled from "styled-components"

const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px;
  margin-left: ${props => props.rectangleStyle && "auto"};

  background: #ff7c0a;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;

  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.22;

  text-align: center;
  text-transform: uppercase;

  color: #ffffff;

  transition-property: box-shadow;
  transition-duration: 250ms;
  transition-timing-function: ease-in;

  &:hover,
  &:focus {
    box-shadow: 0 0 8px #ff7c0a;
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
    padding: ${props => props.rectangleStyle && "40px"};
    width: ${props => props.rectangleStyle && "130px"};
    height: ${props => props.rectangleStyle && "130px"};
  }
`

const LinkBonus = ({ link, rectangleStyle = false }) => {
  return (
    <Link
      rectangleStyle={rectangleStyle}
      href={link}
      target="_blank"
      rel="noreferrer"
      aria-label="Забрати бонус"
    >
      <Trans i18nKey="link_bonus">Забрати бонус</Trans>
    </Link>
  )
}

export default LinkBonus
