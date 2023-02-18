import React from "react"
import { useI18next } from "gatsby-plugin-react-i18next"
import Select from "react-select"

import styled from "styled-components"

const LangWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`

const LangSelect = () => {
  const { languages, i18n, changeLanguage } = useI18next()

  const langArray = [
    { label: "Українська", value: languages[0] },
    { label: "English", value: languages[1] },
    { label: "Руский", value: languages[2] },
  ]

  const colorStyles = {
    control: styles => ({
      ...styles,
      background: "linear-gradient(0deg, #000, #272727);",
      border: "1px solid #ff7c0a",
      boxShadow: "0px 2px 8px #ff7c0a",
      backdropFilter: "blur(11.25px)",
      borderRadius: "10px",
      cursor: "pointer",
    }),
    option: (styles, { isSelected }) => ({
      ...styles,
      color: isSelected ? "#ff7c0a" : "#000000",
      backgroundColor: "transparent",
      cursor: "pointer",
    }),
    singleValue: styles => ({ ...styles, color: "#c2c2c2" }),
  }

  const handleChange = selectOption => {
    changeLanguage(selectOption.value)
  }

  return (
    <LangWrapper data-nosnippet>
      <Select
        defaultValue={langArray.find(
          option => option.value === i18n.resolvedLanguage
        )}
        name="lang"
        options={langArray}
        onChange={handleChange}
        styles={colorStyles}
      />
    </LangWrapper>
  )
}

export default LangSelect
