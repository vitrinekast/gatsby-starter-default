import { graphql } from "gatsby"
import React from "react"
import FileListItem from "../components/FileListItem"
import Header from "../components/header"
import Layout from "../components/layout"

export default function Static({ data }) {
  return (
    <Layout>
      <Header />

      <ul className="list--files">
        <FileListItem to="/"></FileListItem>

        <FileListItem to={data.gcms.page.slug} label={data.gcms.page.title} isOpen={true}> </FileListItem>

        <div class="list__item--content">
          <article
            dangerouslySetInnerHTML={{ __html: data.gcms.page.body.html }}
          ></article>
        </div>
      </ul>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    gcms {
      page(where: { slug: $slug }) {
        id
        title
        body {
          html
        }
      }
    }
  }
`
