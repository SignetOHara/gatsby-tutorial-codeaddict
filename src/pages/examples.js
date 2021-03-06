import React from "react";
import Header from "../examples/Header";
import HeaderStatic from "../examples/HeaderOldStatic";
import Layout from "../components/layout";
import { graphql } from "gatsby";

const examples = ({ data }) => {
  const {
    site: {
      info: { author },
    },
  } = data;

  return (
    <Layout>
      <p>Hello from Examples page!</p>
      <Header />
      <HeaderStatic />
      <h5>author : {author}</h5>
    </Layout>
  );
};

export const data = graphql`
  query MyQuery {
    site {
      info: siteMetadata {
        title
        description
        author
        data
        person {
          name
          age
        }
      }
    }
  }
`;

export default examples;
