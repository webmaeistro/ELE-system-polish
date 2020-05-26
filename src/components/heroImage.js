import React from 'react'
import styled from 'styled-components'

import Image from './image'
import EarlyAccessSubscribe from './EarlyAccessSubscribe'

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 100px 0% 5%;

  @media (max-width: 700px) {
    margin: 0 5%;
  }
`

const Hero = styled.div`
  text-align: center;
  max-width: 1200px;
`

const Browser = styled.div`
  background-color: #fff;
  border: 3px solid #f1f1f1;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  width: 75%;
  margin: 25px;
  @media (max-width: 900px) {
    width: 95%;
  }
`

const BrowserBar = styled.div`
  padding: 10px;
  background: #f1f1f1;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`

const BrowserContent = styled.div`
  padding: 10px;
`

const Dot = styled.span`
  height: 12px;
  width: 12px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
`

const RedDot = styled(Dot)`
  background: #ed594a;
`

const YellowDot = styled(Dot)`
  background: #fdd800;
`

const GreenDot = styled(Dot)`
  background: #5ac05a;
`

const Title = styled.h1`
  font-size: 69px;

  @media (max-width: 700px) {
    font-size: 60px;
    text-align: center;
  }

  @media (max-width: 400px) {
    margin: 20px 0;
    font-size: 40px;
    text-align: center;
  }
`

const SubTitle = styled.h2`
  font-size: 24px;
  line-height: 150%;
  font-weight: normal;

  @media (max-width: 700px) {
    font-size: 20px;
    text-align: center;
  }
`

const HeroImage = () => (
  <HeroContainer>
    <Hero>
      <Title>System, który sam dopasuje płatności za Ciebie!</Title>
      <SubTitle>
        Narzędzie do obsługi klubów oraz szkół. Wykorzystaj sztuczną
        inteligencję do odciążenia Cię z nieefektywnych zadań.
      </SubTitle>
    </Hero>

    <EarlyAccessSubscribe />

    <Browser>
      <BrowserBar>
        <RedDot />
        <YellowDot />
        <GreenDot />
      </BrowserBar>
      <BrowserContent>
        <Image />
      </BrowserContent>
    </Browser>
  </HeroContainer>
)

export default HeroImage
