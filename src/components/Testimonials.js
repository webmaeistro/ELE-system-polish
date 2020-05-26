import React from 'react'
import styled from 'styled-components'

import { TestimonyCard } from './Card'

import customers from '../images/undraw_wall_post_83ul.svg'

const TestimonialsContainer = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  margin: 25px auto;
`

const CardListContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const Testimonials = () => (
  <TestimonialsContainer>
    {/* <img src={customers} style={{ width: '900px' }} /> */}
    <h1>Nasi klienci</h1>
    <CardListContainer>
      <TestimonyCard
        title={'Maciej Majer'}
        description={
          'Od kiedy korzystamy z Gruplo nie muszę sam liczyć ile klienci powinni mi zapłacić. Mam ładną rozpiskę skąd konkretne kwoty przy każdym kliencie - i mi i im spadł problem z głowy.'
        }
        style={{ marginTop: '-20px' }}
      />
    </CardListContainer>
  </TestimonialsContainer>
)

export default Testimonials
