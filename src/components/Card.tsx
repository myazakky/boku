import type { NextPage } from 'next'
import styled from 'styled-components'
import colors from '../styles/colors'
import Account, { AccountProps } from './Account'

type CardProps = {
  readonly name: string;
  readonly icon: string;
  readonly accounts: Array<AccountProps>;
}

const Card = (props: CardProps) => {
  return (
    <CardContainer>
      <CardIcon src={props.icon}></CardIcon>
      <Info>
        <CardName>{props.name}</CardName>
        {props.accounts.map(ac => <Account {...ac}></Account>)}
      </Info>
    </CardContainer>
  )
}

const CardContainer = styled.div`
  background-color: ${colors.background.main};
  display: flex;
  height: ${55 * 0.3}rem;
  width: ${91 * 0.3}rem;
  padding: 1rem;
`

const Info = styled.div`
  display: block;
`

const CardIcon = styled.img`
  display: inline-block;
  padding-top: ${55 * 0.3 * 0.3}rem;
  padding-bottom: ${55 * 0.3 * 0.3}rem;
  height: ${(55 * 0.3 * 0.4)}rem;
  margin-right: 2rem;
  border-radius: 50%;
`

const CardName = styled.p`
  display: block;
  height: 40px;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  color: ${colors.text.base}
`

export default Card;
export type { CardProps };
