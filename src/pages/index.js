import * as React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const IndexPage = ({ data }) => {
  //console.log(data);
  return (
    <Layout>
      <Seo title="Home" />
      <div>
        <h1>Inside Jared's Head</h1>
        <h4>{data.allMarkdownRemark.totalCount}</h4>
        {
          data.allMarkdownRemark.edges.map(({node}) => (
            <div key={node.id}>
              <span>{ node.frontmatter.title } - { node.frontmatter.date }</span>
              <p>{ node.excerpt }</p>
            </div>
          ))
        }
      </div>
    </Layout>
  );
};

export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            date
            description
            title
          }
          excerpt
        }
      }
    }
  }
`
