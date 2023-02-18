import * as React from "react"

import { Trans, useI18next } from "gatsby-plugin-react-i18next"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import AllSport from "../components/allSports"

import styled from "styled-components"
import Seo from "../components/seo"

const Text = styled.h2`
  margin-bottom: 20px;
  font-size: 16px;
  line-height: 1.2;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
  @media screen and (min-width: 1024px) {
    font-size: 20px;
  }
`

const SportPage = () => {
  const { i18n, t } = useI18next()

  function lang() {
    if (i18n.resolvedLanguage === "uk") {
      return ""
    } else {
      return `${i18n.resolvedLanguage}/`
    }
  }

  return (
    <Layout pageTitle={t("title-sport")}>
      <Seo
        title={t("seo-sport-title")}
        description={t("seo-sport-description")}
        canonicalLink={`https://wintotime.com/${lang()}sport/`}
      />
      <section>
        <AllSport currentLang={i18n.resolvedLanguage} />
      </section>
      <section>
        <Text>
          <Trans i18nKey="description_sport">
            ТОП онлайн ставки на спорт. Всі наші партнери 100% безпечні та
            перевірені часом. Високі коефіцієнти. Найкращі букмекерські контори.
            Завжди актуальні бонуси та посилання. Завжди готові допомогти вам в
            нашому телеграм каналі.
          </Trans>
        </Text>
      </section>
    </Layout>
  )
}

export default SportPage

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: { ns: { in: ["index", "sport"] }, language: { eq: $language } }
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
