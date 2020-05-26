import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import HeroImage from './heroImage'
import Feature from './Feature'
// import FeatureList from './FeatureList'
import FeatureListSimple from './FeatureListSimple'
import Testimonials from './Testimonials'
import PricingTable from './PricingTable/index.js'
import SimplePricing from './SimplePricing'
import Footer from './Footer'

import TryForFreeBar from './TryForFreeBar/index.js'

// import integration from '../images/integration.png'
import bot from '../images/undraw_artificial_intelligence_upfn.svg'
import fileter from '../images/undraw_filter_4kje.svg'
import online from '../images/undraw_credit_card_payment_12va.svg'
import add_payment from '../images/add_payment.png'

import swimming from './TryForFreeBar/Photos/swimming.jpg'
import fighting from './TryForFreeBar/Photos/fighting.jpg'
import language from './TryForFreeBar/Photos/language.jpg'
import dancing from './TryForFreeBar/Photos/dancing.jpg'
import classRoom from './TryForFreeBar/Photos/class.jpg'

import './layout.css'

const TopContainer = styled.div`
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpolygon fill='%23cde0ff' points='1600 160 0 460 0 350 1600 50'/%3E%3Cpolygon fill='%239bc1ff' points='1600 260 0 560 0 450 1600 150'/%3E%3Cpolygon fill='%2369a2ff' points='1600 360 0 660 0 550 1600 250'/%3E%3Cpolygon fill='%233783ff' points='1600 460 0 760 0 650 1600 350'/%3E%3Cpolygon fill='%230564ff' points='1600 800 0 800 0 750 1600 450'/%3E%3C/g%3E%3C/svg%3E");
  // background-attachment: fixed;
  background-position: 50% 350px;
  background-repeat: no-repeat;
  background-size: cover;
`

