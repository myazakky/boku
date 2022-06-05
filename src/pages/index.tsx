import type { NextPage } from 'next'
import styled from 'styled-components'
import colors from '../styles/colors'

const Home = () => {
  return (
    <HomeContainer>
    </HomeContainer>
  )
}

const HomeContainer = styled.div`
  display: block;
  height: 100vh;
  width: 100vw;
  background-color: ${colors.background.main}
`

export default Home
