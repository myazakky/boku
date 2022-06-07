import type { NextPage } from 'next'
import styled from 'styled-components'
import colors from '../styles/colors'

type Props<T> = {
  readonly title: string;
  readonly list: Array<T>;
  readonly element: (props: T) => JSX.Element;
}

function Contacts<T>(props: Props<T>) {
  return (
    <Container>
      <Title>{props.title}</Title>
      <Info>
        {props.list.map(x => <props.element {...x}></props.element>)}
      </Info>
    </Container>
  )
}

const Container = styled.div`
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
export type { Props };