const FeaturesContainer = styled.div`
  // background-color: #ffffff;
  // background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='3000' height='2000' viewBox='0 0 900 600'%3E%3Cg fill-opacity='0.65'%3E%3Cpath fill='%230564ff' d='M306.9 210.2c-1.2-22.8-13.5-42.7-40.8-41.1c-18.3 1.1-35.9 3.6-47.5 20.1c-5.2 7.4-10.6 15.6-11.4 24.9c-0.5 5.8 0.2 12 1.2 17.7c9 49.6 85.3 46.7 96.4 0.2C306.6 224.9 307.3 217.4 306.9 210.2z'/%3E%3Cpath fill='%23105dff' d='M137.2 481.3c-13.2-9.9-31.2-13.3-48.5-3.2c-12.6 7.3-19.1 17.4-21.1 28.2c-0.7 2.4-1.2 4.7-1.5 7c-8.2 35.4 33.7 78.9 72.6 48.6C167.6 539.3 164.4 501.6 137.2 481.3z'/%3E%3Cg fill='%231b57ff' %3E%3Cpath d='M547.9 588.3c-7.1-34.2-61.6-52.7-87.5-16.9c-11.2 11.3-12.7 26.3-7.6 39.7c1.8 7.5 5.5 13.9 10.4 19.1c19.4 20.3 53.4 26.2 72.8 1.9C545.9 619.7 553.9 604.2 547.9 588.3z'/%3E%3Cpath d='M547.9-11.7c-7.1-34.2-61.6-52.7-87.5-16.9c-11.2 11.3-12.7 26.3-7.6 39.7c1.8 7.5 5.5 13.9 10.4 19.1c19.4 20.3 53.4 26.2 72.8 1.9C545.9 19.7 553.9 4.2 547.9-11.7z'/%3E%3C/g%3E%3Cpath fill='%232652ff' d='M849.7 498c-22.3 1.3-43.2 7.5-52.7 29.5c-3.3 7.7-7.3 15.7-7 24.3c2 55.6 86.1 63.4 98.8 10.1C890.6 554.6 877.3 496.4 849.7 498z'/%3E%3Cpath fill='%23314eff' d='M762 291.1c-8.2-6.1-19.1-1.9-27.3 2.2c-7.4 3.7-14.4 8.2-21.6 12.1c-6.6 3.6-13.7 7-19.8 11.5c-18.3 13.5-2.5 45.1 10.6 56.4c17 14.6 41.6 15.9 59.6 2.1C794.1 351.8 790.7 312.4 762 291.1z'/%3E%3Cpath fill='%233c4cff' d='M863.3 170.3c-4.5-15.7-17.9-28.8-33.4-34.4c-16.2-5.8-38.4-2.9-51.8 8.1c-14.9 12.2-14.5 31.7-11.4 49c9.6 53.9 84.3 47.7 97-1.3C865.6 184.4 865.3 177.1 863.3 170.3z'/%3E%3Cpath fill='%23474bff' d='M598.4 86.1c-10.2 15.5-9.3 34.2-0.9 50.4c2.6 5 6.2 9.5 10.4 13.2c14.2 12.6 35.5 17.1 53.2 9.5c14.3-6.1 23.9-19.8 26.7-34.7C707.4 75.6 629.7 38.5 598.4 86.1z'/%3E%3Cpath fill='%235752ff' d='M509.8 413.3c-17.3 22.6-11.8 59 17.5 75.3c22.6 12.6 52.2 1.7 63.8-20.9c21.4-42-9.2-85-56.5-71C523.8 399.9 515.6 405.8 509.8 413.3z'/%3E%3Cpath fill='%236c5dff' d='M607.4 232.3c-0.5-0.4-1-0.8-1.4-1.2c-16.5-12.8-30.2-22.1-50.3-8.4c-15.5 10.6-29 30.3-31.4 49.1c-4.2 33.6 30.6 46.9 58.6 40.6C619.6 304.2 640.6 259.5 607.4 232.3z'/%3E%3Cpath fill='%237f67ff' d='M410.6 95c-36.5 1.3-74.1 41.8-43.1 74.3c19.8 20.9 54.4 20.7 74.6 0.5c20.5-20.4 18.4-53.1-6.9-68.6C427.7 96.6 419.2 94.7 410.6 95z'/%3E%3Cpath fill='%239072ff' d='M291.3 23c-0.1-0.1-0.1-0.1-0.2-0.2c-14.2-16.9-38.3-25.6-61.4-12.3c-13.5 7.8-20.5 18.7-22.7 30.2c-5.7 18 1.5 34.2 14.2 44.8c15.4 16.8 40.3 24.1 64.2 5.5c9.6-7.4 15-16.3 17.2-25.4C308.6 48.8 302.7 33.6 291.3 23z'/%3E%3Cpath fill='%23a07dff' d='M419.1 440.6c-16.9-14.5-41.8-21.5-61.7-9.5c-18.3 11.1-1 100.1 32.2 93.5c23.8-4.7 45.3-22.4 48.1-44.3C439.6 466.1 431.5 451.3 419.1 440.6z'/%3E%3Cpath fill='%23af88ff' d='M127 227c-12-4.3-25.4-2.1-38.7 11.4C71 255.9 61.4 286.1 80.4 306c21.3 22.3 86.9 27.5 89.6-14.9c0.5-8.9-2.7-17.9-6.5-25.8C155.1 248.3 142.1 232.5 127 227z'/%3E%3Cpath fill='%23bd93ff' d='M281.5 407.6c-0.3-0.4-0.7-0.7-1-1c-19.3-17.6-59.1-0.6-78.1 10.3c-23.8 13.7-8.2 41.1 5.4 55.8c16.3 17.6 42.7 25.2 68 5.8C291.3 466.6 295.5 422.7 281.5 407.6z'/%3E%3Cpath fill='%23ca9eff' d='M137.9 110.2c-10.4-25.7-43.3-32.1-67-23.6C60.1 90.4 50 97.8 45.1 108.6c-21.2 47.3 44.9 81.1 78.5 51c9.5-8.5 17.3-18.9 17.4-32.4C141 120.8 139.9 115.1 137.9 110.2z'/%3E%3Cpath fill='%23d5a9ff' d='M344.3 284.7c-10 14.9-9.2 34.1-0.9 49.5c3.4 6.3 8.6 13.8 16.1 15.8c7.1 1.9 15.1 0.7 22.1-0.6c15.7-3 45.6-10.5 52.3-26.8C453.5 274.4 375.6 237.9 344.3 284.7z'/%3E%3Cg fill='%23deb4ff' %3E%3Cpath d='M-29.2 431.8c23.4 12.4 54.1 1.7 66.1-20.6c9.6-17.8 10.4-40.4-3.3-56.5c-10.5-12.4-44.2-25.8-58.5-11.3c-3 3.1-5.1 7.1-6.9 10.9C-41.1 373.2-55 418.1-29.2 431.8z'/%3E%3Cpath d='M870.8 431.8c23.4 12.4 54.1 1.7 66.1-20.6c9.6-17.8 10.4-40.4-3.3-56.5c-10.5-12.4-44.2-25.8-58.5-11.3c-3 3.1-5.1 7.1-6.9 10.9C858.9 373.2 845 418.1 870.8 431.8z'/%3E%3C/g%3E%3Cpath fill='%23e7bfff' d='M671.4 460.5c-10.7 1.7-20.2 8.3-26.2 22.2c-21.5 49.5 45.4 84.9 79.4 53.3c16.3-15.2 24-31 6.5-48.1c-5.9-5.8-12.3-11-19.1-15.6C699.5 463.7 684.5 458.4 671.4 460.5z'/%3E%3C/g%3E%3C/svg%3E");
  // background-attachment: fixed;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <TopContainer>
          <Header siteTitle={data.site.siteMetadata.title} />
          <HeroImage />
        </TopContainer>
        <FeaturesContainer>
          <div
            style={{
              margin: '0 auto',
              maxWidth: 1960,
              padding: '0px 1.0875rem 1.45rem',
              paddingTop: 0,
            }}
          >
            <Feature
              header={'Pozwól, że zrobię to sam  - za Ciebie!'}
              description={
                'System używa algorytów sztucznej inteligencji, aby dopasować przelewy z banku do klienta. Wystarczy zaimportować wyciąg bankowy i poczekać na rezultaty, a Ty w tym czasie możesz zorganizować dodatkowe zajęcia!'
              }
              image={bot}
            />
            <Feature
              header={'Pełna kontrola nad wpłatami'}
              description={
                'Mimo wsparcia sztucznej inteligencji, cały czas zachowasz kontrolę nad wpłatami i saldem kursantów. Obsługuj opłaty: wpisowe, ratalne, grupowe, z góry i inne. Elastyczne formy płatności zwiększą elastyczność Twojej firmy i zachęcą więcej klientów.'
              }
              image={add_payment}
              direction={'row-reverse'}
            />
            <Feature
              header={'Zapisy i płatności online'}
              description={
                'Ułatwij swoim klientom rejestracje na zajęcia i przeprowadzenie płatności poprzez umieszczenie formularza zapisu on-line na swojej stronie'
              }
              image={online}
              //   header={'Import danych'}
              //   description={
              //     'Masz już bazę klientów? Automatycznie zaimportujemy ją do naszego systemu oraz pomożemy skonfigurować system pod Twoje wymagania.'
              //   }
              //   image={fileter}
            />
          </div>
        </FeaturesContainer>
        {/* <PricingTable /> */}

        {/* 
        <TryForFreeBar image={language} header={'Masz szkołę językową?'} />
        <TryForFreeBar image={dancing} header={'Organizujesz naukę tańca?'} />
        */}

        <TryForFreeBar
          image={swimming}
          header={'Prowadzisz szkołę pływania?'}
        />
        <FeatureListSimple />
        <TryForFreeBar
          image={fighting}
          header={'Prowadzisz klub sztuk walki?'}
        />
        {/* <SimplePricing /> */}
        <PricingTable />
        <TryForFreeBar
          image={classRoom}
          header={'Realizujesz zajęcia w grupach?'}
        />
        <Testimonials />
        {/* <FeatureList /> */}
        {/* {children} */}
        {/* </div> */}
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
