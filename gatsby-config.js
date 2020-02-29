module.exports = {
  siteMetadata: {
    title: `St. Clement of Ohrid`,
    description: `Official website of St.Clement of Ohrid Macedonian Orthodox Cathedral Toronto, Ontario.  Visit us for more info on events and our banquet halls`,
    author: `@VeleTosevski`,
    menu: {
      links: [
        {
          name: "About",
          link: "/about",
        },
        {
          name: "Spiritual",
          link: "/spiritual",
        },
        {
          name: "Banquet Halls",
          link: "/banquethalls",
        },
        {
          name: "Events",
          link: "/events",
        },
        {
          name: "Groups",
          link: "/groups",
        },
      ],
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
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
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout.js`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `religious-blog`,
        path: `${__dirname}/src/_posts/religious_blog`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
