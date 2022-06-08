import type { NextPage } from 'next'
import styled from 'styled-components'
import colors from '../styles/colors'

export type EventProps = {
  date: Date;
  detail: string;
}

export const Event = (props: EventProps) => {
  return (
    <Content>
      <Date>{props.date.getFullYear()}-{props.date.getMonth() + 1}</Date>
      <Detail>{props.detail}</Detail>
    </Content>
  )
}

const Content = styled.div`
  color: ${colors.text.base}
`

const Date = styled.p`
  display: inline-block;
  margin: 0;
  width: 4rem;
`
const Detail = styled.p`
  display: inline-block;
  margin: 0;
`
