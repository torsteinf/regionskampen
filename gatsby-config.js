module.exports = {
  siteMetadata: {
    title: `Regionskampen`,
    description: `Ridabu mot Ingeberg. En kamp i året.`,
    author: `Torstein Frogner`,
    siteUrl: `https://regionskampen.net`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Regionskampen`,
        short_name: `Regionskamp`,
        start_url: `/`,
        background_color: `#183B66`,
        theme_color: `#183B66`,
        display: `standalone`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
        include_favicon: true, // Include favicon
        crossOrigin: `use-credentials`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-117828415-1",
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Secular One`,
            subsets: [`latin`],
          },
          {
            family: `Josefin Sans`,
            subsets: [`latin`],
          },
          {
            family: `Open Sans`,
            subsets: [`latin`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/kamprapporter`,
        name: `kamprapporter`
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/nyheter`,
        name: `nyheter`
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: `images`
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/fotoalbum`,
        name: `fotoalbum`
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/spillere`,
        name: `spillere`
      },
    },
    "gatsby-transformer-json",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data`,
        name: `data`
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // In your gatsby-transformer-remark plugin array
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1500
            },
          },
          
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    'gatsby-plugin-offline',
    `gatsby-mdx`,
  ],
}
