import type { NextPage } from 'next'
import styled from 'styled-components'
import colors from '../styles/colors'
import Card, { CardProps } from '../components/Card'

const accounts = [
  {
    service: "GitHub",
    icon: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    url: "https://github.com/myazakky"
  }
]

const me = {
  name: "Miyazaki",
  icon: "https://cdn.discordapp.com/avatars/546617163843108864/cec1a891257dd86c0ab0b8a50076cac6.png",
  accounts: accounts
}

const Home = () => {
  return (
    <HomeContainer>
      <Center>
        <Card {...me}></Card>
      </Center>
    </HomeContainer>
  )
}

const HomeContainer = styled.div`
  display: block;
  height: 100vh;
  width: 100vw;
  background-color: ${colors.background.main}
`

const Center = styled.div`
  display: flex;
  justify-content: center;
  border: solid thin ${colors.background.subsub}
`

export default Home
