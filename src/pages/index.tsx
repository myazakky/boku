import React from 'react'
import type { NextPage } from 'next'
import styled from 'styled-components'
import colors from '../styles/colors'
import Card, { CardProps } from '../components/Card'
import Contacts from '../components/Contacts'
import Log from '../components/Log'
import { createGlobalStyle } from 'styled-components'

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

const log = [
  {
    date: new Date("2004-04-05"),
    detail: "生誕"
  }
]

const Home = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <HomeContainer>
        <Center>
          <Card {...me}></Card>
        </Center>
        <Center>
          <Contacts accounts={accounts}></Contacts>
        </Center>
        <Center>
         <Log log={log}></Log>
        </Center>
      </HomeContainer>
    </React.Fragment>
  )
}

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${colors.background.main};
    margin: 0;
  }
`

const HomeContainer = styled.div`
  display: block;
  width: 100vw;
  background-color: ${colors.background.main}
`

const Center = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`

export default Home
