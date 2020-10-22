import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import styles from "../components/products.module.css";
import Image from "gatsby-image";

const ComponentName = ({ data }) => {
  const {
    allContentfulProduct: { nodes: products },
  } = data;

  console.log(products);

  return (
    <Layout>
      <section className={styles.page}>
        {products.map(product => {
          return (
            <article key={product.id}>
              <Image
                fluid={product.image.fluid}
                alt={product.image.description}
              />
              <h3>
                {product.title}
                <span> ${product.price}</span>
              </h3>
              <Link to={`/products/${product.slug}`}>More Details</Link>
            </article>
          );
        })}
      </section>
    </Layout>
  );
};

export const query = graphql`
  {
    allContentfulProduct {
      nodes {
        price
        id
        title
        image {
          description
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        slug
      }
    }
  }
`;

export default ComponentName;
