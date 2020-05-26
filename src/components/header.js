import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { AccentButton, LinkButton } from './Buttons/index'

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4%;

  @media (max-width: 530px) {
    flex-direction: column;
  }
`
const LogoContainer = styled.div``

const Navigation = styled.div`
  display: flex;

  @media (max-width: 350px) {
    align-items: center;
    flex-direction: column;
  }
`

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <LogoContainer>
      <h1 style={{ fontSize: '64px' }}>Gruplo</h1>
    </LogoContainer>

    <Navigation>
      <LinkButton
        target="_blank"
        rel="noopener noreferrer"
        href="https://harmonizely.com/gruplo/prezentacja"
      >
        Umów się na prezentację
      </LinkButton>
      <AccentButton href="#">Wypróbuj za darmo</AccentButton>
    </Navigation>
  </HeaderContainer>
)

export default Header
