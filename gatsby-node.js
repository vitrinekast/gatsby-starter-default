// /**
//  * Implement Gatsby's Node APIs in this file.
//  *
//  * See: https://www.gatsbyjs.com/docs/node-apis/
//  */

exports.createPages = async function ({ actions, graphql }) {
    const { data } = await graphql(`
    query MyQuery {
        gcms {
            allPages {
                slug
            }
            allProjects {
                slug
            }
        }
    }
    
  `)
    
    data.gcms.allPages.forEach(edge => {
        
        actions.createPage({
            path: edge.slug,
            component: require.resolve(`./src/templates/static-page.js`),
            context: { slug: edge.slug },
        })
    })

    data.gcms.allProjects.forEach(edge => {
        actions.createPage({
            path: `projects/${edge.slug}`,
            component: require.resolve(`./src/templates/project-page.js`),
            context: { slug: edge.slug },
        })
    })
}