import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
export default function BlogPost({ data }) {
    
    const post = data.gcms.allProjects[0];
    return (
        <Layout>
            <div>
                <h1>{post.title}</h1>
            </div>
        </Layout>
    )
}
export const query = graphql`
  query($slug: String!) {
        gcms {
            allProjects(where: {slug:$slug}) {
                id
                title
            }
        }
  }
`