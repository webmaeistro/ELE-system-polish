import React from 'react'
import styled from 'styled-components'

const FeatureContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  flex-direction: ${props => props.direction || 'row'};
  margin: 30px 0;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`
const FeatureLeft = styled.div`
  max-width: 450px;
`
const FeatureRight = styled.div`
  max-width: 650px;
`
const FeatureHeader = styled.h1``
const FeatureDescription = styled.p`
  letter-spacing: 2px;
  line-height: 30px;
  text-align: justify;
`
const FeatureLogo = styled.img``
const FeatureImage = styled.img`
  // max-width: 320px;
`

const Feature = ({ header, description, image, direction }) => (
  <FeatureContainer direction={direction}>
    <FeatureLeft>
      <FeatureHeader>{header}</FeatureHeader>
      <FeatureDescription>{description}</FeatureDescription>
    </FeatureLeft>
    <FeatureRight>
      <FeatureImage src={image} />
    </FeatureRight>
  </FeatureContainer>
)

export default Feature
