import type { NextPage } from 'next'
import Account, { AccountProps } from './Account'
import styled from 'styled-components'
import { Event, EventProps } from "./Event"

import List from './List'

type LogProps = {
  readonly log: Array<EventProps>;
}

const Log = (props: LogProps) => {
  return (
    <List<EventProps> title="Log" list={props.log} element={Event} />
  )
}

export default Log;
export type { LogProps };
