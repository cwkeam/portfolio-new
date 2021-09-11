import { graphql } from 'gatsby';
import get from 'lodash/get';
import React from 'react';

import Header from '../components/header';
import Layout from '../components/layout';
import SectionAbout from '../components/section-about';
import SectionBlog from '../components/section-blog';
import SectionExperience from '../components/section-experience';
import SectionNews from '../components/section-news';
import SectionProjects from '../components/section-projects';
import SectionSkills from '../components/section-skills';
import SectionLinks from '../components/section-links';

import SEO from '../components/seo';

const Index = ({ data }) => {
  const about = get(data, 'site.siteMetadata.about', false);
  const news = get(data, 'site.siteMetadata.news', false);
  const projects = get(data, 'site.siteMetadata.projects', false);
  const posts = data.allMarkdownRemark.edges;
  const experience = get(data, 'site.siteMetadata.experience', false);
  const skills = get(data, 'site.siteMetadata.skills', false);
  const links = get(data, 'site.siteMetadata.links', false)
  const noBlog = !posts || !posts.length;

  return (
    <Layout style={{backgroundColor: "#ddd"}}>
      <SEO />
      <Header metadata={data.site.siteMetadata} noBlog={noBlog} />
      {about && <SectionAbout about={about} />}
      {news && news.length && <SectionNews news={news} />}
      {projects && projects.length && <SectionProjects projects={projects} />}
      {!noBlog && <SectionBlog posts={posts} />}
      {experience && experience.length && (
        <SectionExperience experience={experience} />
      )}
      {skills && skills.length && <SectionSkills skills={skills} />}
      {links && links.length && <SectionLinks links={links} />}
    </Layout>
  );
};

export default Index;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        name
        title
        description
        about
        medium
        instagram
        author
        github
        linkedin
        news {
          name
          link
        }
        projects {
          name
          description
          link
          image
        }
        experience {
          name
          description
          link
        }
        skills {
          name
          description
        }
        links {
          name
          description
          link
        }
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 5
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
