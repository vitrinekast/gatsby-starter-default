// /**
//  * Implement Gatsby's Node APIs in this file.
//  *
//  * See: https://www.gatsbyjs.com/docs/node-apis/
//  */

exports.createPages = async function ({ actions, graphql }) {
    const { data } = await graphql(`
    query MyQuery {
        gcms {
        allProjects {
            id
            title
            slug
            }
        }
    }
  `)
    console.log(data);
    data.gcms.allProjects.forEach(edge => {
        actions.createPage({
            path: edge.slug,
            component: require.resolve(`./src/templates/project-page.js`),
            context: { slug: edge.slug },
        })
    })
}