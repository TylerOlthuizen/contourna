import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "components/Layout";
import Features from "components/Features";
import BlogRoll from "components/BlogRoll";
import FullWidthImage from "components/FullWidthImage";
import Hero from "components/Hero";
import Services from "sections/Services";
import Solutions from "sections/Solutions";

// eslint-disable-next-line
export const IndexPageTemplate = ({
  heroImage,
  title,
  subheading,
  description,
  ctaTitle,
  ctaPath,
  services,
  solutions,
}) => {
  return (
    <div>
      <Hero img={heroImage} title={title} subheading={subheading} ctaTitle={ctaTitle} ctaPath={ctaPath} />
      <Services services={services} />
      <Solutions solutions={solutions} />
    </div>
  );
};

IndexPageTemplate.propTypes = {
  heroImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  ctaTitle: PropTypes.string,
  ctaPath: PropTypes.string,
  subheading: PropTypes.string,
  description: PropTypes.string,
  services: PropTypes.shape({
    ctaPath: PropTypes.string,
    ctaTitle: PropTypes.string,
    description: PropTypes.string,
    heading: PropTypes.string,
    service_stat_cards: PropTypes.array,
  }),
  solutions: PropTypes.shape({
    heading: PropTypes.string,
    home_solution_cards: PropTypes.array,
  }),
  
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        heroImage={frontmatter.heroImage}
        ctaTitle={frontmatter.ctaTitle}
        ctaPath={frontmatter.ctaPath}
        title={frontmatter.title}
        subheading={frontmatter.subheading}
        description={frontmatter.description}
        services={frontmatter.services}
        solutions={frontmatter.solutions}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

 
export const pageQuery = graphql`
query IndexPageTemplate {
  markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
    frontmatter {
      title
      heading
      subheading
      ctaTitle
      ctaPath
      description
      heroImage {
        publicURL
      }
      services {
        ctaPath
        ctaTitle
        description
        heading
        service_stat_cards {
          content
          image {
            publicURL
          }
          title
        }
      }
      solutions {
        heading
        home_solution_cards {
          content
          ctaPath
          ctaTitle
          title
          image {
            publicURL
          }
        }
      }
    }
  }
}
`;

