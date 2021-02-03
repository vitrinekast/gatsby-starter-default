import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  // const projects = data.gcms.allProjects.concat(data.gcms.allProjects).concat(data.gcms.allProjects)
  const projects = data.gcms.allProjects

  return (
    <Layout>
      <SEO title="Home" />
      <ul className="list--grid">
        {projects.map((project, index) => {
          const img = project.allBlocks[0]?.media[0];
          return (
            <li key={index} className='list__item card--project'>
              <Link to={`/projects/${project.slug}`}>
                <img  className='media--fit' src={img?.url}/>
                <h3 className='card__title'>{project.title}</h3>
              </Link>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    gcms {
      allProjects {
        slug
        title
        allBlocks(first: 1) {
          media(first: 1) {
            id
            url(transformation: {image: {resize: {width: 400}}})
          }
        }
      }
    }
  }
`
export default IndexPage
