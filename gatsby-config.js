module.exports = {
  siteMetadata: {
    title: `Clearbot`,
    description: `A autonomous swarm robotics system to clean our oceans`,
    author: `@utkarsh867`,
    siteUrl: "https://www.clearbot.dev/",
  },
  proxy: [
    {
      prefix: "/api",
      url: "http://localhost:7071",
    },
  ],
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
        icon: `src/images/logo.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.svg$/,
        },
      },
    },
    "gatsby-plugin-cname",
    `gatsby-plugin-offline`,
  ],
}
