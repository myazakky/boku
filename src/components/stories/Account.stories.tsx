import React from 'react';
import Account, { AccountProps } from '../../components/Account';

const config = {
  title: 'Components/Account',
  component: Account,
};

function Template(props: AccountProps) {
  return <Account {...props} />;
}

const Basic = Template.bind({}) as any;
Basic.args = {
  service: "GitHub",
  icon: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
  url: "https://github.com/myazakky"
};

export default config;
export { Basic };
