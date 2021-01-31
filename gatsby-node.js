// /**
//  * Implement Gatsby's Node APIs in this file.
//  *
//  * See: https://www.gatsbyjs.com/docs/node-apis/
//  */

// // You can delete this file if you're not using it

// const slugify = (string) => {
//   return string.toString().toLowerCase()
//     .replace(/\s+/g, '-')           // Replace spaces with -
//     .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
//     .replace(/\-\-+/g, '-')         // Replace multiple - with single -
//     .replace(/^-+/, '')             // Trim - from start of text
//     .replace(/-+$/, '');            // Trim - from end of text
// }

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions;
//   const result = await graphql(
//     `
//         {
//           categories: allStrapiCategory! {
//             edges {
//               node {
//                 name
//               }
//             }
//           }
//         }
//       `
//   );

//   if (result.errors) {
//     throw result.errors;
//   }

//   // Create blog articles pages.
//   const categories = result.data.categories.edges;

//   const CategoryTemplate = require.resolve('./src/templates/category.js');

//   categories.forEach((category, index) => {
//     createPage({
//       path: `/category/${slugify(category.node.name)}`,
//       component: CategoryTemplate,
//       context: {
//         name: category.node.name,
//       },
//     });
//   });
// };