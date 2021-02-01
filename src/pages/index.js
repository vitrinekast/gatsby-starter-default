import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  console.log(data.gcms);
  const projects = data.gcms.allProjects;
  return (
    <Layout>
      <SEO title="Home" />
      <pre>{JSON.stringify(data, null, 4)}</pre>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      {projects.map((project, index) => (
        <li key={index}><a href={project.slug}> {project.title}</a></li>
      ))}


      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    gcms {
      allProjects {
        slug,
        title
      }
    }
  }


`
export default IndexPage