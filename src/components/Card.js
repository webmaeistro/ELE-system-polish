import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
  position: relative;
  background: #fff;
  border-radius: 5px;
  padding: 2em 0;
  height: 250px;
  width: 250px;
  margin: 15px;
  box-sizing: border-box;
  transition: 0.3s ease;
  box-shadow: 0 3px 10px -2px rgba(0, 0, 0, 0.35);

  &:hover {
    // margin: 0 50px 50px 50px;
    background-color: #eba023;
    box-shadow: 0px 15px 20px rgb(235, 160, 35, 0.2);
    transform: translateY(-5px);
  }
`

const ACard = styled.div`
  position: relative;
  background: #fff;
  border-radius: 5px;
  max-height: 150px;
  width: 300px;
  margin: 30px;
  box-sizing: border-box;
  transition: 0.3s ease;
  box-shadow: 0 3px 10px -2px rgba(0, 0, 0, 0.35);
`

const CardContent = styled.div`
  position: absolute;
  opacity: 0;
  top: 15px;
  left: 15%;
  width: 80%;
  margin: 0 auto;

  display: block !important;
  margin: 0 auto;
  opacity: 1;
  transition: ease-in-out 1s;
`

const CardHeader = styled.h1`
  font-weight: 700;
  font-size: 2rem;
  margin: 10px 0;

  ${Card}:hover & {
    color: #fff;
  }
`

const Avatar = styled.img`
  // vertical-align: middle;
  margin-left: -50px;
  width: 90px;
  // height: 50px;
  border-radius: 50%;
`

const CustomerCompany = styled.h2`
  color: grey;
  font-size: 10px;
  margin-bottom: 10px;
`

const TestimonyContainer = styled.div`
  margin: 10px;
  background: #fff;
  border-radius: 10px;
  padding: 40px;
  box-sizing: border-box;
  transition: 0.3s ease;
  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.08),
    0px 20px 31px 3px rgba(0, 0, 0, 0.09), 0px 8px 20px 7px rgba(0, 0, 0, 0.02);
`

const Logo = styled.img`
  vertical-align: middle;
  width: 190px;
  margin-bottom: 15px;
`

const CustomerTestinomy = styled.p`
  font-size: 14px;
  max-width: 190px;
  text-align: justify;
  line-height: 15px;
  font-style: oblique;
`

const CustomerName = styled.h1`
  font-size: 15px;
  margin: 0;
  text-align: right;
`

const TestimonyCard = ({ title, description }) => (
  <TestimonyContainer>
    <Logo src={'http://www.majery.pl/images/logo.png'} />
    <CustomerTestinomy>{description}</CustomerTestinomy>
    <CustomerName>
      {title}
      <br /> <a href="#">majery.pl</a>
    </CustomerName>
  </TestimonyContainer>
)

const FeatureCard = ({ title, description }) => (
  <Card>
    <CardContent>
      <CardHeader>{title}</CardHeader>
      <p styles={{ marginTop: '5px' }}>{description}</p>
    </CardContent>
  </Card>
)

const AvatarCard = ({ title, description }) => (
  <ACard>
    <Avatar
      src={
        'http://agenciturystyczni.pl/biuro-podrozy/8387-dzieciece-centrumtanca-majery-maciej-majer.jpg'
      }
    />
    <CardContent>
      <CustomerName>Maciej Majer</CustomerName>
      <CustomerCompany>DCT Majery</CustomerCompany>
      <CustomerTestinomy>
        Lorem impus dor mit set, lorem impus dor mit set.
      </CustomerTestinomy>
    </CardContent>
  </ACard>
)

export { FeatureCard, AvatarCard, TestimonyCard }
