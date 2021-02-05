import { graphql } from "gatsby"
import React from "react"
import FileListItem from "../components/FileListItem"
import Header from "../components/header"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <Header title="/" />

      <ul className="list--files">
        {data.gcms.allPages.map((page, index) => (
          <FileListItem
            to={page.slug}
            key={index}
            label={page.title}
          ></FileListItem>
        ))}

        <FileListItem to="projects" label="Projects"></FileListItem>

        <ul className="list--nested">
          {data.gcms.allProjects.map((project, index) => (
            <FileListItem
              to={`projects/${project.slug}`}
              key={index}
              label={project.title}
            ></FileListItem>
          ))}
        </ul>
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    gcms {
      allPages {
        title
        slug
      }
      allProjects {
        slug
        title
        allBlocks(first: 1) {
          media(first: 1) {
            id
            url(transformation: { image: { resize: { width: 400 } } })
          }
        }
      }
    }
  }
`
export default IndexPage
