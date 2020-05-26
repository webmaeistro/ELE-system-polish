import React from 'react'
import styled from 'styled-components'

const List = styled.ul`
  // color: #0564ff;
  font-weight: 600;
  letter-spacing: 1px;
  margin: 50px 0 25px;
  list-style: none;
`

const Item = styled.li`
  margin: 0;
  border-top: 1px solid #e1f1ff;
  font-size: 12px;
  line-height: 1.5;
  padding: 15px 0;

  &:last-child {
    border-bottom: 1px solid #e1f1ff;
  }
`

const FeatureList = ({ items }) => (
  <List>
    {items.map((item, index) => (
      <Item key={index}>{item}</Item>
    ))}
  </List>
)

FeatureList.defaultProps = {
  items: [],
}

export default FeatureList
