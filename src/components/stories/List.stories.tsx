import React from 'react';
import List, { Props } from '../../components/List';
import Account, { AccountProps } from '../Account';

const config = {
  title: 'Components/List',
  component: List,
};

function Template(props: Props<AccountProps>) {
  return <List {...props} />;
}

const Basic = Template.bind({}) as any;
Basic.args = {
  title: "Contacts",
  list: [{
    service: "e-mail",
    icon: "https://img.icons8.com/ios/344/apple-mail.png",
    url: "nimuc@outlook.com"
  },
  {
    service: "GitHub",
    icon: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    url: "https://github.com/myazakky"
}],
  element: Account
};

export default config;
export { Basic };
