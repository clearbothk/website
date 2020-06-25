module.exports = {
  siteMetadata: {
    title: `Clearbot`,
    description: `A autonomous swarm robotics system to clean our oceans`,
    author: `@utkarsh867`,
    siteUrl: "https://www.clearbot.dev/",
    taco: [
      "Aerosol",
      "Aluminium foil",
      "Battery",
      "Aluminium blister pack",
      "Carded blister pack",
      "Clear plastic bottle",
      "Glass bottle",
      "Other plastic bottle",
      "Plastic bottle cap",
      "Metal bottle cap",
      "Broken glass",
      "Drink can",
      "Food Can",
      "Corrugated carton",
      "Drink carton",
      "Egg carton",
      "Meal carton",
      "Other carton",
      "Paper cup",
      "Disposable plastic cup",
      "Foam cup",
      "Glass cup",
      "Other plastic cup",
      "Food waste",
      "Plastic lid",
      "Metal lid",
      "Magazine paper",
      "Tissues",
      "Wrapping paper",
      "Normal paper",
      "Paper bag",
      "Plastified paper bag",
      "Pizza box",
      "Garbage bag",
      "Single-use carrier bag",
      "Polypropylene bag",
      "Produce bag",
      "Cereal bag",
      "Bread bag",
      "Plastic film",
      "Crisp packet",
      "Other plastic wrapper",
      "Retort pouch",
      "Spread tub",
      "Tupperware",
      "Disposable food container",
      "Foam food container",
      "Other plastic container",
      "Plastic glooves",
      "Plastic utensils",
      "Pop tab",
      "Rope & strings",
      "Scrap metal",
      "Shoe",
      "Six pack rings",
      "Squeezable tube",
      "Plastic straw",
      "Paper straw",
      "Styrofoam piece",
      "Toilet tube",
      "Unlabeled litter",
      "Glass jar",
      "Other plastic",
      "Cigarette",
    ],
  },
  proxy: [
    {
      prefix: "/api", // TODO: Fix proxy issue in production
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
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `poppins\:300,400,700`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-plugin-chakra-ui",
      options: {
        /**
         * @property {boolean} [isResettingCSS=true]
         * if false, this plugin will not use `<CSSReset />
         */
        isResettingCSS: true,
        /**
         * @property {boolean} [isUsingColorMode=true]
         * if false, this plugin will not use <ColorModeProvider />
         */
        isUsingColorMode: false,
      },
    },
    "gatsby-plugin-cname",
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: "UA-162905496-1",
      },
    },
  ],
}
