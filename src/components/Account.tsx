import styled, { css } from 'styled-components'
import colors from '../styles/colors'

type AccountProps = {
  readonly service: string;
  readonly icon: string;
  readonly url: string;
}

const Account = (props: AccountProps) => {
  return (
    <AccountComponent>
      <Service {...props}>{props.service}</Service>
      <Url href={props.url}>{props.url}</Url>
    </AccountComponent>
  )
}

const AccountComponent = styled.div`
  display: inline-block;
  width: 100%;
  margin-bottom: 1em;
`

const Service = styled.p<AccountProps>`
  display: inline-block;
  color: ${colors.text.base};
  margin: 0;
  margin-right: 1em;
  min-width: 5rem;
  &:before {
    content: '';
    display: inline-block;
    background-size: contain;
    background-image: ${(props) => `url(${props.icon})`};
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
    margin-right: 5px;
  }
`

const Url = styled.a`
  display: inline-block;
  color: ${colors.text.accent};
  text-decoration: none;
  &:link {
    color: ${colors.text.accent};
    text-decoration: none;
  }
  &:visited {
    color: ${colors.text.accent};
    text-decoration: none;
  }
`

export default Account;
export type { AccountProps };
