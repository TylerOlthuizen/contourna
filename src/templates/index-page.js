import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "components/Layout";
import Features from "components/Features";
import BlogRoll from "components/BlogRoll";
import FullWidthImage from "components/FullWidthImage";
import Hero from "components/Hero";


// eslint-disable-next-line
export const IndexPageTemplate = ({
  heroImage,
  title,
  subheading,
  description,
  ctaTitle,
  ctaPath,
}) => {
  console.log(ctaTitle);
  return (
    <div>
      <Hero img={heroImage} title={title} subheading={subheading} ctaTitle={ctaTitle} ctaPath={ctaPath} />
      <section className="section section--gradient">
        <div className="container">
          <div className="section">

          </div>
        </div>
      </section>
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
  // intro: PropTypes.shape({
  //   blurbs: PropTypes.array,
  // }),
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
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        heroImage {
          publicURL
        }
        heading
        subheading
        ctaTitle
        ctaPath
        description

      }
    }
  }
`;
