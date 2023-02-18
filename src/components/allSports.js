import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PlayList from "./playList"
import { useState, useEffect } from "react"

const getSport = graphql`
  query AllSportsQuery {
    allSportJson {
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

const AllSports = ({ currentLang }) => {
  const [sport, setSport] = useState([])

  const response = useStaticQuery(getSport)
  // const data = response.allSportJson.edges.filter(
  //   item => item.node.lang === currentLang
  // )

  useEffect(() => {
    if (response) {
      const data = response.allSportJson.edges.filter(
        item => item.node.lang === currentLang
      )
      setSport(data)
    }
  }, [response, currentLang])
  return <PlayList arreyList={sport} />
}

export default AllSports
