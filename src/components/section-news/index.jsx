import React from 'react';

import Section from '../section';
import SummaryLink from '../summary-link';

const SectionNews = ({ news }) => {
  console.log("news", news)
  if (!news.length) return null;
  return (
    <Section title="Updates">
      {news.map((one_news) => (
        <SummaryLink
          key={one_news.name}
          name={one_news.name}
          link={one_news.link}
          description={one_news.description}
        />
      ))}
    </Section>
  );
};

export default SectionNews;
