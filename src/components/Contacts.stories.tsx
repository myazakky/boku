import React from 'react';
import Contacts, { ContactsProps } from '../components/Contacts';

const config = {
  title: 'Components/Contacts',
  component: Contacts,
};

function Template(props: ContactsProps) {
  return <Contacts {...props} />;
}

const Basic = Template.bind({}) as any;
Basic.args = {
  name: "Miyazaki",
  icon: "https://cdn.discordapp.com/avatars/546617163843108864/cec1a891257dd86c0ab0b8a50076cac6.png",
  accounts: [
    {
      service: "e-mail",
      icon: "https://img.icons8.com/ios/344/apple-mail.png",
      url: "nimuc@outlook.com"
    },
    {
      service: "GitHub",
      icon: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      url: "https://github.com/myazakky"
  }]
};

export default config;
export { Basic };
