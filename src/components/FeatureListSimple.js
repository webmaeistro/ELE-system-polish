import React from 'react'
import styled from 'styled-components'

import { FeatureCard } from './Card'
import image from '../images/icons/group.png'
import customer from '../images/icons/customer.png'
import group from '../images/icons/group.png'
import chat from '../images/icons/chat.png'
import activities from '../images/icons/activities.png'
import presences from '../images/icons/presences.png'
import online from '../images/icons/online.png'
import money from '../images/icons/money.png'
import piggy from '../images/icons/piggy.png'
import notification from '../images/icons/notification.png'
import transfer from '../images/icons/transfer.png'
import settings from '../images/icons/settings.png'
import raport from '../images/icons/raport.png'

const Container = styled.div`
  margin: 25px auto;
  text-align: center;
  max-width: 1300px;
`

const FeatureListContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 3px;
  margin: 25px 0;

  @media (max-width: 1200px) {
    grid-template-columns: auto auto auto;
  }

  @media (max-width: 900px) {
    grid-template-columns: auto auto;
  }

  @media (max-width: 400px) {
    grid-template-columns: auto;
  }
`

const Element = styled.div`
  // display: flex;
  background-color: white;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 10px;
`

const LeftElement = styled(Element)`
  justify-content: flex-start;
`
const RightElement = styled(Element)`
  justify-content: flex-end;
`

const Image = styled.img`
  width: 64px;
  margin: 1px;
`

const Header = styled.h3`
  margin-bottom: 5px;
  word-spacing: 100vw;
  height: 75px;
`

const Description = styled.p`
  font-size: 15px;
  text-align: center;
`

const features = [
  {
    image: customer,
    header: 'Zarządzanie klientami',
    description:
      'Zarządzanie klientami, wyszukiwarka, śledzenie aktywności i rezygnacji, historia kontaktu z klientem.',
  },
  {
    image: group,
    header: 'Zarządzanie grupami',
    description:
      'Definiowanie grup poprzez wybór uczestników i opiekunów, ustalanie terminów zajęć.',
  },
  {
    image: chat,
    header: 'Stały kontakt',
    description:
      'Komunikacja poprzez sms lub e-mail. Możliwość wysłania wiadomości do jednej osoby, całej grupy lub wybrancyh klientów',
  },
  {
    image: activities,
    header: 'Planowanie zajęć',
    description:
      'Zaplanowanie zajęć indywidualnych, grupowych, cyklicznych i jednorazowch.',
  },
  {
    image: presences,
    header: 'Kontrola obecności',
    description:
      'Odznaczenie obecności, nieoboecności + powodu dla każdych przeprowadzonych zajęć.',
  },
  {
    image: online,
    header: 'Zapisy on-line',
    description:
      'Wygenerowanie i umieszczenie formularza do zapisów on-line na zajęcia.',
  },
  {
    image: money,
    header: 'Ustawienia płatności',
    description:
      'Naliczanie należności, wg skonfigurowane stawek. Możliwośc pobierania opłat w zależności od ilości zajęć, tygodniowo, miesięcznie, z góry i ratalnie.',
  },
  {
    image: piggy,
    header: 'Dopasowywanie wpłat',
    description:
      'Automatyczne dopasowywanie zaimportowanych wpłat do kursantów.',
  },
  {
    image: notification,
    header: 'Powiadomienia',
    description:
      'Automatyczna wysyłka wiadomości sms i/lub e-mail przypominające o koniecznościu uiszczenia wpłaty.',
  },
  {
    image: transfer,
    header: 'Import/eksport danych',
    description:
      'Migracja danych z innych systemów, import z Excela, export do Excela.',
  },
  {
    image: settings,
    header: 'Ustawienia',
    description: 'Dostoswanie działania systemu pod indywidualne wymagania',
  },
  {
    image: raport,
    header: 'Raporty',
    description:
      'Szczegółowe raporty, eksport do PDF, Excel, wykresy, statystki.',
  },
]

const FeatureList = () => (
  <Container>
    <h1>Funkcje systemu</h1>
    <FeatureListContainer>
      {features.map((item, index) => (
        <LeftElement key={index}>
          <Image src={item.image} />
          <Header>{item.header}</Header>
          <Description>{item.description}</Description>
        </LeftElement>
      ))}
    </FeatureListContainer>
  </Container>
)

export default FeatureList
