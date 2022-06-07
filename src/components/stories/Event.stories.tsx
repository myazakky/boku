import React from 'react';
import { Event, EventProps } from '../../components/Event';

const config = {
  title: 'Components/Event',
  component: Event,
};

function Template(props: EventProps) {
  return <Event {...props} />;
}

const Basic = Template.bind({}) as any;
Basic.args = {
  date: new Date(0),
  detail: "世界創造"
};

export default config;
export { Basic };
