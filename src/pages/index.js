import * as React from "react"
import { graphql, Link } from "gatsby"

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
        <h4>Number of posts: {data.allMarkdownRemark.totalCount}</h4>
        {
          data.allMarkdownRemark.edges.map(({node}) => (
            <div key={node.id}>
              <Link className={styles.postLink} to={node.fields.slug}>
                <span className={styles.blogTitle}>{ node.frontmatter.title } - { node.frontmatter.date }</span>
              </Link>
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            date
            description
            title
          }
          fields{
            slug
          }
          excerpt
        }
      }
    }
  }
`
