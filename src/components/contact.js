import React from "react"

import { Trans } from "gatsby-plugin-react-i18next"

import { StaticImage } from "gatsby-plugin-image"

import styled from "styled-components"

export const ContactTitle = styled.p`
  margin-bottom: 5px;
  font-style: normal;
  font-size: 16px;
  line-height: 1.38;

  text-align: center;

  color: #c2c2c2;
`

export const ContactList = styled.ul`
  display: flex;
  margin-bottom: 5px;

  @media screen and (min-width: 768px) {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(2, 40px);
    grid-template-rows: repeat(2, 40px);
    grid-column-gap: 8px;
    grid-row-gap: 8px;
  }
`

export const ContactItem = styled.li`
  transform: scale(1);
  transition-property: transform;
  transition-duration: 250ms;
  transition-timing-function: ease-in;

  &:hover,
  &:focus {
    transform: scale(1.1);
  }

  @media screen and (max-width: 767px) {
    margin-right: 10px;
  }
`

const Contact = () => {
  return (
    <address>
      <ContactTitle>
        <Trans i18nKey="contacts">Наші контакти:</Trans>
      </ContactTitle>

      <ContactList>
        <ContactItem>
          <a
            href="https://t.me/wintotime"
            target="_blank"
            rel="noreferrer"
            aria-label="Наш Телеграм"
          >
            <StaticImage
              src="../images/svg/telegram.svg"
              alt="Наш Телеграм"
              width={40}
              height={40}
            />
          </a>
        </ContactItem>
        <ContactItem>
          <a href="mailto:support@wintotime.com" aria-label="Наша пошта">
            <StaticImage
              src="../images/svg/mail.svg"
              alt="Наша пошта"
              width={40}
              height={40}
            />
          </a>
        </ContactItem>
        <ContactItem>
          <a
            href="https://www.facebook.com/wintotimecom"
            target="_blank"
            rel="noreferrer"
            aria-label="Наш Facebook"
          >
            <StaticImage
              src="../images/svg/facebook.svg"
              alt="Наш Facebook"
              width={40}
              height={40}
            />
          </a>
        </ContactItem>
        <ContactItem>
          <a
            href="https://www.instagram.com/wintotime/"
            target="_blank"
            rel="noreferrer"
            aria-label="Наш Instagram"
          >
            <StaticImage
              src="../images/svg/instagram.svg"
              alt="Наш Instagram"
              width={40}
              height={40}
            />
          </a>
        </ContactItem>
      </ContactList>
    </address>
  )
}

export default Contact
