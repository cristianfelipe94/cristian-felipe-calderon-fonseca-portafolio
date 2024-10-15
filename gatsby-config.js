/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Cristian Felipe Calderón Fonseca`,
    description: `A portfolio to present my art and job experience`,
    author: `cristianpipe0494@gmail.com`,
    siteUrl: `https://cristianfelipe94.github.io/Portfolio-Online/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-postcss`,
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
        name: `cristian-felipe-portfolio`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#342e3d`,
        display: `minimal-ui`,
        icon: `src/images/icon-art-100.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
