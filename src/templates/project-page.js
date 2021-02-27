import { graphql } from "gatsby"
import React from "react"
import FileListItem from "../components/FileListItem"
import Header from "../components/header"
import Image from "../components/image"
import Layout from "../components/layout"

export default function Project({ data }) {
  const project = data.gcms.project

  return (
    <Layout>
      <Header />

      <ul className="list--files">
        <FileListItem to="/"></FileListItem>
        {project.allBlocks.map((block, index) => (
          <React.Fragment key={index}>
            <FileListItem label={block.title} isOpen={true}></FileListItem>

            <div className="list__item--content">
              <article
                dangerouslySetInnerHTML={{ __html: block.body.html }}
              ></article>

              <ul className="list--images">
                {block.media.map((media, index) => { console.log(media); return (
                  <Image key={index} id={media.id} mimeType={media.mimeType}></Image>
                  
                )})}
              </ul>
            </div>
          </React.Fragment>
        ))}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    gcms {
      project(where: { slug: $slug }) {
        id
        title
        allBlocks {
          title
          blockType
          body {
            html
          }
          media {
            id
            mimeType
          }
        }
        slug
        description
      }
    }
  }
`
