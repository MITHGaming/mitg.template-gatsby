module.exports = {
  siteMetadata: {
    title: `MITG Template Gatsby`,
    description: `É um template para a utilização para os próximos projetos em gatsby`,
    author: `@kamity`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-next-seo`,
      options: {
        titleTemplate: `MITG | %s`,
      },
    },
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
        name: `mitg-template-gatsby`,
        short_name: `mitg`,
        start_url: `/`,
        background_color: `#FFB923`,
        theme_color: `#FFB923`,
        display: `minimal-ui`,
        icon: `src/images/mitg-icon.svg`, // This path is relative to the root of the site.
      },
    },
  ],
};
