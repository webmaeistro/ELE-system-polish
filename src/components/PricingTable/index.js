import React from 'react'
import styled from 'styled-components'

import FeatureList from './FeatureList'
import { PricingButton, PricingButtonFeatured } from './PricingButton'

import { basic, advanced, enterprise } from './plans'

const Container = styled.div`
  // padding: 0 25px 25px;
  position: relative;
  width: 100%;
`

const Panel = styled.div`
  background-color: #fff;
  border-radius: 10px;
  // padding: 15px 25px;
  position: relative;
  width: 100%;
  z-index: 10;
`

const Table = styled(Panel)`
  display: flex;
  flex-direction: row;
  text-align: center;
  text-transform: uppercase;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`

const Plan = styled.div`
  border-bottom: 5px solid #e1f1ff;
  padding: 25px;
  margin: 25px;
  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.08),
    0px 20px 31px 3px rgba(0, 0, 0, 0.09), 0px 8px 20px 7px rgba(0, 0, 0, 0.02);

  @media (min-width: 900px) {
    border-bottom: none;
    border-right: 1px solid #e1f1ff;
    flex-basis: 100%;
    padding: 25px 50px;
  }

  &:last-child {
    border-bottom: none;
    border-right: none;
  }
`

const BestPlan = styled(Plan)`
  box-shadow: 0px 10px 13px -6px rgba(72, 170, 255, 0.08),
    0px 20px 31px 3px rgba(72, 170, 255, 0.09),
    0px 8px 20px 7px rgba(72, 170, 255, 0.4);
`

const Image = styled.img`
  margin-bottom: 25px;
  max-width: 100%;
`

const Header = styled.h2`
  color: #888;
  font-weight: 600;
  letter-spacing: 1px;
`

const Pricing = styled.span`
  color: #0564ff;
  display: block;
  font-size: 32px;
  font-weight: 700;
`

const PricingTable = () => (
  <div style={{ textAlign: 'center', margin: '30px 0px' }}>
    <h1> Cennik </h1>
    <p>
      Korzystanie z systemu Gruplo CRM jest darmowe podczas trwania testów.
      <br /> Prezentowane ceny są gwarantowane dla klientów zaarejestrowanych
      podczas okresu testowego.
    </p>

    <Container>
      <Table>
        <Plan>
          <Image src="https://s28.postimg.cc/ju5bnc3x9/plane.png" alt="" />
          <Header>Plan Amatorski</Header>
          <Pricing>49 ZŁ / miesięcznie</Pricing>
          <FeatureList items={basic} />
          <PricingButton href="#">Testuj za darmo</PricingButton>
        </Plan>
        <BestPlan>
          <Image src="https://s28.postimg.cc/ju5bnc3x9/plane.png" alt="" />
          <Header>Plan Mistrzowski</Header>
          <Pricing>99 ZŁ / miesięcznie</Pricing>
          <FeatureList items={advanced} />
          <PricingButtonFeatured href="#">
            Testuj za darmo
          </PricingButtonFeatured>
        </BestPlan>
        <Plan>
          <Image src="https://s21.postimg.cc/tpm0cge4n/space-ship.png" alt="" />
          <Header>Plan Olimpijski</Header>
          <Pricing>Wycena</Pricing>
          <FeatureList items={enterprise} />
          <PricingButton href="#">Kontakt</PricingButton>
        </Plan>
      </Table>
    </Container>
  </div>
)

export default PricingTable
