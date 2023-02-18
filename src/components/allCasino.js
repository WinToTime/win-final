import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PlayList from "./playList"
import { useState, useEffect } from "react"

const getCasino = graphql`
  query AllCasinoQuery {
    allCasinoJson {
      edges {
        node {
          description
          feature
          id
          lang
          link
          logo {
            img {
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
          rating
          title
        }
      }
    }
  }
`

const AllCasino = ({ currentLang }) => {
  const [casino, setCasino] = useState([])

  const response = useStaticQuery(getCasino)
  // const data = response.allCasinoJson.edges.filter(
  //   item => item.node.lang === currentLang
  // )

  useEffect(() => {
    if (response) {
      const data = response.allCasinoJson.edges.filter(
        item => item.node.lang === currentLang
      )
      setCasino(data)
    }
  }, [response, currentLang])

  return <PlayList arreyList={casino} />
}

export default AllCasino
