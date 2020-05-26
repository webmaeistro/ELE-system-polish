import React from 'react'
import styled from 'styled-components'

import { FeatureCard } from './Card'

const FeatureListContainer = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`

const CardListContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const FeatureList = () => (
  <FeatureListContainer>
    <h1>Funkcje systemu</h1>
    <CardListContainer>
      <FeatureCard
        title="Kursanci"
        description="Przechowuj wszystkie informacje o swoich klientach. "
      />

      <FeatureCard
        title="Grupy"
        description="Make perfectly hot homemeade coffe. Carefully pour into coffee cup"
      />

      <FeatureCard
        title="Płatności"
        description="Make perfectly hot homemeade coffe. Carefully pour into coffee cup"
      />

      <FeatureCard
        title="Pracownicy"
        description="Make perfectly hot homemeade coffe. Carefully pour into coffee cup"
      />

      <FeatureCard
        title="Lista obecności"
        description="Make perfectly hot homemeade coffe. Carefully pour into coffee cup"
      />

      <FeatureCard
        title="Zapisy online"
        description="Make perfectly hot homemeade coffe. Carefully pour into coffee cup"
      />

      <FeatureCard
        title="SMSy"
        description="Make perfectly hot homemeade coffe. Carefully pour into coffee cup"
      />

      <FeatureCard
        title="Raporty"
        description="Make perfectly hot homemeade coffe. Carefully pour into coffee cup"
      />
    </CardListContainer>
  </FeatureListContainer>
)

export default FeatureList
