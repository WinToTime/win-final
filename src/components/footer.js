import React from "react"

import { Trans } from "gatsby-plugin-react-i18next"

import LogoFooter from "./logoFooter"
import BeGambleAware from "../images/begambleaware.png"
import Contact from "./contact"
import styled from "styled-components"

export const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
  }
`

export const LogoWrapper = styled.div`
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 10px;
  }
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 5px;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`

export const Text = styled.p`
  margin-bottom: 10px;

  font-style: normal;
  font-size: 12px;
  line-height: 1;

  text-align: center;

  color: #999999;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 10px;
  }
`

export const BeGamble = styled.img`
  width: 150px;
  height: auto;
`

export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 180px;
`

const Footer = () => {
  return (
    <Wrapper>
      <LogoWrapper>
        <LogoFooter />
      </LogoWrapper>
      <TextWrapper data-nosnippet>
        <Text>
          <Trans i18nKey="footer_text">
            Інформаційний ресурс Win to time не проводить ігри на реальні та/або
            віртуальні гроші, також сайт не приймає в жодній формі оплату ставок
            та/інших платежів, які пов'язані/можуть бути пов'язані з азартними
            іграми, букмекерами чи тоталізаторами. Будь-які матеріали на
            інформаційному ресурсі Win to time публікуються виключно з
            інформаційною метою. Участь в азартних іграх може викликати ігрову
            залежність. Дотримуйтесь правил (принципів) відповідальної гри. При
            появі перших ознак залежності негайно зверніться до фахівця.
            Пам'ятайте, що участь в азартних іграх не може бути джерелом доходів
            чи альтернативою роботі.
          </Trans>
        </Text>
        <a
          href="https://www.begambleaware.org/"
          target="_blank"
          rel="noreferrer"
          aria-label="BeGambleAware"
        >
          <BeGamble
            src={BeGambleAware}
            alt="BeGambleAware"
            width="150"
            height="50"
          />
        </a>
      </TextWrapper>
      <RightWrapper>
        <Contact />
      </RightWrapper>
    </Wrapper>
  )
}

export default Footer
