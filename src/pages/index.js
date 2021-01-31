import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <SEO title="Home" />
      <pre>{JSON.stringify(data, null, 4)}</pre>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      {/* <StaticQuery
        query={query}
        render={data => (
          <ul>
            {data.allStrapiRestaurant.edges.map(restaurant => (
              <li key={restaurant.node.strapiId}>{restaurant.node.name}</li>
            ))}
          </ul>
        )}
      /> */}
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>
  )
}

// export const query = graphql`
// query {
//   allStrapiRestaurant! {
//     edges {
//       node {
//         strapiId
//         name
//         description
//       }
//     }
//   }
// }
// `
export default IndexPage