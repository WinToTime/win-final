import React from "react"

import CardItemTop from "./cardItemTop"
import CardItem from "./cardItem"
import styled from "styled-components"

const List = styled.ul`
  margin-bottom: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

const PlayList = ({ arreyList }) => {
  const sortListByRating = arreyList.sort(
    (a, b) => b.node.rating - a.node.rating
  )
  const topCard = sortListByRating.slice(0, 3)
  const otherCard = sortListByRating.slice(3)

  return (
    <List>
      <CardItemTop cardItemTop={topCard} />
      <CardItem cardItem={otherCard} />
    </List>
  )
}

export default PlayList
