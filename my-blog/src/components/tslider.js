import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import { render } from "react-dom"

export const Tslider= () => {
  // useStaticQueryを使いgraphqlを実行して、dataに格納
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title          
          }
        }
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
    ` 
  )

  const posts = data.allMarkdownRemark.edges

  var nodes = [];
  var titles = [];
  var dates = [];
  for ( var i = 0; i < 5; i++ ) {
    const node = posts[i].node
    nodes.push(node)
    const title = nodes[i].frontmatter.title || nodes[i].fields.slug
    titles.push(title)
    const date = nodes[i].frontmatter.date
    dates.push(date)
  }

  return (
    <div class="my-slider">
        <div>
            <h3
              style={{
                marginBottom: rhythm(1 / 4),
              }}
            >
              <Link style={{ boxShadow: `none` }} to={"/public/" + nodes[0].fields.slug}>
                  {titles[0]}
              </Link>
            </h3>
            <small>{dates[0]}</small>
        </div>
        <div>
            <h3
              style={{
                marginBottom: rhythm(1 / 4),
              }}
            >
              <Link style={{ boxShadow: `none` }} to={"/public/" + nodes[1].fields.slug}>
                  {titles[1]}
              </Link>
            </h3>
            <small>{dates[1]}</small>
        </div>
        <div>
            <h3
              style={{
                marginBottom: rhythm(1 / 4),
              }}
            >
              <Link style={{ boxShadow: `none` }} to={"/public/" + nodes[2].fields.slug}>
                  {titles[2]}
              </Link>
            </h3>
            <small>{dates[2]}</small>
        </div>
        <div>
            <h3
              style={{
                marginBottom: rhythm(1 / 4),
              }}
            >
              <Link style={{ boxShadow: `none` }} to={"/public/" + nodes[3].fields.slug}>
                  {titles[3]}
              </Link>
            </h3>
            <small>{dates[3]}</small>
        </div>
        <div>
            <h3
              style={{
                marginBottom: rhythm(1 / 4),
              }}
            >
              <Link style={{ boxShadow: `none` }} to={"/public/" + nodes[4].fields.slug}>
                  {titles[4]}
              </Link>
            </h3>
            <small>{dates[4]}</small>
        </div>
    </div>
  )
}
