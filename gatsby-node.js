const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(`
      {
        match: allMarkdownRemark (
          filter: {
            fileAbsolutePath: { glob: "**/src/kamprapporter/*.md" }
          }
        ) { 
          edges { 
            node {
              frontmatter { 
                slug
              }
            }
          }
        }
        nyheter: allMarkdownRemark (
          filter: {
            fileAbsolutePath: { glob: "**/src/nyheter/*.md" }
          }
        ) { 
          edges { 
            node {
              frontmatter { 
                slug
              }
            }
          }
        }
        fotoalbum: allMarkdownRemark(
          filter: {
            fileAbsolutePath: { glob: "**/src/fotoalbum/*.md" }
          }
        ) {
          edges {
            node {
              frontmatter {
                slug
              }
            }
          }
        }
      }
    `).then(results => {

      //Lager kamprapporter
      results.data.match.edges.forEach(({node}) => {
        createPage({
          path: `/${node.frontmatter.slug}`,
          component: path.resolve('./src/components/postLayout.js'),
          context: {
            slug: node.frontmatter.slug,
          }
        })
      })

      //Lager nyheter
      results.data.nyheter.edges.forEach(({node}) => {
        createPage({
          path: `/${node.frontmatter.slug}`,
          component: path.resolve('./src/components/newsLayout.js'),
          context: {
            slug: node.frontmatter.slug,
          }
        })
      })

      // Lager fotoalbum
      results.data.fotoalbum.edges.forEach(({node}) => {
        createPage({
          path: `/${node.frontmatter.slug}`,
          component: path.resolve('./src/components/fotoLayout.js'),
          context: {
            slug: node.frontmatter.slug,
          }
        })
      })

  })
}