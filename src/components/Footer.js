import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  color: #fff;
  background-color: #333333;
  padding: 3% 1%;
`
const Column = styled.div`
  width: 200px;
`

const Header = styled.h5`
  margin: 15px 0;
  text-transform: uppercase;
`

const LinkList = styled.ul`
  margin: 0;
  font-size: 14px;
  list-style-type: none;
`
const LinkItem = styled.li`
  margin: 0;
`

const Link = styled.a`
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

const Footer = () => (
  <FooterContainer>
    <Column>
      <Header>Gruplo CRM</Header>
    </Column>
    {/* 
    <Column>
      <Header>Produkt</Header>
      <LinkList>
        <LinkItem>
          <Link href="#">Funkcje</Link>
        </LinkItem>
        <LinkItem>
          <Link href="#">Cennik</Link>
        </LinkItem>
        <LinkItem>
          <Link href="#">Umów się na prezentacje</Link>
        </LinkItem>
      </LinkList>
    </Column>
    <Column>
      <Header>Firma</Header>
      <LinkList>
        <LinkItem>
          <Link href="#">Kontakt</Link>
        </LinkItem>

        <LinkItem>
          <Link href="#">Regulamin</Link>
        </LinkItem>
        <LinkItem>
          <Link href="#">Polityka prywatności</Link>
        </LinkItem>
      </LinkList>
    </Column>
    */}
    <Column>
      <Header>Kontakt</Header>
      <LinkList>
        <LinkItem>Michał Majer</LinkItem>
        <LinkItem>+48 781 521 470</LinkItem>
      </LinkList>
    </Column>
  </FooterContainer>
)

export default Footer
