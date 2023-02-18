import * as React from "react"

import { Trans, useI18next } from "gatsby-plugin-react-i18next"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import AllCasino from "../components/allCasino"

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

const IndexPage = () => {
  const { i18n, t } = useI18next()

  function lang() {
    if (i18n.resolvedLanguage === "uk") {
      return ""
    } else {
      return `/${i18n.resolvedLanguage}/`
    }
  }

  return (
    <Layout pageTitle={t("title-index")}>
      <Seo
        title={t("seo-index-title")}
        description={t("seo-index-description")}
        canonicalLink={`https://wintotime.com${lang()}`}
      />
      <section>
        <AllCasino currentLang={i18n.resolvedLanguage} />
      </section>
      <section>
        <Text>
          <Trans i18nKey="description_casino">
            ТОП онлайн-казино. ТОП онлайн ставки на спорт. Грай тільки в
            ліцензованих казино. Всі наші казино та ставки на спорт 100%
            безпечні та перевірені часом. При реєстрації ви отримаєте топові
            бонуси. Найкращі кешбеки до 10%. Завжди актуальні посилання. Швидкі
            виплати. Завжди готові допомогти вам в нашому телеграм каналі. Всі
            наші казино на перший депозит від 100% + FS. При реєстрації
            додатково за нашим промкодом ви отримаєте додатковий бонус.
          </Trans>
        </Text>
      </section>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: { ns: { in: ["index", "casino"] }, language: { eq: $language } }
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
