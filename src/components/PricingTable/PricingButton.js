import React from 'react'
import styled from 'styled-components'

const PricingButton = styled.a`
  border: 1px solid #9dd1ff;
  border-radius: 10px;
  color: #348efe;
  display: inline-block;
  margin: 25px 0;
  width: 100%;
  padding: 15px;
  text-decoration: none;
  transition: all 150ms ease-in-out;

  &:hover,
  focus {
    background-color: #e1f1ff;
  }
`

const PricingButtonFeatured = styled(PricingButton)`
  background-color: #48aaff;
  color: #fff;

  &:hover,
  active {
    background-color: #269aff;
  }
`

export { PricingButton, PricingButtonFeatured }
