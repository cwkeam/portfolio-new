import React from 'react';

import Section from '../section';
import SummaryLink from '../summary-link';

const SectionLinks = ({ links }) => {
  console.log(links)
  if (!links.length) return null;
  return (
    <Section title="Links">
      {links.map((onelink) => (
        <SummaryLink
          key={onelink.name}
          name={onelink.name}
          link={onelink.link}
        />
      ))}
    </Section>
  );
};

export default SectionLinks;
