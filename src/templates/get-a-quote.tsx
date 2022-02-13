import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

// eslint-disable-next-line
export const GetAFreeQuoteTemplate = ({ title, content, contentComponent }: GetAFreeQuoteTemplateProps) => {
  const PageContent = contentComponent || Content;
  return (
    <section className="section section--gradient">
      <div className="container">
        <PageContent className="content" content={content} />
      </div>
    </section>
  );
};

interface GetAFreeQuoteTemplateProps {
  title:string;
  content:string;
  contentComponent: React.ElementType
}

const GetAFreeQuote = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <GetAFreeQuoteTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};



export default GetAFreeQuote;

export const GetAFreeQuotePageQuery = graphql`
  query GetAFreeQuote($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
