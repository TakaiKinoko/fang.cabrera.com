import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import {
  Layout,
  Hero,
  About,
  Courseworks,
  Featured,
  Projects,
  Contact,
  Performance,
  Blog,
} from '@components';
import styled from 'styled-components';
import { mixins, Main } from '@styles';

const MainContainer = styled(Main)`
  ${mixins.sidePadding};
  counter-reset: section;
`;

const IndexPage = ({ location, data }) => (
  <Layout location={location}>
    <MainContainer id="content">
      <Hero data={data.hero.edges} />
      <About data={data.about.edges} />
      <Courseworks data={data.jobs.edges} />
      <Featured data={data.featured.edges} />
      <Projects data={data.projects.edges} />
      <Performance data={data.performance.edges} />
      <Blog data={data.blog.edges} />
      <Contact data={data.contact.edges} />
    </MainContainer>
  </Layout>
);

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default IndexPage;

export const pageQuery = graphql`
  {
    hero: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/hero/" } }) {
      edges {
        node {
          frontmatter {
            title
            name
            subtitle
            contactText
          }
          html
        }
      }
    }
    about: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/about/" } }) {
      edges {
        node {
          frontmatter {
            title
            avatar {
              childImageSharp {
                fluid(maxWidth: 700, quality: 90, traceSVG: { color: "#64ffda" }) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            skills
          }
          html
        }
      }
    }
    jobs: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/courseworks/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            company
            range
            url
          }
          html
        }
      }
    }
    featured: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/featured/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            cover {
              childImageSharp {
                fluid(maxWidth: 700, quality: 90, traceSVG: { color: "#64ffda" }) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            tech
            github
            external
            show
          }
          html
        }
      }
    }
    projects: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/projects/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            image
            tech
            github
            external
            show
          }
          html
        }
      }
    }
    performance: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/performance/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
          }
          html
        }
      }
    }
    blog: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/blog/" } }) {
      edges {
        node {
          frontmatter {
            title
            avatar {
              childImageSharp {
                fluid(maxWidth: 700, quality: 90, traceSVG: { color: "#64ffda" }) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            skills
          }
          html
        }
      }
    }
    contact: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/contact/" } }) {
      edges {
        node {
          frontmatter {
            title
          }
          html
        }
      }
    }
  }
`;
