import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

import { InputButton } from './Buttons/index'

const EmailInputContainer = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 5%;

  @media (max-width: 530px) {
    flex-direction: column;
  }
`

const EmailInput = styled.input`
  height: 60px;
  font-size: 22px;
  margin: 5px;
  letter-spacing: -0.1px;
  line-height: 20px;
  padding: 13px 16px;
  box-shadow: none;
  border: 1px solid #000;
`

class EarlyAccessSubscribe extends React.Component {
  state = { email: null }

  async registerEmialInMailchimp() {
    const response = await axios.post(
      'https://us15.api.mailchimp.com/3.0/lists/63688d5e20/members',
      {
        email_address: this.state.email,
        status: 'subscribed',
      },
      {
        withCredentials: true,
        auth: {
          username: 'gruplo',
          password: '7fa5233662fe15afb61596ca5e31c48e-us15',
        },
      }
    )

    console.log(response)
    // fetch('https://us15.api.mailchimp.com/lists/63688d5e20/members', {
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   method: 'POST',
    //   body: JSON.stringify({
    //     email_address: this.state.email,
    //     status: 'subscrubed',
    //   }),
    // })
    //   .then(res => {
    //     console.log(res)
    //   })
    //   .catch(err => {
    //     console.log(err)
    //   })
  }

  render() {
    const { email } = this.state
    return (
      <EmailInputContainer>
        <EmailInput
          value={email}
          onChange={e => this.setState({ email: e.target.value })}
          placeholder="E-mail"
        />
        <InputButton onClick={() => this.registerEmialInMailchimp()}>
          Wypróbuj Gruplo
        </InputButton>
      </EmailInputContainer>
    )
  }
}

export default EarlyAccessSubscribe
