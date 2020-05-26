import React from 'react'
import styled from 'styled-components'

import { AccentButton } from '../Buttons/index'

const Container = styled.div`
  width: 100%;
  height: 250px;
  position: relative;
`

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
`

const Photo = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${props => props.image});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 0;
  filter: grayscale(25%);
`

const Header = styled.h1`
  color: #fff;
  // transform: translate(-25%, -25%);
  // position: absolute;
  // top: 50%;
  // left: 50%;

  // word-spacing: 100vw;
  // text-align: center;
`

const TryForFreeBar = ({ image, header }) => (
  <Container>
    <Photo image={image} />
    <Content>
      <Header>{header}</Header>
      <AccentButton href="#">ZAŁÓŻ DARMOWE KONTO</AccentButton>
    </Content>
  </Container>
)

export default TryForFreeBar
