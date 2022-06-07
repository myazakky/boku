import type { NextPage } from 'next'
import Account, { AccountProps } from './Account'
import List from './List'

type ContactsProps = {
  readonly accounts: Array<AccountProps>;
}

const Contacts = (props: ContactsProps) => {
  return (
    <List<AccountProps> title="Contacts" list={props.accounts} element={Account} />
  )
}

export default Contacts;
export type { ContactsProps };
