import type { NextPage } from 'next'
import styled from 'styled-components'
import colors from '../styles/colors'
import Account, { AccountProps } from './Account'

type ContactsProps = {
  readonly accounts: Array<AccountProps>;
}

const Contacts = (props: ContactsProps) => {
  return (
    <ContactsContainer>
      <Title>Contacts</Title>
      <Info>
        {props.accounts.map(ac => <Account {...ac}></Account>)}
      </Info>
    </ContactsContainer>
  )
}

const ContactsContainer = styled.div`
  display: inline-block;
  padding: 1rem;
  border: solid thin ${colors.background.subsub};
  min-width: ${91 * 0.3}rem;
`

const Info = styled.div`
  display: block;
`

const Title = styled.p`
  weight: bold;
  font-size: 2rem;
  margin: 0;
  color: ${colors.text.base}
`

export default Contacts;
export type { ContactsProps };
