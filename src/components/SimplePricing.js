import React from 'react'
import styled from 'styled-components'

const PricingContainer = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
  margin: 25px auto;
`
const PricingColumn = styled.div`
  margin: 10px;
  background: #fff;
  border-radius: 10px;
  padding: 40px;
  box-sizing: border-box;
  transition: 0.3s ease;
  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.08),
    0px 20px 31px 3px rgba(0, 0, 0, 0.09), 0px 8px 20px 7px rgba(0, 0, 0, 0.02);
`

const PlanHeaderCotainer = styled.div``
const PlanHeader = styled.h3`
  margin: 0;
`

const PlanPrice = styled.span`
  color: #0564ff;
  display: block;
  font-size: 32px;
  font-weight: 700;
`

const PlanDescriptionContainer = styled.div``
const List = styled.ul`
  // color: #0564ff;
  // font-weight: 600;
  // letter-spacing: 1px;
  margin: 50px 0 25px;
  list-style: none;
`

const Item = styled.li`
  margin: 0;
  border-top: 1px solid grey;
  font-size: 15px;
  text-align: center;
  // font-size: 12px;
  // line-height: 1.5;
  // padding: 15px 0;

  &:last-child {
    border-bottom: 1px solid grey;
  }
`

const FeatureList = ({ items }) => (
  <List>
    {items.map((item, index) => (
      <Item key={index}>{item}</Item>
    ))}
  </List>
)

const SimplePricing = () => (
  <PricingContainer>
    <PricingColumn>
      <PlanHeaderCotainer>
        <PlanHeader>Plan Podstawowy</PlanHeader>
        <PlanPrice>49 zł</PlanPrice>
      </PlanHeaderCotainer>
      <PlanDescriptionContainer>
        <FeatureList items={['Test1', 'Test 3', 'Test2']} />
      </PlanDescriptionContainer>
    </PricingColumn>

    <PricingColumn>
      <PlanHeader>Plan Mistrzowski</PlanHeader>
      <PlanPrice>99 zł /miesiąc</PlanPrice>
    </PricingColumn>

    <PricingColumn>
      <PlanHeader>Plan Olimpijski</PlanHeader>
      <PlanPrice>kontakt</PlanPrice>
    </PricingColumn>
  </PricingContainer>
)

export default SimplePricing
