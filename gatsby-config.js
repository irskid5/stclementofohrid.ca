module.exports = {
  siteMetadata: {
    title: `St. Clement of Ohrid`,
    description: `Official website of St.Clement of Ohrid Macedonian Orthodox Cathedral Toronto, Ontario.  Visit us for more info on events and our banquet halls`,
    author: `@VeleTosevski`,
    keywords:
      "Macedonia, Orthodox, Banquet Hall, Events, Parties, Christianity",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-netlify-cms`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
